import { useState } from 'react';
import { MainMenu, SearchBar, Dropdown } from 'components';
import { NAVIGATION_LINKS } from '../../../constants';
import css from 'assets/styles/global.module.scss';
import styles from './styles.module.scss';
import { join } from 'utils';

interface ISearchValue {
  id: string
  name: string
}

export function NavAndSearch() {

  const [value, setValue] = useState<ISearchValue>({ id: '', name: 'Categories' })

  const handleChange = (e: any) => {
    setValue(
      ({ id: e.target.value.id, name: e.target.value.name })
    )
  }

  return (
    <div className={join(css.content, styles.inner)}>
      <div className={ styles.hero }>
        <MainMenu />
        <div className={ styles.dropdownNav}>
          <Dropdown
            options={ NAVIGATION_LINKS }
            value={value}
            name='category'
            placeholder='categories'
            onChange={ handleChange }
          />
        </div>
        <SearchBar />
      </div>
    </div>
  );
}
