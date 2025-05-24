import * as React from 'react';

type Theme = 'day' | 'night';
type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeContext = React.createContext<ThemeContextType>({
  theme: 'day',
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize theme using a function in useState to avoid the need for useEffect
  const [theme, setTheme] = React.useState<Theme>(() => {
    // This only runs on client-side to avoid hydration issues
    if (typeof window !== 'undefined') {
      try {
        // Get theme from localStorage or use system preference as fallback
        const savedTheme = localStorage.getItem('theme') as Theme | null;
        if (savedTheme === 'day' || savedTheme === 'night') {
          document.documentElement.setAttribute('data-theme', savedTheme);
          return savedTheme;
        }
        
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialTheme = prefersDark ? 'night' : 'day';
        document.documentElement.setAttribute('data-theme', initialTheme);
        return initialTheme;
      } catch (e) {
        // Default to day theme if there's an error
        return 'day';
      }
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

  const contextValue = React.useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);