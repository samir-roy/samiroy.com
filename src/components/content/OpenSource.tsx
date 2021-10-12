import * as React from 'react';
import ToolsIcon from '@sprites/ToolsIcon';
import Margin from '@widgets/Margin';

const OpenSourceBlock = () => (
  <section>
    <h2>Open Source</h2>
    <p>
      This website is open source. You can find the source code at
      {' '}<a href="https://github.com/samir-roy/samirroy.com">https://github.com/samir-roy/samirroy.com</a>.
      It is built using awesome open source technologies including
      {' '}<a href="https://www.typescriptlang.org">Typescript</a>,
      {' '}<a href="https://reactjs.org">React</a>, & <a href="https://www.gatsbyjs.com">Gatsby</a>,
      and is hosted on <a href="https://vercel.com">Vercel</a>.
    </p>
    <Margin height={32} />
    <div className="boxed center flex">
      <div className="center" style={{ minWidth: 250 }}>
        <ToolsIcon />
      </div>
      <div className="mobile" style={{ height: 16 }} />
      <div className="center" style={{ display: 'table', flexGrow: 1 }}>
        <h3 style={{ display: 'table-cell', verticalAlign: 'middle' }}>
          Find&nbsp;this website and other
          <br />
          open&#8209;source projects at
          <br />
          <a href="https://github.com/samir-roy">https://github.com/samir-roy</a>
        </h3>
      </div>
    </div>
  </section>
);

export default React.memo(OpenSourceBlock);
