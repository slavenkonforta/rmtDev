import { useEffect } from 'react';

/**
 * Attaches an event listener to the document that triggers a handler function when a click event occurs outside of the specified element(s).
 * @param refs - An array of React ref objects representing the element(s) to watch for clicks outside of.
 * @param handler - The function to be called when a click event occurs outside of the specified element(s).
 */
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
