import { ButtonHTMLAttributes } from 'react';
import styles from '../../styles/components/ControlButton.module.scss';

interface ControlButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  active?: boolean;
}

export const ControlButton = ({ 
  children, 
  icon, 
  active, 
  className,
  ...props 
}: ControlButtonProps) => {
  return (
    <button 
      className={`${styles.button} ${active ? styles.active : ''} ${className || ''}`}
      {...props}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </button>
  );
}; 