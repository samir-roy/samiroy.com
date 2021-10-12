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
    <h2>Experience</h2>
    <p>
      The first engineer or a senior engineer at several early-stage technology companies.
      Worked on product and enginnering at startups through various stages of growth, with
      multiple successful exits. Helped founders through accelerators and funding programs,
      including Shark Tank and YCombinator.
    </p>
    <ul>
      <Item title="Senior Engineer @ Collage" subtitle="(acquired by Foreground)" />
      <Item title="First Engineer @ Toymail" subtitle="(YCombinator W16, Shark Tank S08E17)" />
      <Item title="Early Engineer @ Librify" subtitle="(acquired by Scribd)" />
      <Item title="Early Engineer @ Fingerprint Play" subtitle="(acquired by Sandbox)" />
      <Item title="Early Engineer @ Kloof" subtitle="(acquired by American Kennel Club)" />
      <Item title="First Engineer @ KiwiTech" subtitle="(helped grow to 300+ engineers, going strong)" />
      <Item title="Started Career @ Accenture" subtitle="(worked on world's largest enterprise mobile deployment)" />
    </ul>
  </section>
);

export default React.memo(Experience);
