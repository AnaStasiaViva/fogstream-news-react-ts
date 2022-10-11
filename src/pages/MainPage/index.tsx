import styles from './styles.module.scss';
import { NewsBlock } from './NewsBlock';
import { categoryValues } from '../../constants';

export function MainPage() {
  return (
    <div className={styles.mainContainer}>
      <NewsBlock type="1" category={categoryValues[0].category } />
      <NewsBlock type="2" category={categoryValues[1].category } />
      <NewsBlock type="3" category={categoryValues[2].category} />
      <NewsBlock type="4" category={categoryValues[3].category} />
      <NewsBlock type="5" category={categoryValues[4].category} />
      <NewsBlock type="6" category={categoryValues[5].category} />
    </div>
  );
}
