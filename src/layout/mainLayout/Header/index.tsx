import { join } from 'utils';
import css from 'assets/styles/global.module.scss';
import styles from './styles.module.scss';
import { Banner } from 'components/Banner';
import { Logo } from 'components';

export function Header() {
  return (
    <div className={ styles.header }>
      <div className={ join(css.content, styles.inner) }>
        <Logo />
        <Banner />
      </div>
    </div>
  )
}