import './src/static/styles/main.css';

// Script to handle flash of unstyled content by setting theme before React hydrates
export const onClientEntry = () => {
  // On page load, immediately check localStorage and apply theme
  // This prevents flickering when the user has a saved theme preference
  try {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  } catch (e) {
    // Handle case where localStorage is not available
  }
};
