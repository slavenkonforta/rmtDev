import { useEffect } from 'react';

export const useOnClickOutside = (refs: React.RefObject<HTMLElement>[], handler: () => void) => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (refs.every((ref) => !ref.current?.contains(e.target as Node))) {
        handler();
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [refs, handler]);
};
