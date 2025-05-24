import * as React from 'react';
import './src/static/styles/main.css';
import { initializeTheme } from './src/utils/theme-utils';

// This adds a script to the <head> that sets the theme based on localStorage before page render
// Prevents flash of incorrect theme
export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="theme-detection"
      dangerouslySetInnerHTML={{
        __html: initializeTheme(),
      }}
    />,
  ]);
};
