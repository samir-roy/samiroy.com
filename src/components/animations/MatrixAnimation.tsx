import * as React from 'react';
import FadingDigitAnimation from './FadingDigitAnimation';

type Props = {
  /** whether the animation is running */
  running?: boolean;
  /** reverse the order of columns */
  reverse?: boolean;
}

const matrix = [
  [0, 0, 1, 1, 0, 1, 0, 1],
  [1, 1, 0, 1, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 1, 1, 0, 0],
  [0, 0, 1, 1, 1, 0, 1, 1],
  [1, 1, 1, 0, 0, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 1, 1, 1, 0, 0],
] as const;

// fake random column selection
const distribution = [0, 5, 2, 1, 3, 7, 4, 6, 0, 2, 5, 1, 7, 3, 6, 4];

const useDropEffect = (initialPosition = 0) => {
  const [row, setRow] = React.useState(initialPosition);
  const [col, setCol] = React.useState(0);
  const [, setPos] = React.useState(initialPosition);

  const tick = React.useCallback(() => {
    setRow((r) => {
      if (r === 7) {
        setPos((p) => {
          const x = p === 15 ? 0 : p + 1;
          setCol(distribution[x]);
          return x;
        });
        return 0;
      }
      return r + 1;
    });
  }, []);

  return [row, col, tick] as const;
};

const MatrixAnimation = ({ running = true, reverse = false }: Props = {}) => {
  const [row1, col1, tick1] = useDropEffect(0);
  const [row2, col2, tick2] = useDropEffect(4);

  React.useEffect(() => {
    if (running) {
      const intervalHandle = setInterval(() => {
        tick1();
        tick2();
      }, 99);

      return () => clearInterval(intervalHandle);
    }

    return () => null;
  }, [running, tick1, tick2]);

  return (
    <>
      {
        matrix.map((matrixRow, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={`${i}`} style={{ flexDirection: reverse ? 'row-reverse' : 'row', display: 'flex' }}>
            {
              matrixRow.map((digit, j) => (
                <FadingDigitAnimation
                  // eslint-disable-next-line react/no-array-index-key
                  key={`${i}${j}`}
                  digit={digit}
                  reset={(i === row1 && j === col1) || (i === row2 && j === col2)}
                />
              ))
            }
          </div>
        ))
      }
    </>
  );
};

export default React.memo(MatrixAnimation);
