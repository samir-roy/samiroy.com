import * as React from 'react';
import Page from '@components/Page';
import Margin from '@widgets/Margin';
import NavBar from '@widgets/NavBar';
import WoohooHero from '@components/heroes/WoohooHero';

const WoohooPage = () => (
  <Page title="WooHoo">
    <NavBar />
    <Margin height={64} />
    <WoohooHero />
    <Margin height={64} />
    <p className="center m-b-lg">
      WooHoo was a live fantasy sports platform.
      <br />
      It was acquired by TransStadia.
    </p>
  </Page>
);

export default WoohooPage;
