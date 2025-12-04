import { useEffect } from 'react';

interface UseExitIntentOptions {
  message?: string;
}

export function useExitIntent({ message = 'Não perca a oportunidade de turbinar sua FácilZap com a agência nº1 em conversão!' }: UseExitIntentOptions = {}) {
  useEffect(() => {
    let timer: number | null = null;

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        timer = window.setTimeout(() => {
          alert(message);
        }, 200);
      } else if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    };

    const handleMouseOut = (event: MouseEvent) => {
      if (event.clientY <= 0) {
        alert(message);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      if (timer) clearTimeout(timer);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [message]);
}
