import * as React from 'react';
import Page from '@components/Page';
import SamiroyHero from '@components/heroes/SamiroyHero';
import Margin from '@widgets/Margin';
import Bookmarks from '@widgets/Bookmarks';

const StartPage = () => (
  <Page noFooter>
    <Margin height={96} />
    <SamiroyHero noTitle />
    <Margin height={96} />
    <Bookmarks />
  </Page>
);

export default StartPage;
