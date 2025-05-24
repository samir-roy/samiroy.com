import * as React from 'react';

const DarkModeButton = () => {
  const toggleTheme = React.useCallback(() => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isCurrentlyDay = currentTheme ? currentTheme === 'day' : !prefersDark;
    const newTheme = isCurrentlyDay ? 'night' : 'day';
    document.documentElement.setAttribute('data-theme', newTheme);
    try {
      localStorage.setItem('theme', newTheme);
    } catch (e) {
      // do nothing
    }
  }, []);

  return (
    <button className="link" type="button" onClick={toggleTheme}>
      ☼
    </button>
  );
};

export default React.memo(DarkModeButton);
