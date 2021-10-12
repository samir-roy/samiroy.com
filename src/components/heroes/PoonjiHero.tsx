import * as React from 'react';
import { useInView } from 'react-intersection-observer';
import PoonjiTitle from '@sprites/poonji/PoonjiTitle';
import PoonjiAnimatedLogo from '@components/animations/PoonjiAnimatedLogo';

const PoonjiHero = () => {
  const [ref, inView] = useInView();

  return (
    <div className="flex">
      <div className="col-md-6 center" ref={ref}>
        <PoonjiAnimatedLogo running={inView} />
        <div className="mobile" style={{ height: 16 }} />
      </div>
      <div className="col-md-6 center">
        <h1 style={{ marginBottom: 16 }}>
          <PoonjiTitle style={{ margin: 'auto' }} />
        </h1>
        <h2>
          <div style={{ fontWeight: 300 }}>
            No&#8209;code Algorithmic Trading&nbsp;Bots
          </div>
        </h2>
      </div>
    </div>
  );
};

export default React.memo(PoonjiHero);
