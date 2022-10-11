import styles from './styles.module.scss';
import { join } from 'utils/index';

export function ModalItem({children}: any) {
  return (
    <div className={join(styles.modalItem)}>
      {children}
    </div>
  );
}