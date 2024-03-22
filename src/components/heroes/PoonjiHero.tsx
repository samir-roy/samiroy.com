import * as React from 'react';
import { useInView } from 'react-intersection-observer';
import { PoonjiTitle, PoonjiAnimatedLogo } from '@samiroy/sprites';
import Margin from '@widgets/Margin';

const PoonjiHero = () => {
  const [ref, inView] = useInView();

  return (
    <div className="col">
      <div className="col-md-7 center" ref={ref}>
        <PoonjiAnimatedLogo running={inView} />
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
