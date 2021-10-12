import * as React from 'react';
import Page from '@components/Page';
import Margin from '@widgets/Margin';
import NavBar from '@widgets/NavBar';
import EndlessTrafficHero from '@components/heroes/EndlessTrafficHero';
import EndlessTrafficCaption from '@content/EndlessTrafficCaption';
import EndlessTrafficDetails from '@content/EndlessTrafficDetails';
import PlayersStatBox from '@content/PlayersStatBox';

const EndlessTrafficPage = () => (
  <Page title="Endless Traffic">
    <NavBar />
    <Margin height={64} />
    <EndlessTrafficHero />
    <Margin height={64} />
    <EndlessTrafficCaption />
    <Margin height={64} />
    <PlayersStatBox />
    <Margin height={64} />
    <EndlessTrafficDetails />
  </Page>
);

export default EndlessTrafficPage;
