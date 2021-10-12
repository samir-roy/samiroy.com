import * as React from 'react';
import svgTitleDay from '@svg/samiroy-color-day.svg';
import svgTitleNight from '@svg/samiroy-color-night.svg';

const defaultStyle = {
  width: 255,
  height: 53,
  maxWidth: '100%',
} as React.CSSProperties;

const SamiroyTitle = ({ style = defaultStyle }: { style?: React.CSSProperties } = {}) => (
  <>
    <img
      alt="Samiroy"
      src={svgTitleDay}
      style={style}
      className="day"
    />
    <img
      alt="Samiroy"
      src={svgTitleNight}
      style={style}
      className="night"
    />
  </>
);

export default React.memo(SamiroyTitle);
