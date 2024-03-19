import * as React from 'react';
import SamiroyTitle from '@sprites/SamiroyTitle';
import SamiroyAnimatedLogo from '@components/animations/SamiroyAnimatedLogo';
import Margin from '@widgets/Margin';

type Props = {
  /** subtitle to show below the samiroy title */
  subtitle?: string;
  /** if the subtitle should use 300 font weight */
  thin?: boolean;
};

const SamiroyHero = ({ subtitle = '', thin = false }: Props) => (
  <div className="flex-reverse">
    <div className="col-md-6 center">
      <div style={{ marginBottom: 16, display: 'inline-flex' }}>
        <SamiroyTitle />
      </div>
      <h1 style={thin ? { fontWeight: 300, margin: 0 } : { margin: 0 }}>{subtitle}</h1>
    </div>
    <div className="col-md-6 center">
      <SamiroyAnimatedLogo />
      <Margin height={0} mobile={80} />
    </div>
  </div>
);

export default React.memo(SamiroyHero);
