import * as React from 'react';
import { AppStoreButton } from '@samiroy/sprites';

export const EndlessTrafficAppStoreButton = () => (
  <div className="w-sm m-auto">
    <a href="https://itunes.apple.com/app/id1226961549" className="no-hover w-sm" aria-label="link to app store">
      <AppStoreButton />
    </a>
  </div>
);

const EndlessTrafficCaption = () => (
  <>
    <p className="caption m-b-xl">
      Endless Traffic is a casual arcade game for the iPhone and Apple Watch where the player must manage rowdy rush
      hour traffic that will intensify over time and keep the intersection clear of accidents.
    </p>
    <div>
      <EndlessTrafficAppStoreButton />
    </div>
  </>
);

export default React.memo(EndlessTrafficCaption);
