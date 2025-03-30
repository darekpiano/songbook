import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSongById } from '../../data/songs';
import { SongService } from '../../services/SongService';
import { Song } from 'chordsheetjs';
import styles from '../../styles/components/SongDetail.module.scss';

export const SongDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [songContent, setSongContent] = useState<string>('');
  const [showChords, setShowChords] = useState(true);
  const [transpose, setTranspose] = useState(0);
  const [song, setSong] = useState<Song | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
    <div className="max-w-4xl mx-auto p-4">
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

      <div className={styles.controls}>
        <button
          onClick={() => setShowChords(!showChords)}
          className="inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-full bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"
        >
          {showChords ? 'Ukryj akordy' : 'Pokaż akordy'}
        </button>
        <div className="flex items-center gap-1 bg-gray-100 rounded-full p-1">
          <button
            onClick={() => setTranspose(prev => prev - 1)}
            className="w-7 h-7 flex items-center justify-center rounded-full bg-white text-gray-700 hover:bg-gray-50 transition-colors"
          >
            -
          </button>
          <span className="px-2 text-sm font-medium">{transpose}</span>
          <button
            onClick={() => setTranspose(prev => prev + 1)}
            className="w-7 h-7 flex items-center justify-center rounded-full bg-white text-gray-700 hover:bg-gray-50 transition-colors"
          >
            +
          </button>
        </div>
      </div>

      <div 
        className={`${styles.songContent} prose max-w-none bg-white rounded-lg shadow-sm p-6 leading-relaxed`}
        dangerouslySetInnerHTML={{ __html: songContent }}
      />
    </div>
  );
}; 