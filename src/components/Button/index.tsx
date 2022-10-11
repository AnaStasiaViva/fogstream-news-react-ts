import { HTMLAttributes, MouseEvent } from 'react';
import styles from './styles.module.scss';
import { join } from 'utils';

interface ButtonProps extends HTMLAttributes<HTMLElement> {
  value?: string | number,
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  variant?: string;
  color?: string ;
  loading?: boolean;
  className?: string;
  disabled?: boolean
  type?: 'button' | "submit"
}

export function Button({ children, type, variant, color, className, ...props }: ButtonProps) {
  return (
    <button
      className={join(styles.btn, styles[variant!], styles[color!], className)}
      type={ type }
      { ...props }
    >
      {children}
    </button>
  );
}
