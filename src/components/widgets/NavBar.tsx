import * as React from 'react';
import { Link } from 'gatsby';
import SamiroyTitle from '@sprites/SamiroyTitle';
import SamiroyLogo from '@sprites/SamiroyLogo';

type Props = {
  /** subtitle to show below the samiroy title */
  subtitle?: string;
};

const NavBar = ({ subtitle }: Props) => (
  <div className="boxed" style={{ display: 'flex', padding: '4px 12px', alignItems: 'center' }}>
    <div style={{ marginTop: 4, marginBottom: 4, display: 'inline-block' }}>
      <Link to="/" className="no-hover">
        <SamiroyTitle style={{ width: 127.5, height: 26.5 }} />
      </Link>
    </div>
    {subtitle && <div style={{ marginTop: 16 }}>&nbsp;➼&nbsp;{subtitle}</div>}
    <div style={{ marginLeft: 'auto' }}>
      <SamiroyLogo style={{ height: 32, width: 28 }} />
    </div>
  </div>
);

export default React.memo(NavBar);
