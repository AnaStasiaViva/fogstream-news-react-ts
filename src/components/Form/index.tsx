import * as React from 'react';
import { Formik, Form as FormFormik, FormikHelpers } from 'formik';
import styles from './styles.module.scss';
import { formInitValues } from '../../constants';
import { FormValues } from 'interfaces';
import { formValidationSchema } from 'validation';
import { SubscriptionForm } from './SubscriptionForm';
import { BtnGroup } from './BtnGroup';

interface Props {
  handleModal: () => void
}

export function Form({ handleModal }: Props) {

  return (
      <Formik
        initialValues={formInitValues}
        validationSchema={formValidationSchema}
        onSubmit={(
          values: FormValues,
          { setSubmitting, resetForm }: FormikHelpers<FormValues>,
        ) => {
          setSubmitting(false);
          setTimeout(() => {
            handleModal();
            resetForm();
          }, 1000)
        }}
      >
      <FormFormik className={styles.form}>
        <div className={ styles.formItem}>
          <SubscriptionForm />
          <BtnGroup onClick={handleModal} />
        </div>
        </FormFormik>
      </Formik>
  );
}
