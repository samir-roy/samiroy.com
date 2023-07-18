import * as React from 'react';

type Theme = 'light' | 'dark';
const convert = (matches: boolean) => (matches ? 'dark' : 'light') as Theme;

const useColorScheme = () => {
  const [theme, setTheme] = React.useState<Theme>('light');

  React.useEffect(() => {
    const query = window.matchMedia('(prefers-color-scheme: dark)');
    setTheme(convert(query.matches));

    const listener = (e: MediaQueryListEvent) => setTheme(convert(e.matches));
    query.addEventListener('change', listener);

    return () => query.removeEventListener('change', listener);
  }, []);

  return theme;
};

export default useColorScheme;
