import * as React from 'react';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="link" type="button" onClick={toggleTheme}>
      {theme === 'light' ? 'switch to dark mode' : 'switch to light mode'}
    </button>
  );
};

export default React.memo(ThemeToggle);