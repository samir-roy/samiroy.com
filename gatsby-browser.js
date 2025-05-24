import './src/static/styles/main.css';
import { initializeTheme } from './gatsby-utils';

export const onClientEntry = () => {
  // eslint-disable-next-line no-eval
  eval(initializeTheme());
};
