import * as React from 'react';

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = React.useState<'day' | 'night'>(() => {
    // This only runs on client-side to avoid hydration issues
    if (typeof window !== 'undefined') {
      let savedTheme: string | null = null;
      
      try {
        // Get theme from localStorage
        savedTheme = localStorage.getItem('theme');
      } catch (e) {
        // Continue execution if localStorage fails
      }
      
      // Return saved theme if valid
      if (savedTheme === 'day' || savedTheme === 'night') {
        return savedTheme;
      }
      
      // Fall back to system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return prefersDark ? 'night' : 'day';
    }
    return 'day'; // Default for SSR
  });

  const toggleTheme = React.useCallback(() => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'day' ? 'night' : 'day';
      try {
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
      } catch (e) {
        // Handle localStorage access errors
      }
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