import styles from './styles.module.scss';
import Img from 'assets/images/pexels-element-digital-1051075.jpg';
import { join } from 'utils';
import { Img as Image } from 'components';

interface IGalleryItem extends React.HTMLAttributes<HTMLElement>{
  variant?: string
  image?: string | null | undefined
}

export function Gallery({ children, variant, image }: IGalleryItem) {
  return (
    <div className={ join(styles.gallery, variant && styles[variant]) }>
      <Image
        src={ image ? image : Img}
        alt="img"
      />
      { children }
    </div>
  );
}
