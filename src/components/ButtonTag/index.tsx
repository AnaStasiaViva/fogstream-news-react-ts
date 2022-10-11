import { PropTypes } from 'interfaces';
import { FC } from 'react';
import { join } from 'utils';
import styles from './styles.module.scss';

type ColorType = 'accent' | 'transparent';

const colorsMap: Record<ColorType, ColorType> = {
  accent: 'accent',
  transparent: 'transparent'
}

export interface ButtonProps extends Omit<PropTypes<HTMLButtonElement>, 'color'> {
  color?: ColorType | string
  variant?: 'default' | 'tag'
  as?: FC<any> | string
}

export function ButtonTag({
  className,
  color = 'accent',
  children,
  as: Tag = 'button',
  variant = 'default',
  ...props
}: ButtonProps) {

  if (!colorsMap[color as ColorType]) {
    props.style = { backgroundColor: color }
  }

  return (
    <Tag
      className={ join(styles.button, styles[color!], styles[variant!], className) }
      type="button"
      { ...props }
    >
      <span className={ styles.text }>
        { children }
      </span>
    </Tag>
  )
}
