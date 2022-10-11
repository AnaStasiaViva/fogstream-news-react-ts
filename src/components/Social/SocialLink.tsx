import { Img } from 'components/Img';
import { ISocial } from 'interfaces';
import styles from './styles.module.scss';

interface Props{
  icon: ISocial
}

export function SocialLink({ icon }: Props) {
  return (
    <a href={ icon.address}>
      <Img
        className={ styles.icon }
        src={ icon.name }
        />
    </a>
  );
}
