import { useEffect } from 'react';

/**
 * Attaches an IntersectionObserver to each ref in the array.
 * Adds 'isVisible' to elements that enter the viewport.
 */
export function useIntersectionObserver(refs, options = {}) {
  useEffect(() => {
    const config = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
      ...options,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('isVisible');
        }
      });
    }, config);

    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
}
