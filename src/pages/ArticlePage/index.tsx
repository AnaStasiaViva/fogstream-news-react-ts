import styles from './styles.module.scss';
import { Loading, VideoPlayer } from 'components';
import { ArticleItem } from './ArticleItem';
import { ListRecommendation } from './ListRecommendations';
import { useAppDispatch, useAppSelector } from 'hooks';
import { articleActions } from 'redux/slices';
import { INewsFetched } from 'interfaces';

export function ArticlePage() {
  const dispatch = useAppDispatch();

  const { recommendationsId, id } = useAppSelector(state => state.articleReducer);
  const { data } = useAppSelector(state => state.dbReducer);

  const handlePost = (idx: string) => {
    dispatch(articleActions.addPosts(idx))
  };

  if(!data || !id) return <Loading />

  const currentArticle: INewsFetched = data[id];

  return (
    <div className={styles.article}>

      <ArticleItem
        article={ currentArticle }
      />

      <div className={styles.additional}>

        <h4>MORE MUST-READ STORIes</h4>

      {currentArticle && currentArticle?.video_url !== null && (
        <VideoPlayer video={currentArticle.video_url} />
      )}

        <ListRecommendation
          list={recommendationsId}
          data={data}
          handlePost={handlePost}
        />

      </div>
    </div>
  )
}
