import { NAVIGATION_LINKS } from '../../constants';
import { Link, useLocation, matchPath } from 'react-router-dom';
import styles from './styles.module.scss';
import { INavLinks } from 'interfaces';
import { join } from 'utils';

export function MainMenu() {
  const { pathname } = useLocation();

  return (
    <nav className={styles.nav}>
      <ul className={ styles.menu}>
        { NAVIGATION_LINKS.map((item: INavLinks) => (
          <li
            className={ join(styles.menuItem, matchPath(item.link, pathname) && styles.active) }
            key={item.link}
          >
            <Link
              to={ item.link }
            >
            { item.name }
            </Link>
          </li>

          ))}
      </ul>

    </nav>
  );
}