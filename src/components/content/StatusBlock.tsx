import * as React from 'react';

const StatusBlock = () => (
  <div className="boxed">
    <h3 className="center m-zero font-heavy">
      Currently building Poonji. Learn&nbsp;more&nbsp;at&nbsp;
      <a href="https://www.poonji.io">poonji.io</a>.
    </h3>
  </div>
);

export default React.memo(StatusBlock);
