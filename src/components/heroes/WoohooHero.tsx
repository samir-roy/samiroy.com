import * as React from 'react';
import svgWoohooShield from '@svg/woohoo-shield.svg';

const WoohooHero = () => (
  <div className="flex">
    <div className="col-md-6 center">
      <img src={svgWoohooShield} alt="Woohoo Shield" style={{ margin: 'auto', height: 196 }} />
    </div>
  </div>
);

export default React.memo(WoohooHero);
