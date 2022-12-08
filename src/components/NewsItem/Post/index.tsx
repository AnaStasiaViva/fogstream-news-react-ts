import styles from './styles.module.scss';
import { join, trimString } from 'utils';

interface IPostContent{
  variant?: string
  displayContent?: boolean;
  creator?: string[]
  pubDate?: string
  title?: string
  content?: string
  description?: string
}

export function PostContent({ variant, displayContent, description, pubDate, creator, title }: IPostContent) {

  const currTitle = (variant === 'small') ? (title && trimString(title, 25)) : (title && trimString(title, 70));

  const currDescription = (variant === 'small' && description && description !== null)
    ? (description.length > 130
      ? trimString(description, 100)
      : description)
    : 'Read full article';

  const currCreator = creator && creator !== null ? creator[0] : 'anonimus';
  const currDate = pubDate && pubDate.slice(0, 10);


  return (
    <div className={ join(styles.postContent, variant && styles[variant]) }>
      <span>
        { currCreator }
            -
        { currDate }
      </span>
      <h4>
        {title && title !== null ? currTitle : '-'}
      </h4>
      {displayContent &&
        <p>
          { currDescription }
        </p>}
    </div>
  );
}
