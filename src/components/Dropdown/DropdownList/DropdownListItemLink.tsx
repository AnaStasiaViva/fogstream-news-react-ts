import { INewsFetched } from 'interfaces';
import { LiHTMLAttributes, MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import { join } from 'utils';
import styles from './styles.module.scss';

export type ClickHandler<T = any> = (e: Parameters<MouseEventHandler>[0], data: T) => void;

export interface ListItemProps extends Omit<LiHTMLAttributes<HTMLLIElement>, 'onClick' | 'value'> {
  value?: INewsFetched | any
  onClick?: ClickHandler
}

export function DropdownListItemLink({
  value,
  onClick,
}: ListItemProps) {

  return (
    <Link
      to={ value.link }
      className={join(styles.listItemLink)}
      onClick={ onClick ? (e) => onClick(e, value) : undefined }
    >
    { value.name }
    </Link>
  );
}