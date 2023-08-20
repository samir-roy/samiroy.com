import * as React from 'react';
import AppStoreButton from '@sprites/AppStoreButton';

export const EndlessTrafficAppStoreButton = () => (
  <div className="w-sm m-auto">
    {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
    <a href="https://itunes.apple.com/app/id1226961549" className="no-hover w-sm"><AppStoreButton /></a>
  </div>
);

const EndlessTrafficCaption = () => (
  <>
    <p className="caption m-b-lg">
      Endless Traffic is a rush hour traffic frenzy arcade game for the iPhone and Apple Watch. Manage increasingly
      rowdy traffic during rush hour to keep the intersection clear of accidents.
    </p>
    <div>
      <EndlessTrafficAppStoreButton />
    </div>
  </>
);

export default React.memo(EndlessTrafficCaption);
