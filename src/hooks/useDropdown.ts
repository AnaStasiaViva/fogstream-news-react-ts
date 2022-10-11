import { useState, useEffect, useMemo, RefObject } from 'react';

type DropdownHandler = () => void;
type DropdownReturn = [boolean, DropdownHandler, DropdownHandler];

export function useDropdown(
  containerRef: RefObject<HTMLElement>,
  onOpen?: () => void,
  onClose?: () => void): DropdownReturn {

   const [isOpen, setOpen] = useState(false);

   const [open, close] = useMemo(() =>
   [
     () => {
       setOpen(true);
       if (onOpen) onOpen();
     },
     () => {
       setOpen(false);
       if (onClose) onClose();
     }
   ]
 , [onOpen, onClose]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        close();
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return [isOpen, open, close];
}