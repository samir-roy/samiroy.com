import * as React from 'react';
import '@styles/matrixAnimation.css';
import DigitOne from '@sprites/poonji/MatrixDigitOne';
import DigitZero from '@sprites/poonji/MatrixDigitZero';

type Props = {
  /** the digit to render */
  digit?: 0 | 1;
  /** resets the animation when the prop goes from true to false */
  reset?: boolean;
}

const FadingDigitAnimation = ({ digit = 0, reset = false }: Props = {}) => {
  const styles = {
    container: {
      animation: reset ? 'none' : 'matrix-animation-fade-out 1s forwards',
      WebkitAnimation: reset ? 'none' : 'matrix-animation-fade-out 1s forwards',
      marginBottom: 4,
    } as React.CSSProperties,
    one: {
      width: 6,
      height: 11,
      paddingLeft: 4,
      paddingRight: 2,
      paddingTop: 2,
      paddingBottom: 2,
      display: 'flex',
    } as React.CSSProperties,
    zero: {
      width: 8,
      height: 11,
      padding: 2,
      display: 'flex',
    } as React.CSSProperties,
  };

  return (
    <div style={styles.container}>
      {
        digit === 1 ? (
          <div style={styles.one}>
            <DigitOne />
          </div>
        ) : (
          <div style={styles.zero}>
            <DigitZero />
          </div>
        )
      }
    </div>
  );
};

export default React.memo(FadingDigitAnimation);
