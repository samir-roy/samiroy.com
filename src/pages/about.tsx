import * as React from 'react';
import Page from '@components/Page';
import Margin from '@widgets/Margin';
import SamiroyHero from '@components/heroes/SamiroyHero';
import AboutCaption from '@content/AboutCaption';
import ContributionsStatBox from '@content/ContributionsStatBox';
import Experience from '@content/Experience';
import Education from '@content/Education';

const AboutPage = () => (
  <Page title="About">
    <Margin height={96} />
    <SamiroyHero />
    <Margin height={64} desktop={96} />
    <AboutCaption />
    <Margin height={96} />

    <Experience />
    <Margin height={32} />
    <ContributionsStatBox />

    <Margin height={96} />
    <Education />
  </Page>
);

export default AboutPage;
