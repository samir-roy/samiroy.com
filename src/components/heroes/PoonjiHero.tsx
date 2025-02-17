import * as React from 'react';
import { PoonjiTitle, PoonjiLogo } from '@samiroy/sprites';
import Margin from '@widgets/Margin';

const PoonjiHero = () => {
  return (
    <div className="col">
      <div className="col-md-7 center">
        <PoonjiLogo style={{ width: 150, height: 150, margin: 'auto' }} />
        <Margin height={32} />
      </div>
      <div className="col-md-7 center">
        <h1 className="m-b-md">
          <PoonjiTitle className="m-auto" />
        </h1>
      </div>
    </div>
  );
};

export default React.memo(PoonjiHero);
