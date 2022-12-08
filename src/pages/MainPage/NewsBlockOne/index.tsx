import styles from './styles.module.scss';
import { IHomePageBlockProps } from 'interfaces';
import { CardNews, SectionTitle } from 'components';
import { join } from 'utils'
import { useAppSelector } from 'hooks';
import { SkeletonBox } from 'components/SkeletonBox';
import { selectState } from 'redux/selectors';

export function NewsBlockOne({ handlePost, title }: IHomePageBlockProps) {

  const { list, ids } = useAppSelector(selectState);

  const key: string[] = ids[title];
  if (!key) {
    return (
      <SkeletonBox />
    )
  }

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
            variant='plain'
            onClick={handlePost}
            idx={key[5]}
            data={ list[key[5]] }
          />
          <CardNews
            variant='plain'
            onClick={handlePost}
            idx={key[6]}
            data={ list[key[6]] }
          />
          <CardNews
            variant='plain'
            onClick={handlePost}
            idx={key[7]}
            data={ list[key[7]] }
          />
          <CardNews
            variant='plain'
            onClick={handlePost}
            idx={key[8]}
            data={ list[key[8]] }
          />
          <CardNews
            variant='plain'
            onClick={handlePost}
            idx={key[9]}
            data={ list[key[9]] }
          />
          <CardNews
            variant='plain'
            onClick={handlePost}
            idx={key[1]}
            data={ list[key[1]] }
          />
          <CardNews
            variant='plain'
            onClick={handlePost}
            idx={key[2]}
            data={ list[key[2]] }
          />
          <CardNews
            variant='plain'
            onClick={handlePost}
            idx={key[3]}
            data={ list[key[3]] }
          />
        </div>

      </div>

    </section>
  );
}
