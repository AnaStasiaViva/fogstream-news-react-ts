import { useMemo } from 'react';
import { createContext, useRef, FC, PropsWithChildren, useContext } from 'react';

type UnobserveFn = () => void;
type CallbackFn = () => void;
type ObserveFn = (ref: any, callback: CallbackFn) => UnobserveFn;

interface IIntersectionObserverContext {
  observe: ObserveFn
}

const Context = createContext({} as IIntersectionObserverContext);

export const useIntersectionObserverContext = () => useContext(Context);

export const IntersectionObserverProvider: FC<PropsWithChildren> = ({ children }) => {
  const observer = useRef<IntersectionObserver>();
  const observables = useRef<Map<any, CallbackFn>>(new Map());

  const context = useMemo(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const callback = observables.current.get(entry.target);
          callback?.();
        }
      })
    }, {
      threshold: 0.2
    });

    const handleObserve = (ref: any, callback: any) => {
      if (!ref || observables.current.has(ref)) return;
      observables.current.set(ref, callback);
      observer.current?.observe(ref);
    }

    const handleUnobserve = (ref: any) => {
      if (!observables.current.has(ref)) return;
      observables.current.delete(ref);
      observer.current?.unobserve(ref);
    }

    const observe: ObserveFn = (ref, callback) => {
      handleObserve(ref, callback);
      return () => handleUnobserve(ref);
    };

    return { observe };
  }, [])

  return (
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  )
};
