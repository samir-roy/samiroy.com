import * as React from 'react';
import PongAnimation from '@components/animations/PongAnimation';
import SamiroyLogo from '@sprites/SamiroyLogo';

const SamiroyAnimatedLogo = () => {
  const styles: Record<string, React.CSSProperties> = {
    wrapper: {
      overflow: 'clip',
      height: 150,
    },
    container: {
      display: 'inline-block',
      margin: 'auto',
      width: 'calc(100%)',
      height: 150,
      maxWidth: 360,
    },
    animation: {
      position: 'absolute',
      width: 'calc(100%)',
      display: 'contents',
    },
    logo: {
      display: 'inline-block',
      top: -160,
      position: 'relative',
    },
    sprite: {
      height: 168,
      width: 145,
    },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <div style={styles.animation}>
          <PongAnimation />
        </div>
        <div style={styles.logo}>
          <SamiroyLogo style={styles.sprite} />
        </div>
      </div>
    </div>
  );
};

export default React.memo(SamiroyAnimatedLogo);
