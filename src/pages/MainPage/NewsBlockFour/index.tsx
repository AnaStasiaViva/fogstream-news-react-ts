import styles from './styles.module.scss';
import { IHomePageBlockProps, IValues } from 'interfaces';
import { CardNews, Loading, SectionTitle } from 'components';
import { useState } from 'react';
import { join } from 'utils';
import { BtnGroup } from './BtnGroup';
import { Recommend } from './Recommend';
import { useNormalized } from 'hooks';

export function NewsBlockFour({ data = [], handlePost, title }: IHomePageBlockProps) {

  const { list, ids } = useNormalized({ data, category: title });

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

  if (!list || !ids || ids.length === 0 || !title) return <Loading />

  const key: any = ids[title];

  if(!key) return <Loading />


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
