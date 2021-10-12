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

const PoonjiCaption = () => (
  <>
    <p style={styles.body}>
      Poonji is a no-code platform for creating algorithmic trading bots
      using visual tools to combine configurable building blocks.
    </p>
    <div style={styles.button}>
      <a href="https://www.poonji.io" className="button" style={styles.link}>
        Visit Poonji
      </a>
    </div>
  </>
);

export default React.memo(PoonjiCaption);
