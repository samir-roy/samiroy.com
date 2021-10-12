import * as React from 'react';
import svgLogoDay from '@svg/samiroy-logo-color-day.svg';
import svgLogoNight from '@svg/samiroy-logo-color-night.svg';

const defaultStyle = {
  width: 190,
  height: 150,
} as React.CSSProperties;

const SamiroyLogo = ({ style = defaultStyle }: { style?: React.CSSProperties } = {}) => (
  <>
    <img
      alt="Samiroy Logo"
      src={svgLogoDay}
      style={style}
      className="day"
    />
    <img
      alt="Samiroy Logo"
      src={svgLogoNight}
      style={style}
      className="night"
    />
  </>
);

export default React.memo(SamiroyLogo);
