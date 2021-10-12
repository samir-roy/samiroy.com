import * as React from 'react';
import Page from '@components/Page';
import Margin from '@widgets/Margin';
import SamiroyHero from '@components/heroes/SamiroyHero';
import AboutCaption from '@content/AboutCaption';
import ContributionsStatBox from '@content/ContributionsStatBox';
import Experience from '@content/Experience';
import Education from '@content/Education';
import OpenSource from '@content/OpenSource';

const AboutPage = () => (
  <Page>
    <Margin height={96} />
    <SamiroyHero subtitle="Startup Engineering" thin />
    <Margin height={64} desktop={96} />
    <AboutCaption />
    <Margin height={96} />

    <Experience />
    <Margin height={32} />
    <ContributionsStatBox />

    <Margin height={96} />
    <Education />
    <Margin height={96} />

    <OpenSource />
  </Page>
);

export default AboutPage;
