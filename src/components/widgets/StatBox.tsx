import * as React from 'react';
import Odometer from '@widgets/Odometer';

type Props = {
  /** the value to display */
  value: string;
  /** the caption to display below value */
  caption?: React.ReactChild | string;
};

const StatBox = ({ value, caption }: Props) => {
  const odoStyle = (glitch = 0, zIndex = 1): React.CSSProperties => ({
    position: 'absolute',
    zIndex,
    left: '50%',
    width: 250,
    transform: `translate(calc(-50% ${glitch < 0 ? '-' : '+'} ${Math.abs(glitch)}px), 0px)`,
    WebkitTransform: `translate(calc(-50% ${glitch < 0 ? '-' : '+'} ${Math.abs(glitch)}px), 0px)`,
  });

  return (
    <div className="boxed center">
      <div style={{ position: 'relative', height: 56, width: '100%' }}>
        <div style={odoStyle(-3, 1)}>
          <Odometer value={value} color="var(--primary-glitch-color)" />
        </div>
        <div style={odoStyle(3, 1)}>
          <Odometer value={value} color="var(--secondary-glitch-color)" />
        </div>
        <div style={odoStyle(0, 2)}>
          <Odometer value={value} color="var(--text-color)" />
        </div>
      </div>
      {caption}
    </div>
  );
};

export default React.memo(StatBox);
