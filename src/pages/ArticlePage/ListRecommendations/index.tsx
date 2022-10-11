import { LinkItem, Loading } from 'components';
import { useRecommend } from 'hooks';
import { INewsFetched } from 'interfaces';
import styles from './styles.module.scss';

interface IList {
  handlePost: (idx: string) => void
  list: string[]
  data: Record<string, any>
}

export function ListRecommendation({ handlePost }: IList) {

  const { list } = useRecommend();

  if(!list) return <Loading/>

  return (
    <ul className={styles.sidebarNav}>
      { list && list.map((item: INewsFetched) => (
          <LinkItem
            key={ item.link}
            idx={ item.link }
            value={item}
            onClick={()=> handlePost(item.link)}
        >
            <li className={ styles.link }>{ item.title }</li>
          </LinkItem>
        ))
      }
    </ul>
  )
}
