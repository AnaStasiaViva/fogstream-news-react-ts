import styles from './styles.module.scss';

export function NoResults() {
  return (
    <div className={ styles.noResults}>
      <span> No results...Please try another time</span>
    </div>
  )
}
