
import { INewsFetched } from 'interfaces';
import { LiHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

interface ILinkItem extends Omit<LiHTMLAttributes<HTMLLIElement>, 'onClick' | 'value'>{
  value: INewsFetched
  onClick: (idx: string) => void
  idx: string
}

export function LinkItem({ children, value, onClick, idx }: ILinkItem) {

  const link = (value && value.category !== null) ? `/news/${value.category[0]}/${value.source_id}` : '/news';

  return (
    <Link
      to={link}
      onClick={ ()=> onClick(idx)}
    >
      { children }
    </Link>
  )
}