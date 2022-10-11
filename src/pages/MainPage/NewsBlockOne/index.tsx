import styles from './styles.module.scss';
import { IHomePageBlockProps } from 'interfaces';
import { CardNews, Loading, SectionTitle } from 'components';
import { join } from 'utils'
import { useNormalized } from 'hooks';

export function NewsBlockOne({ data = [], handlePost, title }: IHomePageBlockProps) {

  const { list, ids } = useNormalized({ data, category: title });
  if (!list || !ids || ids.length === 0 || !title) return <Loading />

  const key: string[] = ids[title];
  if(!key) return <Loading />

  return (

    <section className={ styles.section }>

      <SectionTitle
        title={ title }
      />

      <div className={styles.container}>

        <div className={join( styles.side )}>
          <CardNews
            variant='medium'
            onClick={handlePost}
            data={list[key[0]]}
            idx={key[0]}
          />
        </div>

        <div className={join(styles.sm1, styles.common)}>
          <CardNews
            variant='small'
            onClick={handlePost}
            data={list[key[0]]}
            idx={key[0]}
          />

          <CardNews
            variant='small'
            onClick={handlePost}
            idx={key[1]}
            data={ list[key[1]] }
          />

          <CardNews
            variant='small'
            onClick={handlePost}
            idx={key[2]}
            data={list[key[2]] }
          />
          <CardNews
            variant='small'
            onClick={handlePost}
            idx={key[3]}
            data={ list[key[3]] }
          />
          <CardNews
            variant='small'
            onClick={handlePost}
            idx={key[4]}
            data={list[key[4]] }
          />
        </div>

        <div className={join(styles.sm2, styles.common)}>

          <CardNews
            variant='small'
            onClick={handlePost}
            idx={key[5]}
            data={ list[key[5]] }
          />
          <CardNews
            variant='small'
            onClick={handlePost}
            idx={key[6]}
            data={ list[key[6]] }
          />
          <CardNews
            variant='small'
            onClick={handlePost}
            idx={key[7]}
            data={ list[key[7]] }
          />
          <CardNews
            variant='small'
            onClick={handlePost}
            idx={key[8]}
            data={ list[key[8]] }
          />
          <CardNews
            variant='small'
            onClick={handlePost}
            idx={key[9]}
            data={ list[key[9]] }
          />
        </div>

      </div>

    </section>
  );
}
