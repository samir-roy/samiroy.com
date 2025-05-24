import * as React from 'react';
import './src/static/styles/main.css';

// This adds a script to the <head> that sets the theme based on localStorage before page render
// Prevents flash of incorrect theme
export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="theme-detection"
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            try {
              const savedTheme = localStorage.getItem('theme');
              if (savedTheme) {
                document.documentElement.setAttribute('data-theme', savedTheme);
              }
            } catch (e) {}
          })();
        `,
      }}
    />,
  ]);
};
