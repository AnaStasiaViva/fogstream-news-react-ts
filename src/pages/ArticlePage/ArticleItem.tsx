
import styles from './styles.module.scss';
import Img from 'assets/images/pexels-element-digital-1051075.jpg';
import { INewsFetched } from 'interfaces';
import { Loading } from 'components';

interface IArticleItem {
  article: INewsFetched
}

export function ArticleItem({ article }: IArticleItem) {

  if (!article) return <Loading />

  const { category, creator, content, image_url, keywords, pubDate, title, link } = article as INewsFetched;

  return (
    <div className={styles.articleItem}>
      <span className={ styles.cat }>{category && category[0]}</span>
      <div className={ styles.headInfo }>
        <span>{creator && creator[0]}</span>
        <span>{pubDate}</span>
      </div>
      <div className={ styles.imageContainer }>
        <img src={image_url ? image_url : Img} alt="img" />
      </div>
      <h2>{title}</h2>
      <div className={ styles.mainContent }>
        <p> {content} </p>
        {link &&
          <a href={link}> check out full article! </a>
        }
        { keywords &&
          <span>keywords: #  {keywords}</span>
        }
      </div>
    </div>
  )
}
