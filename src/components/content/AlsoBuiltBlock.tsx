import * as React from 'react';
import { Link } from 'gatsby';

const AlsoBuiltBlock = () => (
  <div className="boxed">
    <h3 style={{ fontWeight: 600, margin: 0, textAlign: 'center' }}>
      Also built Endless Traffic. Learn&nbsp;more&nbsp;at&nbsp;
      <Link to="/games">/games</Link>.
    </h3>
  </div>
);

export default React.memo(AlsoBuiltBlock);
