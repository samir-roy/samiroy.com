import * as React from 'react';

const convert = (matches: boolean) => (matches ? 'dark' : 'light') as 'light' | 'dark';

const useColorScheme = () => {
  const [theme, setTheme] = React.useState(convert(false));

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
