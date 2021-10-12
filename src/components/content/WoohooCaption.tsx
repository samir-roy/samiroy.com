import { Link } from 'gatsby';
import * as React from 'react';

const styles = {
  body: {
    fontSize: '1.6em',
    textAlign: 'justify',
    fontWeight: 200,
    marginBottom: 32,
  } as React.CSSProperties,
  button: {
    width: 150,
    height: 50,
    margin: 'auto',
  } as React.CSSProperties,
  link: {
    minWidth: 150,
  } as React.CSSProperties,
};

const WoohooCaption = () => (
  <>
    <p style={styles.body}>
      WooHoo was a live fantasy sports experience created to play along with the ICC Cricket World Cup in 2015.
    </p>
    <div style={styles.button}>
      <Link to="/woohoo" className="button" style={styles.link}>
        Learn more
      </Link>
    </div>
  </>
);

export default React.memo(WoohooCaption);
