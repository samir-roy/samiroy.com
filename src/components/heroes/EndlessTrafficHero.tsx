import * as React from 'react';
import CarAnimation from '@components/animations/CarAnimation';
import EndlessTrafficTitle from '@sprites/traffic/EndlessTrafficTitle';

const EndlessTrafficHero = () => (
  <div className="flex-reverse">
    <div className="col-md-6 center">
      <div style={{ width: 280, maxWidth: '100%', margin: '16px auto' }}>
        <EndlessTrafficTitle />
      </div>
      <h2>
        <div style={{ marginBottom: 4, marginLeft: 4, fontWeight: 300 }}>
          Arcade&nbsp;Game for&nbsp;iPhone
        </div>
      </h2>
    </div>
    <div className="col-md-6 center">
      <CarAnimation style={{ margin: 'auto' }} />
      <div className="mobile" style={{ height: 16 }} />
    </div>
  </div>
);

export default React.memo(EndlessTrafficHero);
