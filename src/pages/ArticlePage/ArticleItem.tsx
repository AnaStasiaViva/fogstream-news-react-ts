
import styles from './styles.module.scss';
import { INewsFetched } from 'interfaces';
import { Img, Loading } from 'components';

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
        <Img src={ image_url !== null ? image_url : undefined } />
      </div>
      <h2>{title}</h2>
      <div className={ styles.mainContent }>
        <p> {content} </p>
        {link &&
          <a href={link} target="_blank" rel="noopener noreferrer"> check out full article! </a>
        }
        { keywords &&
          <span>keywords: #  {keywords}</span>
        }
      </div>
    </div>
  )
}
