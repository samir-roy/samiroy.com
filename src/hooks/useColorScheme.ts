import * as React from 'react';

const useColorScheme = () => {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');

  React.useEffect(() => {
    const query = window.matchMedia('(prefers-color-scheme: dark)');
    const listener = (e: MediaQueryListEvent) => setTheme(e.matches ? 'dark' : 'light');
    query.addEventListener('change', listener);

    return () => query.removeEventListener('change', listener);
  }, []);

  return theme;
};

export default useColorScheme;
