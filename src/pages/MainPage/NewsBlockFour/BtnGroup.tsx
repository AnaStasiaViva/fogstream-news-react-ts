import styles from './styles.module.scss';
import { ReactComponent as ArrowIcon } from 'assets/images/arrow-left.svg';
import { Button } from 'components';

type switcher = "next" | "prev";

interface SubnavProps {
  onClick: (value: switcher) => void
  title?: string
}

export function BtnGroup( {onClick, title='' }: SubnavProps) {
  return (
    <div className={styles.subnav}>
      <p> { title && title }</p>
      <div className={ styles.btnGroup }>
        <Button
          variant='arrow'
          value='prev'
          onClick={() => onClick('prev') }
        >
          <ArrowIcon />
        </Button>
        <Button
          variant='arrowReverse'
          onClick={ () => onClick('next')}
          value='next'
        >
          <ArrowIcon />
        </Button>
      </div>
    </div>
  )
}
