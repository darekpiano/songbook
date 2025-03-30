import { ChordProParser, Song, HtmlDivFormatter, TextFormatter } from 'chordsheetjs';
import { getSongById, SongMetadata } from '../data/songs';

export class SongService {
  private parser: ChordProParser;
  private formatter: HtmlDivFormatter;
  private textFormatter: TextFormatter;

  constructor() {
    this.parser = new ChordProParser();
    this.formatter = new HtmlDivFormatter();
    this.textFormatter = new TextFormatter();
  }

  async loadSong(id: string): Promise<{ metadata: SongMetadata; song: Song } | null> {
    const metadata = getSongById(id);
    if (!metadata) return null;

    try {
      const response = await fetch(`/songbook/data/songs/${metadata.filename}`);
      const chordSheet = await response.text();
      const song = this.parser.parse(chordSheet);
      return { metadata, song };
    } catch (error) {
      console.error(`Error loading song ${id}:`, error);
      return null;
    }
  }

  formatSong(song: Song, showChords: boolean = true): string {
    if (!showChords) {
      return this.textFormatter.format(song);
    }
    return this.formatter.format(song);
  }

  transposeUp(song: Song): Song {
    return song.transpose(1);
  }

  transposeDown(song: Song): Song {
    return song.transpose(-1);
  }

  transpose(song: Song, semitones: number): Song {
    return song.transpose(semitones);
  }
} 