import * as React from 'react';
import Margin from '@widgets/Margin';
import ContributionsStatBox from '@components/content/ContributionsStatBox';

const OpenSourceBlock = () => (
  <section>
    <h2>Open Source</h2>
    <p>
      Some day we hope to contribute to some meaningful open source projects but until then we have some small stuff
      open for anyone to stumble upon.
    </p>
    <p>
      We put a lot of love into our <a href="https://neovim.io">Neovim</a> configuration and have documented it via
      comments for others to adopt. You can find the Lua source{' '}
      <a href="https://github.com/samir-roy/init.nvim">here</a>. We even created our very own color scheme called{' '}
      <a href="https://github.com/samir-roy/shinjuku.nvim">Shinjuku</a>.
    </p>
    <p className="center m-b-md">
      <img
        src="/shinjuku-screenshot.webp"
        loading="lazy"
        width="226"
        height="214"
        alt="screenshot"
        className="max-w-fit"
      />
    </p>
    <p>
      This website is open source with the repo located <a href="https://github.com/samir-roy/samirroy.com">here</a>. It
      is built using awesome open source technologies like <a href="https://www.typescriptlang.org">Typescript</a>,{' '}
      <a href="https://reactjs.org">React</a>, & <a href="https://www.gatsbyjs.com">Gatsby</a>, and is hosted on{' '}
      <a href="https://vercel.com">Vercel</a>.
    </p>
    <p>
      That&#39;s not all! We welcome you to check out all our{' '}
      <a href="https://github.com/samir-roy?tab=repositories">repos</a> to see if something piques your interest.
    </p>
    <Margin height={32} />
    <ContributionsStatBox />
  </section>
);

export default React.memo(OpenSourceBlock);
