import './src/static/styles/main.css';
import { initializeTheme } from './src/utils/theme-utils';

export const onClientEntry = () => {
  // eslint-disable-next-line no-eval
  eval(initializeTheme());
};
