
import { CardNews, Loading, SectionTitle, Slider } from 'components';
import { useNormalized } from 'hooks';
import { IHomePageBlockProps } from 'interfaces';
import styles from './styles.module.scss';

export function NewsBlockTwoSlider({ data = [], handlePost, title }: IHomePageBlockProps) {

  const { list, ids } = useNormalized({ data, category: title });

  if (!list || !ids || ids.length === 0 || !title) return <Loading />

  const key: any = ids[title];
  if (!key) return <Loading />

  return (
    <section className={styles.container}>

      <SectionTitle
        title={ title }
      />

      <Slider
        onClick={ handlePost }
        post={list}
        keys={key}
      />

      <div className={ styles.smallVersion }>
        <CardNews
          variant='small'
          onClick={handlePost}
          data={ list[key[0]] }
          idx={key[0] }
        />
        <CardNews
          variant='small'
          onClick={handlePost}
          data={list[key[2]]}
          idx={key[2]}
        />
        <CardNews
          variant='small'
          onClick={handlePost}
          data={list[key[3]]}
          idx={key[3]}
        />

      </div>

    </section>
  );
}
