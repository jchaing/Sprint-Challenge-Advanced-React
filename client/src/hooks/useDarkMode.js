import { useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const useDarkMode = (key, initialValue) => {
  const [values, setValues] = useLocalStorage(key, initialValue);

  useEffect(() => {
    values
      ? document.querySelector('body').classList.add('dark-mode')
      : document.querySelector('body').classList.remove('dark-mode');
  }, [values]);

  return [values, setValues];
};
