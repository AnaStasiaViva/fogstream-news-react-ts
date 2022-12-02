import styles from './styles.module.scss';
import { Card } from './Card';
import { useAppSelector } from 'hooks';
import { SkeletonBox } from 'components/SkeletonBox';
import { selectState } from 'redux/selectors';

export function Hero({ handlePost, title}: any) {

  const { list, ids } = useAppSelector(selectState);

  const key: string[] = ids[title];

  if (!key || !list ||!ids) {
    return (
      <SkeletonBox />
    )
  }

  return (

    <section className={styles.container}>

      <Card
        className={ styles.big }
        data={ list[key[0]] }
        size="big"
        onClick={handlePost}
        idx={key[0] }
      />
      <Card
        className={ styles.sm1 }
        data={ list[key[1]] }
        size="sm"
        onClick={handlePost}
        idx={key[1]}

      />
      <Card
        className={ styles.sm2 }
        data={ list[key[2]] }
        size="sm"
        onClick={handlePost}
        idx={key[2] }
      />
      <Card
        className={ styles.wide }
        data={list[key[3]] }
        size="wide"
        onClick={handlePost}
        idx={key[3] }
      />
    </section>
  );
}