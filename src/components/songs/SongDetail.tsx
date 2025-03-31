import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getSongById } from '../../data/songs';
import { SongService } from '../../services/SongService';
import { Song } from 'chordsheetjs';
import styles from '../../styles/components/SongDetail.module.scss';

export const SongDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [songContent, setSongContent] = useState<string>('');
  const [showChords, setShowChords] = useState(false);
  const [transpose, setTranspose] = useState(0);
  const [song, setSong] = useState<Song | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showInfo, setShowInfo] = useState(false);

  const songMetadata = getSongById(id || '');
  const songService = new SongService();

  useEffect(() => {
    const loadSong = async () => {
      if (!songMetadata) {
        setError('Nie znaleziono piosenki');
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        setError(null);
        const loadedSong = await songService.loadSong(songMetadata.filename);
        if (loadedSong) {
          setSong(loadedSong);
          setSongContent(songService.formatSong(loadedSong, showChords));
        } else {
          setError('Nie udało się załadować piosenki');
        }
      } catch (err) {
        setError('Wystąpił błąd podczas ładowania piosenki');
        console.error('Error loading song:', err);
      } finally {
        setIsLoading(false);
      }
    };
    loadSong();
  }, [songMetadata]);

  useEffect(() => {
    if (song) {
      let transposedSong = song.clone();
      transposedSong = transposedSong.transpose(transpose);
      setSongContent(songService.formatSong(transposedSong, showChords));
    }
  }, [song, showChords, transpose]);

  if (!songMetadata) {
    return <div className="p-4">Nie znaleziono piosenki</div>;
  }

  if (isLoading) {
    return (
      <div className="p-4">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/3"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <div className={styles.leftControls}>
          <div className={styles.appTitle}>
            <Link to="/" className={styles.homeLink} aria-label="Powrót">
              <span className={styles.backArrow}>&#8592;</span>
            </Link>
          </div>
          
          <button
            onClick={() => setShowChords(!showChords)}
            className={`${styles.button} ${styles.primary}`}
            title={showChords ? "Ukryj akordy" : "Pokaż akordy"}
            aria-label={showChords ? "Ukryj akordy" : "Pokaż akordy"}
          >
            <span className={styles.chordIcon}>{showChords ? "♫" : "♪"}</span>
          </button>
          
          <div className={styles.transposeControls} title="Transpozycja">
            <span className={styles.transposeLabel}>T</span>
            <button
              onClick={() => setTranspose(prev => prev - 1)}
              className={styles.transposeButton}
              aria-label="Transponuj o pół tonu w dół"
            >
              −
            </button>
            <span className={styles.transposeValue}>{transpose}</span>
            <button
              onClick={() => setTranspose(prev => prev + 1)}
              className={styles.transposeButton}
              aria-label="Transponuj o pół tonu w górę"
            >
              +
            </button>
          </div>
          
          <button
            onClick={() => setShowInfo(!showInfo)}
            className={styles.button}
            title="Informacje o pieśni"
          >
            Info
          </button>
        </div>
      </div>

      {showInfo && (
        <div className={styles.songHeader}>
          <h1>{songMetadata.title}</h1>
          <div className={styles.metadata}>
            <p>Artysta: <span>{songMetadata.artist}</span></p>
            <p>Rok: <span>{songMetadata.year}</span></p>
            <p>Tonacja: <span>{songMetadata.key}</span></p>
            {song && song.metadata.capo && (
              <p>Kapodaster: <span>{song.metadata.capo}</span></p>
            )}
            {song && song.metadata.tempo && (
              <p>Tempo: <span>{song.metadata.tempo}</span></p>
            )}
            {songMetadata.tags && songMetadata.tags.length > 0 && (
              <p>Tagi: <span>{songMetadata.tags.join(', ')}</span></p>
            )}
          </div>
        </div>
      )}

      <div 
        className={styles.songContent}
        dangerouslySetInnerHTML={{ __html: songContent }}
      />
    </div>
  );
}; 