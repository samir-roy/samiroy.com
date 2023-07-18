import * as React from 'react';
import { Link } from 'gatsby';
import SamiroyLogo from '@sprites/SamiroyLogo';

const styles = {
  footer: {
    color: 'var(--light-text-color)',
    fontWeight: 500,
    fontSize: 12,
    marginTop: 64,
  } as React.CSSProperties,
  logo: {
    height: 38,
    width: 48,
    marginBottom: 8,
    marginTop: 8,
    display: 'inline-block',
  } as React.CSSProperties,
};

type Props = {
  /** Callback when back to top is clicked */
  onBackToTop: () => unknown;
}

const Footer = ({ onBackToTop }: Props) => (
  <div style={styles.footer} className="flex-reverse">
    <div className="col-md-6 center-md-left">
      <SamiroyLogo style={styles.logo} />
      <br />
      &copy; Samiroy LLC. All Rights Reserved.
    </div>
    <div className="col-md-6 center-md-right" style={{ marginTop: 'auto' }}>
      <Link to="/" style={{ textDecoration: 'none' }}>Home</Link> |{' '}
      <Link to="/about" style={{ textDecoration: 'none' }}>About</Link> |{' '}
      <Link to="/privacy" style={{ textDecoration: 'none' }}>Privacy</Link> |{' '}
      <Link to="/endlesstraffic" style={{ textDecoration: 'none' }}>Endless Traffic</Link> |{' '}
      <a href="https://www.poonji.io" style={{ textDecoration: 'none' }}>Poonji</a>
      <br />
      <br />
      <button className="link" type="button" onClick={() => onBackToTop()}>back to top</button>
    </div>
  </div>
);

export default React.memo(Footer);
