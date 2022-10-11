import { Button } from 'components';
import typo from 'assets/styles/typography.module.scss';
import styles from './styles.module.scss';
import { join } from 'utils';
import { useAppDispatch } from 'hooks/redux';
import { modalActions } from 'redux/slices';

export function Banner() {

  const dispatch = useAppDispatch();

  const handleModal = () => {
    dispatch(modalActions.toggleModal());
  }

  return (
    <div className={ styles.banner }>
      <div className={ styles.text }>
        <span className={ typo.inverted }>
          Best Selling <strong>BLOG</strong> and <strong>MAGAZINE</strong>
        </span>
        <span className={ typo.inverted }>
          Theme of All Time
        </span>
        <span className={ join(typo.secondary, typo.italic, typo.accent) }>
          Experience the change!
        </span>
      </div>

      <Button
        className={styles.button}
        onClick={ handleModal }
      >
        Subscribe Now
      </Button>
    </div>
  )
}