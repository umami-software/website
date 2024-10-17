import { useEffect } from 'react';

export function useScroll(name = 'scroll') {
  useEffect(() => {
    function handler() {
      document.documentElement.dataset[name] = window.scrollY.toString();
    }

    document.addEventListener('scroll', handler);

    return () => {
      document.removeEventListener('scroll', handler);
    };
  }, [name]);

  return null;
}

export default useScroll;
