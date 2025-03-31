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
    if (showChords) {
      const formattedContent = this.htmlFormatter.format(song);
      const baseStyles = this.getBaseStyles();
      return `<style>${baseStyles}</style><div class="songContent" data-mode="html">${formattedContent}</div>`;
    } else {
      const formattedHtml = this.htmlFormatter.format(song);
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = formattedHtml;
      
      // Usuń wszystkie akordy
      const chords = tempDiv.querySelectorAll('.chord');
      chords.forEach(chord => chord.remove());
      
      // Usuń puste wiersze pozostałe po usunięciu akordów
      const rows = tempDiv.querySelectorAll('.row');
      rows.forEach(row => {
        const hasText = Array.from(row.childNodes).some(
          node => node.textContent && node.textContent.trim().length > 0
        );
        if (!hasText) {
          row.remove();
        }
      });
      
      // Usuń zbędne elementy
      tempDiv.querySelectorAll('.row').forEach(row => {
        const newDiv = document.createElement('div');
        newDiv.innerHTML = row.textContent || '';
        row.parentNode?.replaceChild(newDiv, row);
      });
      
      const baseStyles = this.getBaseStyles();
      return `<style>${baseStyles}</style><div class="songContent" data-mode="text">${tempDiv.innerHTML}</div>`;
    }
  }

  private getBaseStyles(): string {
    return `
      .songContent {
        white-space: pre;
        width: 100%;
        font-size: 1.1em;
        line-height: 1.6;
        font-family: inherit;
      }
      
      .songContent[data-mode="text"] {
        line-height: 1.6;
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