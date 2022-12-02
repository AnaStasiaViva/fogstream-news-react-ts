
import styles from './styles.module.scss';
import { IHomePageBlockProps } from 'interfaces';
import { join } from 'utils';
import { CardNews, SectionTitle } from 'components';
import { useAppSelector } from 'hooks';
import { SkeletonBox } from 'components/SkeletonBox';
import { selectState } from 'redux/selectors';

export function NewsBlockThree({ handlePost, title}: IHomePageBlockProps) {

  const { list, ids } = useAppSelector(selectState);

  const key: string[] = ids[title];
  if (!key) {
    return (
      <SkeletonBox />
    )
  }

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
