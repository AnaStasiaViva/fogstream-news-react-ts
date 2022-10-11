import InfiniteScroll from 'react-infinite-scroll-component';
import { Loading, CardNews } from 'components';
import { articleActions } from 'redux/slices';
import styles from './styles.module.scss';
import { useAppDispatch, useSearchScroll } from 'hooks';
import { INewsFetched } from 'interfaces';

export function SearchPage() {

  const dispatch = useAppDispatch();
  const {loadMore, hasMore ,list} = useSearchScroll();

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
      <div className={styles.searchContainer}>
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
