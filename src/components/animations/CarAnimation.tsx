import * as React from 'react';
import CarChasis from '@sprites/traffic/CarChasis';
import CarShadow from '@sprites/traffic/CarShadow';
import CarTyres from '@sprites/traffic/CarTyres';

const size = {
  height: 192,
  width: 256,
} as React.CSSProperties;

const CarAnimation = ({ style = {} }: { style?: React.CSSProperties } = {}) => {
  const layerStyle = (zIndex: number) => ({
    ...size,
    zIndex,
    position: 'absolute',
    display: 'content',
  } as React.CSSProperties);

  return (
    <div style={{ ...size, ...style }}>
      <div style={layerStyle(1)}><CarShadow /></div>
      <div className="bounce" style={{ ...layerStyle(2) }}><CarChasis /></div>
      <div style={layerStyle(3)}><CarTyres /></div>
    </div>
  );
};

export default React.memo(CarAnimation);
