import * as React from 'react';
import Page from '@components/Page';
import Margin from '@widgets/Margin';
import SamiroyHero from '@components/heroes/SamiroyHero';
import AboutCaption from '@content/AboutCaption';
import PoonjiHero from '@components/heroes/PoonjiHero';
import PoonjiCaption from '@content/PoonjiCaption';
import EndlessTrafficHero from '@components/heroes/EndlessTrafficHero';
import EndlessTrafficCaption from '@content/EndlessTrafficCaption';
import WoohooHero from '@components/heroes/WoohooHero';
import WoohooCaption from '@content/WoohooCaption';
import StatusBlock from '@content/StatusBlock';
import AlsoBuiltBlock from '@content/AlsoBuiltBlock';
import KeepScrollingBlock from '@content/KeepScrollingBlock';
import PlayersStatBox from '@content/PlayersStatBox';
import ContributionsStatBox from '@content/ContributionsStatBox';
import Experience from '@content/Experience';
import Education from '@content/Education';
import OpenSource from '@content/OpenSource';

const IndexPage = () => (
  <Page>
    <Margin height={96} />
    <SamiroyHero subtitle="Startup Engineering" thin />
    <Margin height={64} desktop={96} />
    <AboutCaption />
    <Margin height={96} />

    <StatusBlock />

    <Margin height={64} />
    <PoonjiHero />
    <Margin height={64} />
    <PoonjiCaption />
    <Margin height={96} />

    <AlsoBuiltBlock />

    <Margin height={60} />
    <EndlessTrafficHero />
    <Margin height={64} />
    <EndlessTrafficCaption />
    <Margin height={64} />

    <PlayersStatBox />

    <Margin height={96} />
    <WoohooHero />
    <Margin height={64} />
    <WoohooCaption />
    <Margin height={96} />

    <KeepScrollingBlock />

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

export default IndexPage;
