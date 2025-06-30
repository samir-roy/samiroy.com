import * as React from 'react';
import { SamiroyTitle, SamiroyAnimatedLogo } from '@samiroy/sprites';
import Margin from '@widgets/Margin';

type Props = {
  /** subtitle to show below the samiroy title */
  subtitle?: string;
  /** hide the title */
  noTitle?: boolean;
};

const SamiroyHero = ({ subtitle = '', noTitle }: Props) => (
  <div className="col center">
    <div className="w-xl">
      <SamiroyAnimatedLogo />
    </div>
    {!noTitle && (
      <>
        <Margin height={80} />
        <div style={{ marginBottom: 16, display: 'inline-flex' }}>
          <SamiroyTitle style={{ height: 'auto', width: 320, maxWidth: '100%' }} />
        </div>
      </>
    )}
    {!!subtitle && <h2 style={{ margin: 0, marginTop: 16 }}>{subtitle}</h2>}
  </div>
);

export default React.memo(SamiroyHero);
