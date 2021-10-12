import * as React from 'react';
import AppStoreButton from '@sprites/AppStoreButton';

const styles = {
  body: {
    fontSize: '1.6em',
    textAlign: 'justify',
    fontWeight: 200,
    marginBottom: 32,
  } as React.CSSProperties,
  button: {
    width: 150,
    margin: 'auto',
  } as React.CSSProperties,
};

export const EndlessTrafficAppStoreButton = () => (
  <div style={styles.button}>
    {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
    <a href="https://itunes.apple.com/app/id1226961549" className="no-hover" style={{ width: 150 }}><AppStoreButton /></a>
  </div>
);

const EndlessTrafficCaption = () => (
  <>
    <p style={styles.body}>
      Endless Traffic is a rush hour traffic frenzy arcade game for the iPhone and Apple Watch. Manage increasingly
      rowdy traffic during rush hour to keep the intersection clear of accidents.
    </p>
    <div>
      <EndlessTrafficAppStoreButton />
    </div>
  </>
);

export default React.memo(EndlessTrafficCaption);
