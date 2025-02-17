import * as React from 'react';
import Page from '@components/Page';
import Margin from '@widgets/Margin';
import SamiroyHero from '@components/heroes/SamiroyHero';
import AboutCaption from '@content/AboutCaption';
import PoonjiHero from '@components/heroes/PoonjiHero';
import PoonjiCaption from '@content/PoonjiCaption';
import EndlessTrafficHero from '@components/heroes/EndlessTrafficHero';
import EndlessTrafficCaption from '@content/EndlessTrafficCaption';
import StatusBlock from '@content/StatusBlock';
import AlsoBuiltBlock from '@content/AlsoBuiltBlock';
import PlayersStatBox from '@content/PlayersStatBox';
import Experience from '@content/Experience';
import ContributionsStatBox from '@content/ContributionsStatBox';
import OpenSource from '@content/OpenSource';

const IndexPage = () => (
  <Page>
    <Margin height={96} />
    <SamiroyHero />
    <Margin height={64} />
    <AboutCaption />
    <Margin height={128} />

    <StatusBlock />

    <Margin height={64} />
    <PoonjiHero />
    <Margin height={48} />
    <PoonjiCaption />
    <Margin height={128} />

    <AlsoBuiltBlock />

    <Margin height={60} />
    <EndlessTrafficHero />
    <Margin height={48} />
    <EndlessTrafficCaption />
    <Margin height={64} />

    <PlayersStatBox />

    <Margin height={128} />
    <Experience compact />
    <Margin height={64} />

    <ContributionsStatBox />

    <Margin height={128} />
    <OpenSource />
    <Margin height={64} />
  </Page>
);

export default IndexPage;
