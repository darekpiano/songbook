import { Link, useLocation } from 'react-router-dom';
import styles from '../../styles/components/Layout.module.scss';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isSongPage = location.pathname.includes('/songs/');

  return (
    <div className={styles.layout}>
      {!isSongPage && (
        <header className={styles.header}>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>
              {isHomePage ? (
                'Śpiewnik'
              ) : (
                <Link to="/">Śpiewnik</Link>
              )}
            </h1>
            {isHomePage && (
              <div className={styles.subtitle}>
                <h2>Songbook</h2>
                <p className={styles.quote}>"Śpiewajcie Panu pieśń nową, śpiewajcie Panu, wszystkie krainy!"</p>
                <p className={styles.reference}>Psalm 96:1</p>
                <p className={styles.author}>darekPiano - DΣigma</p>
              </div>
            )}
          </div>
          <div className={styles.controls}>
            {/* Control buttons will be added here */}
          </div>
        </header>
      )}
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
}; 