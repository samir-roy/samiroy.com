import * as React from 'react';

type Theme = 'light' | 'dark';

const query = window.matchMedia('(prefers-color-scheme: dark)');
const match = (matches: boolean) => (matches ? 'dark' : 'light') as Theme;

const useColorScheme = () => {
  const [theme, setTheme] = React.useState(match(query.matches));

  React.useEffect(() => {
    const listener = (e: MediaQueryListEvent) => setTheme(match(e.matches));
    query.addEventListener('change', listener);

    return () => query.removeEventListener('change', listener);
  }, []);

  return theme;
};

export default useColorScheme;
