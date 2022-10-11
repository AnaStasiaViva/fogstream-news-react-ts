
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { modalActions } from 'redux/slices';
import { ModalItem } from './ModalItem';
import styles from './styles.module.scss';
import { Form } from 'components/Form';
import { useEffect } from 'react';
import { disableScroll, enableScroll } from 'utils';

export function ModalForm() {

  const { isOpen } = useAppSelector(state => state.modalReducer);
    const dispatch = useAppDispatch();

  const handleModal = () => {
    dispatch(modalActions.toggleModal());
  }

  useEffect(() => {
    if (isOpen) {
      disableScroll();
    };

    return () => {
      enableScroll();
    }

  },[isOpen])

  if (!isOpen) return null;

  return (
    <div className={styles.modalRoot}>
      <ModalItem >
        <Form handleModal={handleModal} />
      </ModalItem>
    </div>
  );
}
