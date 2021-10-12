import * as React from 'react';
import svgTools from '@svg/tools.svg';

const defaultStyle = {
  width: 96,
  height: 96,
  padding: 16,
} as React.CSSProperties;

const ToolsIcon = ({ style = {} }: { style?: React.CSSProperties } = {}) => (
  <img
    alt="Tools Icon"
    src={svgTools}
    style={{ ...defaultStyle, ...style }}
  />
);

export default React.memo(ToolsIcon);
