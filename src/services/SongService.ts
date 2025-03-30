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
    
    if (!showChords) {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = formattedSong;
      const chordElements = tempDiv.getElementsByClassName('chord');
      Array.from(chordElements).forEach((chord: Element) => {
        const chordElement = chord as HTMLElement;
        chordElement.style.visibility = 'hidden';
        chordElement.style.height = '0';
        chordElement.style.width = '0';
        chordElement.style.position = 'absolute';
        chordElement.style.pointerEvents = 'none';
      });
      return `<div class="songContent" data-mode="text">${tempDiv.innerHTML}</div>`;
    }

    const baseStyles = `
      .songContent {
        white-space: pre;
        width: 100%;
      }
      .songContent[data-mode="text"] {
        font-family: monospace;
        font-size: 14px;
        line-height: 1.5;
      }
      .songContent[data-mode="text"] .chord {
        visibility: hidden;
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
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
        min-height: 1.5em;
      }
    `;
    return `<style>${baseStyles}</style><div class="songContent" data-mode="html">${formattedSong}</div>`;
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