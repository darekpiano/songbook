import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSongById } from '../../data/songs';
import { SongService } from '../../services/SongService';
import { Song } from 'chordsheetjs';

export const SongDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [songContent, setSongContent] = useState<string>('');
  const [showChords, setShowChords] = useState(true);
  const [transpose, setTranspose] = useState(0);
  const [song, setSong] = useState<Song | null>(null);

  const songMetadata = getSongById(id || '');
  const songService = new SongService();

  useEffect(() => {
    const loadSong = async () => {
      if (songMetadata) {
        const loadedSong = await songService.loadSong(songMetadata.filename);
        if (loadedSong) {
          setSong(loadedSong);
          setSongContent(songService.formatSong(loadedSong, showChords));
        }
      }
    };
    loadSong();
  }, [songMetadata]);

  useEffect(() => {
    if (song) {
      let transposedSong = song;
      const steps = Math.abs(transpose);
      
      for (let i = 0; i < steps; i++) {
        if (transpose > 0) {
          transposedSong = songService.transposeUp(transposedSong);
        } else if (transpose < 0) {
          transposedSong = songService.transposeDown(transposedSong);
        }
      }
      
      setSongContent(songService.formatSong(transposedSong, showChords));
    }
  }, [song, showChords, transpose]);

  if (!songMetadata) {
    return <div className="p-4">Nie znaleziono piosenki</div>;
  }

  const handleTranspose = (semitones: number) => {
    setTranspose(prev => prev + semitones);
  };

  return (
    <div className="p-4">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">{songMetadata.title}</h1>
        <div className="text-gray-600">
          <p>Artysta: {songMetadata.artist}</p>
          <p>Rok: {songMetadata.year}</p>
          <p>Tonacja: {songMetadata.key}</p>
        </div>
      </div>

      <div className="mb-4 flex gap-4">
        <button
          onClick={() => setShowChords(!showChords)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {showChords ? 'Ukryj akordy' : 'Pokaż akordy'}
        </button>
        <button
          onClick={() => handleTranspose(-1)}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          -1
        </button>
        <button
          onClick={() => handleTranspose(1)}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          +1
        </button>
      </div>

      <div 
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: songContent }}
      />
    </div>
  );
}; 