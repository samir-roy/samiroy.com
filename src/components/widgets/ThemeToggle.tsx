import * as React from 'react';

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = React.useState<'day' | 'night'>(() => {
    // only run on client-side
    if (typeof window !== 'undefined') {
      let savedTheme = '';
      
      try {
        savedTheme = localStorage.getItem('theme');
      } catch (e) {
        // do nothing
      }
      
      if (savedTheme === 'day' || savedTheme === 'night') {
        return savedTheme;
      }
      
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return prefersDark ? 'night' : 'day';
    }
    return 'day'; // default for ssr
  });

  const toggleTheme = React.useCallback(() => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'day' ? 'night' : 'day';
      try {
        localStorage.setItem('theme', newTheme);
      } catch (e) {
        // do nothing
      }
      document.documentElement.setAttribute('data-theme', newTheme);
      return newTheme;
    });
  }, []);

  return (
    <button className="link" type="button" onClick={toggleTheme}>
      {theme === 'day' ? 'switch to night mode' : 'switch to day mode'}
    </button>
  );
};

export default React.memo(ThemeToggle);