import * as React from 'react';
import { Link } from 'gatsby';

const AlsoBuiltBlock = () => (
  <div className="boxed">
    <h4 className="center m-zero">
      In an earlier time we used to make <Link to="/games">/games</Link>.
    </h4>
  </div>
);

export default React.memo(AlsoBuiltBlock);
