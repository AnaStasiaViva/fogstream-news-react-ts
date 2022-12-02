import { useIntersectionObserverContext } from 'providers/intersectionObserver';
import { useEffect, useMemo, useRef, useState } from 'react';

export const useIntersectionObserver = () => {
  const { observe } = useIntersectionObserverContext();

  const [isVisible, setVisible] = useState(false);

  const clear = useRef<(() => void) | void>();

  const context = useMemo(() => ({
    isVisible,
    observe: (ref: any) => {
      clear.current = observe(ref, () => setVisible(true));
    }
  }), [isVisible]);

  useEffect(() => clear.current, []);

  return context;
}
