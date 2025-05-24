import * as React from 'react';
import './src/static/styles/main.css';
import { initializeTheme } from './src/utils/theme-utils';

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
