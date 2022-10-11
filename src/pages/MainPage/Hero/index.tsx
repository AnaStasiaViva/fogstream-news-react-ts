import styles from './styles.module.scss';
import { Card } from './Card';
import { Loading } from 'components';
import { useNormalized } from 'hooks';

export function Hero({ data = [], handlePost, title}: any) {

  const { list, ids } = useNormalized({ data, category: title });

    if (!list || !ids || ids.length === 0 || !title) return <Loading />
    const key: any = ids[title];
    if(!key) return <Loading />

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