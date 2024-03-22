import * as React from 'react';

const PoonjiCaption = () => (
  <>
    <p className="caption m-b-xl">
      Poonji empowers retail investors to effortlessly craft and implement complex strategies across their entire
      portfolio. The AI-driven Research Analyst and Quant facilitate the orchestration of dynamic strategies that are
      continuously monitored and executed by a Daemon program.
    </p>
    <div className="m-auto w-sm h-button">
      <a href="https://www.poonji.io" className="button min-w-sm">
        Visit Poonji
      </a>
    </div>
  </>
);

export default React.memo(PoonjiCaption);
