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
          <h1 className={styles.title}>
            {isHomePage ? (
              <>
                Songbook
                <span className={styles.subtitle}>
                  "Śpiewajcie Panu pieśń nową, śpiewajcie Panu, wszystkie krainy!"
                  <br />Psalm 96:1
                </span>
              </>
            ) : (
              <Link to="/">Songbook</Link>
            )}
          </h1>
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