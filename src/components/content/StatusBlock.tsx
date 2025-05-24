import * as React from 'react';
import { Link } from 'gatsby';
import DarkModeButton from '@widgets/DarkModeButton';

const StatusBlock = () => (
  <div className="boxed col">
    <div className="center footer font-sm" style={{ overflowX: 'scroll' }}>
      <Link to="#poonji">Poonji</Link>
      &nbsp;&nbsp;•&nbsp;&nbsp;
      <Link to="#traffic">Endless&nbsp;Traffic</Link>
      &nbsp;&nbsp;•&nbsp;&nbsp;
      <Link to="#about">About</Link>
      &nbsp;&nbsp;•&nbsp;&nbsp;
      <Link to="#oss">Open&nbsp;Source</Link>
      &nbsp;&nbsp;•&nbsp;&nbsp;
      <DarkModeButton />
    </div>
  </div>
);

export default React.memo(StatusBlock);
