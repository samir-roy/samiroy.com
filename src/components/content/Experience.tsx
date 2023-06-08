import * as React from 'react';

const Item = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <li>
    {title}{' '}
    <br className="mobile" />
    <span className="light-text">{subtitle}</span>
  </li>
);

const Experience = () => (
  <section>
    <h2>Founded by Samir Roy</h2>
    <p>
      Samir has been a senior engineering leader at several early-stage technology companies
      and has worked on product and engineering at startups through various stages of growth,
      with multiple successful exits. He has helped founders navigate through various
      accelerators and funding programs, including Shark Tank and YCombinator.
    </p>
    <ul>
      <Item title="Consulting Engineer @ Benepass" subtitle="(YCombinator W20)" />
      <Item title="Engineering Lead @ Collage" subtitle="($80M yearly revenue, acquired by Foreground)" />
      <Item title="Head of Engineering @ Toymail" subtitle="(founding engineer, YCombinator W16, Shark Tank S08E17)" />
      <Item title="VP Engineering @ KiwiTech" subtitle="(founding engineer, helped grow from 0 to 300+ engineers)" />
      <Item title="Consulting Engineer @ Fingerprint Play" subtitle="(acquired by Sandbox)" />
      <Item title="Lead Engineer @ Librify" subtitle="(acquired by Scribd)" />
      <Item title="Lead Engineer @ Kloof" subtitle="(acquired by American Kennel Club)" />
      <Item title="Started Career @ Accenture" subtitle="(worked on world's largest enterprise mobile deployment)" />
    </ul>
  </section>
);

export default React.memo(Experience);
