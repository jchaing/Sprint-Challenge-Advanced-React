import { useEffect, useState } from 'react';

export const useDarkMode = (mode) => {
  const [values, setValues] = useState(mode);

  useEffect(() => {
    values
      ? document.querySelector('body').classList.add('dark-mode')
      : document.querySelector('body').classList.remove('dark-mode');
  }, [values]);

  return [values, setValues];
};
