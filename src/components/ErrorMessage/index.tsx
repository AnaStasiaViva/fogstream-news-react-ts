import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import styles from './styles.module.scss';

interface ErrorMessageProps {
  errorMessage: FetchBaseQueryError | SerializedError | undefined;
}

export function ErrorMessage({ errorMessage }: ErrorMessageProps) {
  if (!errorMessage || !('error' in errorMessage)) return null;
  return (
    <div className={ styles.error }>
      <h4>Error occured</h4>
      <span>{errorMessage.error}</span>
    </div>
  )
}