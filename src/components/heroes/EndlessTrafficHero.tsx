import * as React from 'react';
import { EndlessTrafficAnimatedLogo, EndlessTrafficTitle } from '@samiroy/sprites';
import Margin from '@widgets/Margin';

const EndlessTrafficHero = () => (
  <div className="flex-reverse">
    <div className="col-md-6 center">
      <div style={{ width: 280, maxWidth: '100%', margin: '16px auto' }}>
        <EndlessTrafficTitle />
      </div>
    </div>
    <div className="col-md-6 center">
      <EndlessTrafficAnimatedLogo style={{ margin: 'auto' }} />
      <Margin height={0} mobile={16} />
    </div>
  </div>
);

export default React.memo(EndlessTrafficHero);
