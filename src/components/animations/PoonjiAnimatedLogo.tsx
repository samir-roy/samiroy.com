import * as React from 'react';
import MatrixAnimation from '@components/animations/MatrixAnimation';
import PoonjiLogo from '@sprites/poonji/PoonjiLogo';

type Props = {
  /** whether the animation is running */
  running?: boolean;
}

const PoonjiAnimatedLogo = ({ running = true }: Props = {}) => {
  const styles = {
    wrapper: {
      width: '100%',
    } as React.CSSProperties,
    animations: {
      display: 'flex',
      width: '100%',
      maxWidth: 360,
      margin: 'auto',
    } as React.CSSProperties,
    matrixLeft: {
      float: 'left',
      marginTop: 6,
    } as React.CSSProperties,
    matrixRight: {
      float: 'right',
      marginTop: 6,
      flexGrow: 1,
    } as React.CSSProperties,
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.animations}>
        <div style={styles.matrixLeft}>
          <MatrixAnimation running={running} />
        </div>
        <div style={styles.matrixRight}>
          <MatrixAnimation running={running} reverse />
        </div>
      </div>
      <div style={{ marginTop: -160 }}><PoonjiLogo style={{ marginLeft: 'auto', marginRight: 'auto' }} /></div>
    </div>
  );
};

export default React.memo(PoonjiAnimatedLogo);
