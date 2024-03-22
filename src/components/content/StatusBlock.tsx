import * as React from 'react';

const StatusBlock = () => (
  <div className="boxed">
    <h4 className="center m-zero">
      Currently building Poonji. See&nbsp;more&nbsp;at&nbsp;
      <a href="https://www.poonji.io">poonji.io</a>.
    </h4>
  </div>
);

export default React.memo(StatusBlock);
