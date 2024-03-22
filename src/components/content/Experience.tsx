import { Link } from 'gatsby';
import * as React from 'react';

type Props = {
  compact?: boolean;
};

const Item = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <li>
    {title} <br className="mobile" />
    <span className="light-text">{subtitle}</span>
  </li>
);

const Experience = ({ compact }: Props) => (
  <section>
    <h2>Founded by Samir Roy</h2>
    <p>
      Samir is an entrepreneur and has been a senior engineering leader at several early-stage technology companies. He
      has worked on product and engineering at startups through various stages of growth and helped founders navigate
      acquisitions, fund raising, and accelerators, including Shark Tank and YCombinator.
      {compact && (
        <>
          {' '}
          <Link to="/about">[more]</Link>
        </>
      )}
    </p>
    {!compact && (
      <ul>
        <Item title="Consulting Engineer @ Benepass" subtitle="(YCombinator W20)" />
        <Item title="Engineering Lead @ Collage" subtitle="($80M yearly revenue, acquired by Foreground)" />
        <Item
          title="Head of Engineering @ Toymail"
          subtitle="(founding engineer, YCombinator W16, Shark Tank S08E17)"
        />
        <Item title="Founder @ WooHoo" subtitle="(live fantasy sports platform, acquired by TransStadia)" />
        <Item title="VP Engineering @ KiwiTech" subtitle="(founding engineer, helped grow from 0 to 300+ engineers)" />
        <Item title="Consulting Engineer @ Fingerprint Play" subtitle="(acquired by Sandbox)" />
        <Item title="Lead Engineer @ Librify" subtitle="(acquired by Scribd)" />
        <Item title="Lead Engineer @ Klooff" subtitle="(acquired by American Kennel Club)" />
        <Item title="Started Career @ Accenture" subtitle="(worked on world's largest enterprise mobile deployment)" />
      </ul>
    )}
  </section>
);

export default React.memo(Experience);
