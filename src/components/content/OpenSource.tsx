import * as React from 'react';
import Margin from '@widgets/Margin';
import ContributionsStatBox from '@components/content/ContributionsStatBox';

const OpenSourceBlock = () => (
  <section>
    <h2>Open Source</h2>
    <p>
      Our open source <a href="https://github.com/samir-roy?tab=repositories">repos</a> help showcase our coding style
      and commitment to code quality. They include the source for the Endless Traffic game and various fintech tools or
      widgets from the Poonji project.
    </p>
    <p>
      We love <a href="https://neovim.io">Neovim</a> and maintain the Lua source for our config{' '}
      <a href="https://github.com/samir-roy/init.nvim">here</a>. We created a custom color scheme for it called{' '}
      <a href="https://github.com/samir-roy/shinjuku.nvim">Shinjuku</a>. It goes well with the tmux and terminal configs
      found in the <a href="https://github.com/samir-roy/dotfiles">dotfiles</a> repo.
    </p>
    <p className="center m-0">
      <img
        src="/shinjuku-screenshot.webp"
        loading="lazy"
        width="316"
        height="304"
        alt="screenshot"
        className="max-w-fit"
      />
    </p>
    <p>
      This website is also open source, with the repo located{' '}
      <a href="https://github.com/samir-roy/samirroy.com">here</a>. It is built using awesome open source technologies
      like <a href="https://www.typescriptlang.org">Typescript</a>, <a href="https://reactjs.org">React</a>, &{' '}
      <a href="https://www.gatsbyjs.com">Gatsby</a>, and is hosted on <a href="https://vercel.com">Vercel</a>.
    </p>
    <p>
      All our open source repos can be found <a href="https://github.com/samir-roy?tab=repositories">here</a>.
    </p>
    <Margin height={32} />
    <ContributionsStatBox />
  </section>
);

export default React.memo(OpenSourceBlock);
