import styles from './styles.module.scss';
import { IHomePageBlockProps, IValues } from 'interfaces';
import { CardNews, SectionTitle } from 'components';
import { useState } from 'react';
import { join } from 'utils';
import { BtnGroup } from './BtnGroup';
import { Recommend } from './Recommend';
import { useAppSelector } from 'hooks';
import { SkeletonBox } from 'components/SkeletonBox';
import { selectState } from 'redux/selectors';

export function NewsBlockFour({ handlePost, title }: IHomePageBlockProps) {

  const { list, ids } = useAppSelector(selectState);

  const [currentSearchValues, setCurrentSearchValues] = useState<IValues | any>({
    category: 'top',
    language: 'en',
    page: 1,
  });

  const handleNextPage = (value: string) => {

    if (currentSearchValues.page > 10 || (currentSearchValues.page === 1 && value === 'prev')) return;

    value === 'next'
      ? setCurrentSearchValues((prev: any) => ({
      ...prev,
      page: prev.page + 1
      }))
      : setCurrentSearchValues((prev: any) => ({
      ...prev,
      page: prev.page - 1
    }));
  }

  const key: any = ids[title];
  if (!key) {
    return (
      <SkeletonBox />
    )
  }


  return (
    <section className={ styles.section }>
      <SectionTitle
        title={ title }
      >
        <BtnGroup
          onClick={handleNextPage}
          title='Top news'
        />
      </SectionTitle>

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
            data={list[key[1]]}
            idx={key[1]}
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
          <CardNews
            variant='small'
            onClick={handlePost}
            data={list[key[4]]}
            idx={key[4]}
          />
        </div>

        <div className={join(styles.sm2, styles.common, styles.smallVersion)}>
          <Recommend
            searchVals={currentSearchValues}
            onClick={ handlePost }
          />
        </div>

      </div>
    </section>
  );
}
