import { ErrorMessage, LinkItem, Loading, NewsItem } from 'components';
import { SkeletonBox } from 'components/SkeletonBox';
import { IValues } from 'interfaces';
import { newsMediaStackApi } from 'services';
import styles from './styles.module.scss';

interface IRecommendation{
  onClick: (idx: string) => void
  searchVals: IValues
}

export function Recommend({ searchVals, onClick}: IRecommendation) {

  const { data, isLoading, error } = newsMediaStackApi.useGetNewsQuery(searchVals);

  if (!data || data.nextPage === null || !data.nextPage || isLoading) return <SkeletonBox />;
  if(error) return <ErrorMessage errorMessage={error} />

  const reduced = data.ids.slice(0, 5);

  return (
    <>
      {data && reduced.length && reduced.map((item: any, idx: number) => (
        <LinkItem
          key={data.data[item].link + idx}
          value={data.data[item]}
          onClick={ onClick}
          className={styles.card}
          idx={ data.data[item].link }
        >
          <NewsItem
            { ...data.data[item] }
            variant='small'
          />
        </LinkItem>
      ))}
    </>
  )
}
