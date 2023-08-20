import { Link } from 'gatsby';
import * as React from 'react';

const WoohooCaption = () => (
  <>
    <p className="caption m-b-lg">
      WooHoo was a live fantasy sports experience created to play along with the ICC Cricket World Cup in 2015.
    </p>
    <div className="w-sm h-button m-auto">
      <Link to="/woohoo" className="button min-w-sm">
        Learn more
      </Link>
    </div>
  </>
);

export default React.memo(WoohooCaption);
