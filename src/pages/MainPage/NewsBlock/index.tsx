import { Loading, ErrorMessage } from 'components';
import { Hero } from '../Hero';
import { NewsBlockOne } from '../NewsBlockOne';
import { NewsBlockTwoSlider } from '../NewsBlockTwoSlider';
import { NewsBlockThree } from '../NewsBlockThree';
import { NewsBlockFour } from '../NewsBlockFour';
import { articleActions } from 'redux/slices';
import { newsMediaStackApi } from 'services/newsMediaStack';
import { useAppDispatch } from 'hooks';

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
  const { data, error, isLoading } = newsMediaStackApi.useGetNewsQuery({ category, page: 1 });

  const dispatch = useAppDispatch();

  const handlePost = (idx: string) => {
    dispatch(articleActions.addPosts(idx))
  }

  if (isLoading) return <Loading />
  if (error) return <ErrorMessage errorMessage={ error } />

  const Layout = newsLayoutMap && newsLayoutMap[type as keyof typeof newsLayoutMap];

  return (
    <Layout
      data={data.data}
      handlePost={handlePost}
      title={category}
    />
  )
}
