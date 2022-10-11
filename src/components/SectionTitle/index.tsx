import { PropsWithChildren } from 'react';
import styles from './styles.module.scss';

export interface SectionTitleProps extends PropsWithChildren {
  title: string
  variant?: string
}

export function SectionTitle({
  title,
  children
}: SectionTitleProps) {

  return (
    <div className={styles.container}>
      <p className={ styles.title }>
        {title}
      </p>
      { children }
    </div>
  )
}