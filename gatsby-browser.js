import './src/static/styles/main.css';
import { initializeTheme } from './src/utils/theme-utils';

// Script to handle flash of unstyled content by setting theme before React hydrates
export const onClientEntry = () => {
  // On page load, immediately check localStorage and apply theme
  // This prevents flickering when the user has a saved theme preference
  // eslint-disable-next-line no-eval
  eval(initializeTheme());
};
