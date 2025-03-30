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
        white-space: pre;
      }
      .songContent .chord {
        font-weight: 600;
        color: var(--primary-color);
        font-family: monospace;
      }
      .songContent .chord:not(:last-child) {
        padding-right: 1em;
      }
      .songContent .empty-line {
        height: 1em;
      }
      .songContent .paragraph {
        margin-bottom: 1em;
      }
      .songContent .chord:after,
      .songContent .lyrics:after {
        content: '\\200b';
      }
      .songContent .row {
        display: flex;
        line-height: 150%;
      }
    `;
    const hideStyles = !showChords ? `
      .songContent .chord {
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