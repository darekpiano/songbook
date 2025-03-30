import { ChordProParser, Song, HtmlDivFormatter, Metadata } from 'chordsheetjs';

export class SongService {
  private parser: ChordProParser;
  private htmlFormatter: HtmlDivFormatter;

  constructor() {
    this.parser = new ChordProParser();
    this.htmlFormatter = new HtmlDivFormatter();
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
    const baseStyles = `
      .songContent {
        white-space: pre-wrap;
      }
      .songContent .chord {
        color: var(--primary-color);
        font-weight: 600;
        font-family: monospace;
        padding: 0 0.2em;
      }
      .songContent .row {
        padding: 0.2em 0;
        min-height: 2.2em;
      }
      .songContent .paragraph {
        margin-bottom: 1.5em;
      }
    `;
    const hideStyles = !showChords ? `
      .songContent .chord {
        display: none !important;
      }
      .songContent .row {
        min-height: 1.6em !important;
        padding: 0 !important;
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