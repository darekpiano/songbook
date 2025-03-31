import { ChordProParser, Song, HtmlDivFormatter, TextFormatter, Metadata } from 'chordsheetjs';

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
    let formattedContent: string;
    let dataMode: string;

    if (showChords) {
      formattedContent = this.htmlFormatter.format(song);
      dataMode = "html";
    } else {
      formattedContent = this.textFormatter.format(song);
      dataMode = "text";
    }

    const baseStyles = `
      .songContent {
        white-space: pre;
        width: 100%;
        font-size: 1.1em;
        line-height: 1.6;
      }
      
      .songContent[data-mode="text"] {
        font-family: monospace;
        font-size: 14px;
        line-height: 1.5;
      }
      
      .songContent[data-mode="html"] {
        font-family: inherit;
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

    if (dataMode === 'text') {
      return `<style>${baseStyles}</style><pre class="songContent" data-mode="${dataMode}">${formattedContent}</pre>`;
    } else {
      return `<style>${baseStyles}</style><div class="songContent" data-mode="${dataMode}">${formattedContent}</div>`;
    }
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