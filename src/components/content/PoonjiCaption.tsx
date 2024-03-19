import * as React from 'react';

const PoonjiCaption = () => (
  <>
    <p className="caption m-b-lg">
      Poonji is a no-code platform for creating algorithmic trading bots using visual tools to combine configurable
      building blocks.
    </p>
    <div className="m-auto w-sm h-button">
      <a href="https://www.poonji.io" className="button min-w-sm">
        Visit Poonji
      </a>
    </div>
  </>
);

export default React.memo(PoonjiCaption);
