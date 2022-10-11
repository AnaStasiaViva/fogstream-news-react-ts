import { Link } from 'react-router-dom';
import { ButtonTag, Img } from 'components';
import { getCategoryColor, join } from 'utils';
import typo from 'assets/styles/typography.module.scss';
import styles from './styles.module.scss';
import { INewsFetched } from 'interfaces';


export interface CardProps {
  className?: string
  data: INewsFetched
  size: 'big' | 'sm' | 'wide'
  variant?: 'first'
  onClick: (id: string) => void
  idx: string
}

export function Card({
  className,
  data,
  size,
  variant = 'first',
  onClick,
  idx
}: CardProps) {

  const link = (data && data.category !== null) ? `/news/${data.category[0]}/${data.source_id}` : '/news';

  return (
    <Link
      className={ join(styles.card, styles[size!], styles[variant!], className) }
      to={link}
      onClick={ () => onClick(idx)}
    >
      <div className={ styles.inner }>
        <Img
          className={ styles.img }
          src={data.image_url ? data.image_url : '' }
        />
        <div className={ styles.content }>
          { data.category && data.category[0] &&
            <ButtonTag
              className={ styles.tag }
              variant="tag"
              as="span"
              color={ getCategoryColor() }
            >
              { data.category[0] }
            </ButtonTag>
          }
          <div className={ styles.label }>
            { data.creator }
            { ' - ' }
            <span> { data.pubDate } </span>
          </div>
          <div className={ join(typo.secondary, styles.title) }>
            { data.title !== null && data.title }
          </div>
        </div>
      </div>
    </Link>
  )
}
