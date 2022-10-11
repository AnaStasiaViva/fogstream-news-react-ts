import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export function Logo() {
  return (
    <div className={styles.logoContainer}>
      <Link
        to='/'
        className={styles.link}
      >
        <span>News</span>
        <span>hub</span>
      </Link>
    </div>
  );
}
