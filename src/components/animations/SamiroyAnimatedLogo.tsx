import * as React from 'react';
import PongAnimation from '@components/animations/PongAnimation';
import SamiroyLogo from '@sprites/SamiroyLogo';

const SamiroyAnimatedLogo = () => {
  const styles = {
    wrapper: {
      overflow: 'clip',
      height: 150,
    } as React.CSSProperties,
    container: {
      display: 'inline-block',
      margin: 'auto',
      width: 'calc(100%)',
      height: 150,
      maxWidth: 360,
    } as React.CSSProperties,
    animation: {
      position: 'absolute',
      width: 'calc(100%)',
      display: 'contents',
    } as React.CSSProperties,
    logo: {
      display: 'inline-block',
      top: -150,
      position: 'relative',
    } as React.CSSProperties,
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <div style={styles.animation}>
          <PongAnimation />
        </div>
        <div style={styles.logo}>
          <SamiroyLogo />
        </div>
      </div>
    </div>
  );
};

export default React.memo(SamiroyAnimatedLogo);
