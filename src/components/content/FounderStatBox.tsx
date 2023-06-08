import StatBox from '@components/widgets/StatBox';
import * as React from 'react';

const FounderStatBox = () => (
  <StatBox
    value="2017"
    caption={(
      <h3 style={{ fontWeight: 600, margin: 0, textAlign: 'center' }}>
        Samiroy LLC was founded in 2017 by Samir Roy
      </h3>
    )}
  />
);

export default React.memo(FounderStatBox);
