import { LinkItem } from 'components/LinkItem'
import React from 'react'
import { NewsItem } from './NewsItem'
import styles from './styles.module.scss';

interface CardProps{
  data: any
  onClick: (value: any) => void
  variant: 'medium' | 'small' | 'bordered'
  idx: string
}

export function CardNews({ data, onClick, variant, idx }: CardProps) {

  return (
    <LinkItem
      value={data}
      onClick={ onClick}
      className={styles.card}
      idx={ idx }
    >
      <NewsItem
        variant={ variant }
        displayContent={ true }
        { ...data }
      />
    </LinkItem>
  )
}
