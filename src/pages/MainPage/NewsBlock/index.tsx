import { Hero } from '../Hero';
import { NewsBlockOne } from '../NewsBlockOne';
import { NewsBlockTwoSlider } from '../NewsBlockTwoSlider';
import { NewsBlockThree } from '../NewsBlockThree';
import { NewsBlockFour } from '../NewsBlockFour';
import { articleActions, homeActions } from 'redux/slices';
import { useLazyGetNewsQuery } from 'services/newsMediaStack';
import { useAppDispatch } from 'hooks';
import { useEffect } from 'react';
import { useIntersectionObserver } from 'hooks/useIntersectionObserver';
import { dbActions } from "redux/slices";
import css from 'assets/styles/global.module.scss';
import { ErrorMessage } from 'components';


const newsLayoutMap = {
  1: Hero,
  2: NewsBlockOne,
  3: NewsBlockTwoSlider,
  4: NewsBlockOne,
  5: NewsBlockThree,
  6: NewsBlockFour
}

interface INewsBlockProps {
  type: string | number
  category: string
}

export function NewsBlock({ type, category }: INewsBlockProps) {

  const [getNews, { isSuccess } ] = useLazyGetNewsQuery();
  const dispatch = useAppDispatch();

  const { isVisible, observe } = useIntersectionObserver();

  const handlePost = (idx: string) => {
    dispatch(articleActions.addPosts(idx))
  };

  const fetchNews = async () => {
    const res = await getNews({ category, page: 1 });
    if (res && res.status === "fulfilled") {
      dispatch(homeActions.addPosts({ data: res.data.data, category }));
      dispatch(dbActions.add({ data: res.data.data }))
    } else {
      return <ErrorMessage errorMessage={res.error} />
    }
  };

  useEffect(() => {
    if (isVisible) fetchNews();
  }, [isVisible]);

  const Layout = newsLayoutMap && newsLayoutMap[type as keyof typeof newsLayoutMap];

  return (
    <div
      ref={observe}
      className={css.observe}>
     <Layout
        handlePost={handlePost}
        title={category}
      />
    </div>
  )

}
