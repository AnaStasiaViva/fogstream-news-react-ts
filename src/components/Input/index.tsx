import { join } from 'utils';
import { InputHTMLAttributes } from 'react';
import styles from './styles.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: string
}

export function Input({ variant, ...props }: InputProps) {
  return (
    <input
      className={ join(styles.input, styles[variant!]) }
      { ...props }
    />
  );
}
