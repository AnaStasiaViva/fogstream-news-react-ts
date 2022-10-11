import { Button } from 'components/Button';
import { useFormikContext } from 'formik';
import { useMemo } from 'react';
import styles from './styles.module.scss';

interface Props {
  onClick: () => void
}

export function BtnGroup({ onClick }: Props) {
  const { values, isValid, resetForm} = useFormikContext<any>();

  const handleCancelForm = (e: any) => {
    e.preventDefault();
    resetForm();
    onClick();
  }

  const isDisabled = useMemo(() => (
		!(isValid) || (values.firstName  === '' || values.lastName === '' || values.email === '' || values.password === '')
	),
    [isValid]);


  return (
    <div className={styles.btnGroup}>
      <Button
        variant="submit"
        type='submit'
        disabled={ isDisabled }
      >
      Submit
      </Button>

      <Button
        variant="cancel"
        onClick={handleCancelForm}

      >
      Close
      </Button>
    </div>
  )
}
