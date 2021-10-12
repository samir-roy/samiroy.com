import * as React from 'react';

const KeepScrollingBlock = () => (
  <div className="boxed">
    <h3 style={{ fontWeight: 600, margin: 0, textAlign: 'center' }}>
      Keep scrolling to learn more about Samir.
    </h3>
  </div>
);

export default React.memo(KeepScrollingBlock);
