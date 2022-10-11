import { Input, Button } from 'components';
import { ReactComponent as LenseIcon } from 'assets/images/magnifying-glass.svg';
import styles from './styles.module.scss';
import { ChangeEvent, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export function SearchBar() {
  const [searchParams] = useSearchParams();
  const q = searchParams.get('q') || '';

  const navigate = useNavigate();
  const [value, setValue] = useState<string>(q);

  const onClick = (value: string) => {
    navigate(`/search?q=${value}`);
    setValue('');
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className={ styles.container }>
      <Input
        placeholder="Search"
        value={ value }
        onChange={ handleChange }
      />
      <Button
        color="transparent"
        disabled={ value === '' }
        onClick={ () => onClick(value) }
      >
        <LenseIcon className={ styles.icon } />
      </Button>
    </div>
  )
}