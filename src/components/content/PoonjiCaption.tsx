import * as React from 'react';

const PoonjiCaption = () => (
  <>
    <h2 className="caption m-b-xl">
      Poonji is an algo traded private fund running on our proprietary platform. The AI based Research Analyst and Quant
      facilitate the orchestration of dynamic strategies that are executed by a Daemon program and controlled via a
      mobile terminal.
    </h2>
    <div className="m-auto w-sm h-button">
      <a href="https://www.poonji.io" className="button min-w-sm">
        Visit Poonji
      </a>
    </div>
  </>
);

export default React.memo(PoonjiCaption);
