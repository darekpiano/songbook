import styles from '../../styles/components/AlphabetFilter.module.scss';

interface AlphabetFilterProps {
  onLetterSelect: (letter: string | null) => void;
  selectedLetter: string | null;
  onClearFilters?: () => void;
}

export const AlphabetFilter = ({ onLetterSelect, selectedLetter, onClearFilters }: AlphabetFilterProps) => {
  // Polski alfabet z dodatkowymi znakami
  const alphabet = ['#', 'A', 'Ą', 'B', 'C', 'Ć', 'D', 'E', 'Ę', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'Ł', 'M', 'N', 'Ń', 'O', 'Ó', 'P', 'Q', 'R', 'S', 'Ś', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Ź', 'Ż'];

  return (
    <div className={styles.container}>
      <div className={styles.alphabetGrid}>
        {alphabet.map((letter) => (
          <button
            key={letter}
            className={`${styles.letterButton} ${selectedLetter === letter ? styles.active : ''}`}
            onClick={() => onLetterSelect(selectedLetter === letter ? null : letter)}
            aria-label={`Filtruj po literze ${letter}`}
          >
            {letter}
          </button>
        ))}
        {onClearFilters && (
          <button
            className={`${styles.letterButton} ${styles.clearButton}`}
            onClick={onClearFilters}
            aria-label="Wyczyść wszystkie filtry"
            title="Wyczyść filtry"
          >
            ✖
          </button>
        )}
      </div>
    </div>
  );
}; 