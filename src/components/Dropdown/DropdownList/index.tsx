import { join } from 'utils';
import { MouseEventHandler, OlHTMLAttributes } from 'react';
import styles from './styles.module.scss';
import { DropdownListItemLink } from './DropdownListItemLink';

export type ClickHandler<T = any> = (e: Parameters<MouseEventHandler>[0], data: T) => void;

export interface ListProps extends Omit<OlHTMLAttributes<HTMLUListElement>, 'onSelect'> {
  options?: any[],
  onSelect?: ClickHandler
}

export function DropdownList({
  options,
  onSelect,
  children
}: ListProps) {
  if (!options?.length) return null;

  return (
    <nav className={ join(styles.listWrapper) }>
      { options.map((item, idx: number) => (
        <DropdownListItemLink
          key={idx + item.link}
          value={item}
          onClick={ onSelect }
        />
      ))}
      { children }
    </nav>
  );
}