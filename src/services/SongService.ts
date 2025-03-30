import { ChordProParser, Song, HtmlTableFormatter, Metadata } from 'chordsheetjs';

export class SongService {
  private parser: ChordProParser;
  private htmlFormatter: HtmlTableFormatter;

  constructor() {
    this.parser = new ChordProParser();
    this.htmlFormatter = new HtmlTableFormatter();
  }

  async loadSong(filename: string): Promise<Song | null> {
    try {
      const baseUrl = import.meta.env.BASE_URL;
      const response = await fetch(`${baseUrl}data/songs/${filename}`);
      const text = await response.text();
      const song = this.parser.parse(text);
      return song;
    } catch (error) {
      console.error('Error loading song:', error);
      return null;
    }
  }

  formatSong(song: Song, showChords: boolean = true): string {
    const formattedSong = this.htmlFormatter.format(song);
    const baseStyles = this.htmlFormatter.cssString('.songContent');
    const hideStyles = !showChords ? `
      .songContent .chord {
        display: none !important;
      }
      .songContent tr.chords {
        display: none !important;
      }
    ` : '';
    return `<style>${baseStyles}${hideStyles}</style>${formattedSong}`;
  }

  transposeUp(song: Song): Song {
    return song.transpose(1);
  }

  transposeDown(song: Song): Song {
    return song.transpose(-1);
  }

  getMetadata(song: Song): Metadata {
    return song.metadata.clone();
  }

  getDefaultStyles(): string {
    return this.htmlFormatter.cssString('.songContent');
  }
} 