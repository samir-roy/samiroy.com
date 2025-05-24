import * as React from 'react';

const ThemeToggle: React.FC = () => {
  const toggleTheme = React.useCallback(() => {
    if (typeof window === 'undefined') return;
    
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Determine the current theme or default based on system preference
    const isCurrentlyDay = currentTheme ? currentTheme === 'day' : !prefersDark;
    const newTheme = isCurrentlyDay ? 'night' : 'day';
    
    // Set the new theme
    document.documentElement.setAttribute('data-theme', newTheme);
    
    // Save to localStorage
    try {
      localStorage.setItem('theme', newTheme);
    } catch (e) {
      // do nothing if localStorage is not available
    }
  }, []);

  return (
    <button className="link" type="button" onClick={toggleTheme}>
      ☼
    </button>
  );
};

export default React.memo(ThemeToggle);
