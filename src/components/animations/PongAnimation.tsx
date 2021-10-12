import * as React from 'react';
import '@styles/pongAnimation.css';

const PongAnimation = () => (
  <div className="pong-wrapper">
    <div className="pong-ball" />
    <div className="pong-left-paddle" />
    <div className="pong-right-paddle" />
    <div className="pong-clear" />
  </div>
);

export default React.memo(PongAnimation);
