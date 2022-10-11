import styles from './styles.module.scss';
import css from 'assets/styles/global.module.scss';
import { join } from 'utils';

interface IHDate{
  date: string
}

export function HDate({ date }: IHDate) {
  return (
    <div className={ join(css.italic, styles.container) }>
      <span>{ date }</span>
    </div>
  );
}
