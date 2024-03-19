import * as React from 'react';
import svgWoohooTitle from '@svg/woohoo-title.svg';
import svgWoohooShield from '@svg/woohoo-shield.svg';
import Margin from '@widgets/Margin';

const WoohooHero = () => (
  <div className="flex">
    <div className="col-md-6 center">
      <img src={svgWoohooShield} alt="Woohoo Shield" style={{ margin: 'auto', height: 196 }} />
      <Margin height={0} mobile={16} />
    </div>
    <div className="col-md-6 center">
      <div style={{ width: 280, maxWidth: '100%', margin: '4px auto' }}>
        <img src={svgWoohooTitle} height="100%" width="100%" alt="Woohoo" />
      </div>
      <h2>
        <div style={{ marginBottom: 4, marginLeft: 4, fontWeight: 300 }}>Live&nbsp;Fantasy Sports&nbsp;Game</div>
      </h2>
    </div>
  </div>
);

export default React.memo(WoohooHero);
