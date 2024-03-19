import * as React from 'react';
import { useInView } from 'react-intersection-observer';
import PoonjiTitle from '@sprites/poonji/PoonjiTitle';
import PoonjiAnimatedLogo from '@components/animations/PoonjiAnimatedLogo';
import Margin from '@widgets/Margin';

const PoonjiHero = () => {
  const [ref, inView] = useInView();

  return (
    <div className="flex">
      <div className="col-md-6 center" ref={ref}>
        <PoonjiAnimatedLogo running={inView} />
        <Margin height={0} mobile={16} />
      </div>
      <div className="col-md-6 center">
        <h1 className="m-b-md">
          <PoonjiTitle className="m-auto" />
        </h1>
        <h2>
          <div className="font-normal">No&#8209;code Algorithmic Trading&nbsp;Bots</div>
        </h2>
      </div>
    </div>
  );
};

export default React.memo(PoonjiHero);
