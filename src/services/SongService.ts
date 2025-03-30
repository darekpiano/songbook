import { ChordProParser, Song, HtmlDivFormatter, TextFormatter } from 'chordsheetjs';

export class SongService {
  private parser: ChordProParser;
  private htmlFormatter: HtmlDivFormatter;
  private textFormatter: TextFormatter;

  constructor() {
    this.parser = new ChordProParser();
    this.htmlFormatter = new HtmlDivFormatter();
    this.textFormatter = new TextFormatter();
  }

  async loadSong(filename: string): Promise<Song | null> {
    try {
      const response = await fetch(`/data/songs/${filename}`);
      const text = await response.text();
      return this.parser.parse(text);
    } catch (error) {
      console.error('Error loading song:', error);
      return null;
    }
  }

  formatSong(song: Song, showChords: boolean = true): string {
    if (showChords) {
      return this.htmlFormatter.format(song);
    }
    return this.textFormatter.format(song);
  }

  transposeUp(song: Song): Song {
    return song.transposeUp();
  }

  transposeDown(song: Song): Song {
    return song.transposeDown();
  }
} 