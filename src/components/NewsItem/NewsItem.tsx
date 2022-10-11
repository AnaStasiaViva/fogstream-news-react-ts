
import { Gallery } from './Gallery';
import { PostContent } from './Post';
import styles from './styles.module.scss';

interface INews{
  variant?: string
  displayContent?: boolean
  image_url?: string | null
  source_id?: string
}

export function NewsItem({ variant, displayContent, image_url, source_id, ...props }: INews) {

  return (
    <div className={styles[variant!]}>
        <Gallery
          image={ image_url && image_url }
          variant={ variant }
        />
        <PostContent
          { ...props }
          variant={ variant }
          displayContent={ displayContent }
        />
    </div>

  );
}
