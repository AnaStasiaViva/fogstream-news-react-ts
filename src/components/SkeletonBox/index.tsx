import Skeleton from 'react-loading-skeleton';
import styles from './styles.module.scss';
import 'react-loading-skeleton/dist/skeleton.css'
import { join } from '../../utils';

export function SkeletonBox() {
  return (
    <div className={join(styles.skeletonContainer)}>
      <div className={ styles.bg}>
        <Skeleton className={styles.col} />
      </div>
      <div className={ styles.sm1}>
        <Skeleton className={ styles.col2} />
      </div>
      <div className={ styles.sm2}>
        <Skeleton className={ styles.col2}/>
      </div>
      <div className={ styles.wide}>
        <Skeleton className={ styles.col2}/>
      </div>
    </div>
  )
};