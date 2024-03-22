import * as React from 'react';
import { Link } from 'gatsby';
import { SamiroyLogo } from '@samiroy/sprites';

const styles: Record<string, React.CSSProperties> = {
  footer: {
    color: 'var(--light-text-color)',
    fontWeight: 500,
    fontSize: 12,
    marginTop: 96,
  },
  logo: {
    height: 38,
    width: 33,
    marginBottom: 8,
    marginTop: 8,
    marginLeft: 2,
    display: 'inline-block',
  },
};

type Props = {
  /** Callback when back to top is clicked */
  onBackToTop: () => unknown;
};

const Footer = ({ onBackToTop }: Props) => (
  <div style={styles.footer} className="col">
    <div className="center footer">
      <Link to="/">Home</Link>
      {' | '}
      <Link to="/about">About</Link>
      {' | '}
      <Link to="/privacy">Privacy</Link>
      {' | '}
      <Link to="/endlesstraffic">Endless Traffic</Link>
      {' | '}
      <a href="https://www.poonji.io">Poonji</a>
    </div>
    <div className="center m-t-sm">
      <button className="link" type="button" onClick={() => onBackToTop()}>
        back to top
      </button>
    </div>
    <div className="center m-t-md">
      <SamiroyLogo style={styles.logo} />
    </div>
    <div className="center">&copy; Samiroy LLC. All Rights Reserved.</div>
  </div>
);

export default React.memo(Footer);
