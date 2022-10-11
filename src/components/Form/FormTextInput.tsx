import {  useField } from 'formik';
import styles from './styles.module.scss';
import { Input } from 'components/Input';

interface IField {
  name: string,
  placeholder: string,
  variant?: string
  type?: string
  value?: any
  label?: string
}

export const FormTextInput = ({ label, ...props }: IField) => {

  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={ props.name }>{label}</label>
      <Input {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className={ styles.error }>{meta.error}</div>
      ) : null}
    </>
  );
};