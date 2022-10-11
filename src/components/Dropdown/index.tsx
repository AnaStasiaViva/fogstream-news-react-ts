
import styles from './styles.module.scss'
import { join } from 'utils';
import { ChangeEvent, InputHTMLAttributes, useCallback, useRef } from 'react';
import { useDropdown } from 'hooks/useDropdown';
import { ClickHandler, DropdownList } from './DropdownList';
import { ReactComponent as ArrowIcon } from 'assets/images/arrow-left.svg';
import { Input } from 'components/Input';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean
}

export interface SelectProps extends Omit<InputProps, 'value' | 'onChange'> {
  loading?: boolean,
  disabled?: boolean,
  name: string,
  value: any,
  options: any[],
  onOpen?: () => void,
  onClose?: () => void,
  onChange?: (e: ChangeEvent<{ name: string, value: any }>) => void
}

export function Dropdown({
  value,
  options,
  onOpen,
  onClose,
  onChange,
  disabled,
  ...props
}: SelectProps) {

  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, open, close] = useDropdown(ref, onOpen, onClose);

  const handleSelect: ClickHandler = useCallback((e, data) => {
    if (!onChange) return;
    const event = e.nativeEvent || e;
    const clonedEvent = new (event.constructor as any)(event.type, event);
    Object.defineProperty(clonedEvent, 'target', {
      writable: true,
      value: { name: props.name, value: data }
    });
    onChange(clonedEvent);
    close();
  }, []);

  return (
    <div
      className={ join(styles.container) }
      ref={ ref }
    >
      <div
        className={disabled ?
          join(styles.header, styles.headerExtra, styles.disabled) :
          join(styles.header, styles.headerExtra)}
        onClick={ isOpen ? close : open }
      >
        <Input
          value={ value?.name || '' }
          disabled={ disabled }
          readOnly
          { ...props }
        />
        <ArrowIcon
          className={isOpen
            ? styles.img
            : join(styles.img, styles.rotated)}
        />
      </div>

      <div className={ join(styles.listWrapper) }>
        {isOpen && (
          <DropdownList
            options={ options }
            onSelect={ handleSelect }
          />
        )}
      </div>

    </div>
  );
}
