import { DetailedHTMLProps, ImgHTMLAttributes, useState } from 'react';
import { join } from 'utils';
import styles from './styles.module.scss';

export interface ImgProps extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {}

export function Img({
  className,
  alt,
  ...props
}: ImgProps) {


  const [state, setState] = useState(0)

  if (state === 2 || props.src === null || props.src === undefined) {
    return (
      <div className={ styles.fallback }>
     </div>
    )
  };

  return (
    <img
      className={join(styles.img, className, state !== 1 || props.src === null ? styles.fallback : '')}
      alt={alt ? alt :'image'}
      onLoad={ () => (state <= 0 && setState(1)) }
      onError={ () => setState(2) }
      { ...props }
    />
  )
}
