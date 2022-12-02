import InfiniteScroll from 'react-infinite-scroll-component';
import styles from './styles.module.scss';
import { CardNews, Loading } from 'components';
import { useAppDispatch, useNewsScroll } from 'hooks';
import { articleActions } from 'redux/slices';
import { INewsFetched } from 'interfaces';
import { SkeletonBox } from 'components/SkeletonBox';

export function NewsByCategoryPage() {

  const dispatch: any = useAppDispatch();
  const { loadMore, hasMore, list } = useNewsScroll();

  if (!list || list.length === 0) {
    return (
      <SkeletonBox />
    )
  }

  const handlePost = (idx: string) => {
    dispatch(articleActions.addPosts(idx))
  };

  return (
    <InfiniteScroll
      dataLength={list.length}
      next={loadMore}
      hasMore={hasMore}
      loader={<Loading />}
    >
      <div className={styles.newsContainer}>
        {list && list.map((item: INewsFetched, idx: number) => (
          <CardNews
            key={item.link + idx }
            variant='bordered'
            onClick={handlePost}
            data={item}
            idx={item.link}
          />
        ))}

      </div>

    </InfiniteScroll>

  )
}
