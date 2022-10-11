import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { ModalForm } from "./ModalForm";
import styles from './styles.module.scss';

const modalRoot = document.querySelector("#portal") as HTMLElement;

export const Modal = () => {
  const el = useRef(document.createElement("div"));

  modalRoot.className = styles.modalRoot;

  useEffect(() => {
    const current = el.current;

    modalRoot?.appendChild(current);
    return () => {
      void modalRoot?.removeChild(current)
    };
  }, []);

  return createPortal((
    <ModalForm/>
  ), el.current);

};
