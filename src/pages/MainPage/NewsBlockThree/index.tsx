
import styles from './styles.module.scss';
import { IHomePageBlockProps } from 'interfaces';
import { join } from 'utils';
import { CardNews, Loading, SectionTitle } from 'components';
import { useNormalized } from 'hooks';

export function NewsBlockThree({  data = [], handlePost, title}: IHomePageBlockProps) {

  const { list, ids } = useNormalized({ data, category: title });
  if (!list || !ids || ids.length === 0 || !title) return <Loading />

  const key: any = ids[title];

  if(!key) return <Loading />

  return (

    <section className={styles.wrapper}>
      <SectionTitle
        title={ title }
      />
      <div className={styles.container}>
        <CardNews
          variant='medium'
          onClick={handlePost}
          data={list[key[0]] }
          idx={key[0] }
        />
        <CardNews
          variant='medium'
          onClick={handlePost}
          data={list[key[1]] }
          idx={key[1] }
        />

        <div className={join(styles.sm, styles.commonSm)}>
          <CardNews
            variant='small'
            onClick={handlePost}
            data={list[key[0]] }
            idx={key[0] }
          />
          <CardNews
            variant='small'
            onClick={handlePost}
            data={ list[key[1]] }
            idx={key[1] }
          />
        </div>


        <div className={join(styles.sm2, styles.commonSm)}>
          <CardNews
            variant='small'
            onClick={handlePost}
            data={ list[key[2]] }
            idx={key[2] }
          />
          <CardNews
            variant='small'
            onClick={handlePost}
            data={ list[key[3]] }
            idx={key[3] }
          />
        </div>

      </div>

    </section>

  );
}
