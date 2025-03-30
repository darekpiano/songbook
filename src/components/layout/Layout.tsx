import { Link, useLocation } from 'react-router-dom';
import styles from '../../styles/components/Layout.module.scss';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          {isHomePage ? (
            'Śpiewnik'
          ) : (
            <Link to="/">Śpiewnik</Link>
          )}
        </h1>
        <div className={styles.controls}>
          {/* Control buttons will be added here */}
        </div>
      </header>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
}; 