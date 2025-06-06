import { useState, useMemo, useEffect } from 'react';
import { songs } from '../../data/songs';
import { Link } from 'react-router-dom';
import { AlphabetFilter } from './AlphabetFilter';
import styles from '../../styles/components/SongList.module.scss';

type SortField = 'title' | 'artist' | 'year' | 'key';
type SortOrder = 'asc' | 'desc';

// Klucze dla localStorage
const STORAGE_KEY_TAGS = 'songbook_selected_tags';
const STORAGE_KEY_LETTER = 'songbook_selected_letter';
const STORAGE_KEY_SORT_FIELD = 'songbook_sort_field';
const STORAGE_KEY_SORT_ORDER = 'songbook_sort_order';

export const SongList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [sortField, setSortField] = useState<SortField>('title');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

  // Wczytaj zapisane filtry przy pierwszym renderowaniu
  useEffect(() => {
    const savedTagsJson = localStorage.getItem(STORAGE_KEY_TAGS);
    const savedLetter = localStorage.getItem(STORAGE_KEY_LETTER);
    const savedSortField = localStorage.getItem(STORAGE_KEY_SORT_FIELD) as SortField;
    const savedSortOrder = localStorage.getItem(STORAGE_KEY_SORT_ORDER) as SortOrder;

    if (savedTagsJson) {
      try {
        const savedTags = JSON.parse(savedTagsJson);
        if (Array.isArray(savedTags)) {
          setSelectedTags(savedTags);
        }
      } catch (e) {
        console.error('Błąd parsowania zapisanych tagów:', e);
      }
    }
    
    if (savedLetter) setSelectedLetter(savedLetter);
    if (savedSortField) setSortField(savedSortField);
    if (savedSortOrder) setSortOrder(savedSortOrder);
  }, []);

  // Zapisuj zmiany filtrów do localStorage
  useEffect(() => {
    if (selectedTags.length > 0) {
      localStorage.setItem(STORAGE_KEY_TAGS, JSON.stringify(selectedTags));
    } else {
      localStorage.removeItem(STORAGE_KEY_TAGS);
    }
  }, [selectedTags]);

  useEffect(() => {
    if (selectedLetter) {
      localStorage.setItem(STORAGE_KEY_LETTER, selectedLetter);
    } else {
      localStorage.removeItem(STORAGE_KEY_LETTER);
    }
  }, [selectedLetter]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_SORT_FIELD, sortField);
  }, [sortField]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_SORT_ORDER, sortOrder);
  }, [sortOrder]);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    songs.forEach(song => song.tags?.forEach(tag => tags.add(tag)));
    return Array.from(tags).sort();
  }, []);

  const handleLetterSelect = (letter: string | null) => {
    setSelectedLetter(letter);
    // Resetuj wyszukiwarkę przy wyborze litery
    if (letter) {
      setSearchQuery('');
    }
  };

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prevTags => {
      if (prevTags.includes(tag)) {
        // Jeśli tag jest już wybrany, usuń go
        return prevTags.filter(t => t !== tag);
      } else {
        // W przeciwnym razie dodaj go
        return [...prevTags, tag];
      }
    });
  };

  const handleClearFilters = () => {
    setSelectedTags([]);
    setSelectedLetter(null);
    setSearchQuery('');
    setSortField('title');
    setSortOrder('asc');
  };

  const filteredAndSortedSongs = useMemo(() => {
    let result = [...songs];

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(song => 
        song.title.toLowerCase().includes(query) ||
        song.artist?.toLowerCase().includes(query) ||
        song.key?.toLowerCase().includes(query)
      );
    }

    // Filter by tags - pieśń musi mieć WSZYSTKIE wybrane tagi
    if (selectedTags.length > 0) {
      result = result.filter(song => 
        selectedTags.every(tag => song.tags?.includes(tag))
      );
    }

    // Filter by letter
    if (selectedLetter) {
      if (selectedLetter === '#') {
        // Filtruj numeryczne i specjalne znaki (nie litery)
        result = result.filter(song => {
          const firstChar = song.title.charAt(0).toLowerCase();
          return !/^[a-ząćęłńóśźż]/.test(firstChar);
        });
      } else {
        // Filtruj po pierwszej literze (bez uwzględniania wielkości liter)
        result = result.filter(song => 
          song.title.charAt(0).toLowerCase() === selectedLetter.toLowerCase()
        );
      }
    }

    // Sort
    result.sort((a, b) => {
      const aValue = a[sortField]?.toString().toLowerCase() ?? '';
      const bValue = b[sortField]?.toString().toLowerCase() ?? '';
      return sortOrder === 'asc' 
        ? aValue.localeCompare(bValue, 'pl')
        : bValue.localeCompare(aValue, 'pl');
    });

    return result;
  }, [searchQuery, selectedTags, selectedLetter, sortField, sortOrder]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.controls}>
        <input
          type="text"
          placeholder="Szukaj piosenki..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.searchInput}
        />
        
        <AlphabetFilter 
          selectedLetter={selectedLetter} 
          onLetterSelect={handleLetterSelect}
          onClearFilters={handleClearFilters}
        />
        
        <div className={styles.tagContainer}>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => handleTagToggle(tag)}
              className={`${styles.tagButton} ${selectedTags.includes(tag) ? styles.activeTag : ''}`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Wskaźnik aktywnych filtrów */}
      {(selectedTags.length > 0 || selectedLetter) && (
        <div className={styles.activeFilters}>
          <span>Aktywne filtry: </span>
          {selectedTags.map(tag => (
            <span 
              key={tag} 
              className={styles.filterBadge} 
              onClick={() => handleTagToggle(tag)}
              title="Kliknij, aby usunąć"
            >
              {tag} ✕
            </span>
          ))}
          {selectedLetter && (
            <span 
              className={styles.filterBadge}
              onClick={() => setSelectedLetter(null)}
              title="Kliknij, aby usunąć"
            >
              Litera: {selectedLetter} ✕
            </span>
          )}
        </div>
      )}

      <div className={styles.tableContainer}>
        <table className={styles.songTable}>
          <thead>
            <tr>
              <th
                onClick={() => handleSort('title')}
                className={styles.tableHeader}
              >
                Tytuł {sortField === 'title' && (sortOrder === 'asc' ? '↑' : '↓')}
              </th>
              <th
                onClick={() => handleSort('artist')}
                className={styles.tableHeader}
              >
                Artysta {sortField === 'artist' && (sortOrder === 'asc' ? '↑' : '↓')}
              </th>
              <th
                onClick={() => handleSort('year')}
                className={styles.tableHeader}
              >
                Rok {sortField === 'year' && (sortOrder === 'asc' ? '↑' : '↓')}
              </th>
              <th
                onClick={() => handleSort('key')}
                className={styles.tableHeader}
              >
                Tonacja {sortField === 'key' && (sortOrder === 'asc' ? '↑' : '↓')}
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredAndSortedSongs.length > 0 ? (
              filteredAndSortedSongs.map(song => (
                <tr key={song.id} className={styles.tableRow}>
                  <td className={styles.tableCell}>
                    <Link
                      to={`/songs/${song.id}`}
                      className={styles.songLink}
                    >
                      {song.title}
                    </Link>
                  </td>
                  <td className={styles.tableCell}>
                    {song.artist}
                  </td>
                  <td className={styles.tableCell}>
                    {song.year}
                  </td>
                  <td className={styles.tableCell}>
                    {song.key}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className={styles.emptyMessage}>
                  Nie znaleziono piosenek spełniających kryteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}; 