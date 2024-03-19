import * as React from 'react';
import svgGraduation from '@svg/graduation.svg';

const defaultStyle = {
  width: 128,
  height: 128,
} as React.CSSProperties;

const GraduationIcon = ({ style = {} }: { style?: React.CSSProperties } = {}) => (
  <img alt="Graduation Icon" src={svgGraduation} style={{ ...defaultStyle, ...style }} />
);

export default React.memo(GraduationIcon);
