import * as React from 'react';
import { Link } from 'gatsby';
import Page from '@components/Page';
import Margin from '@widgets/Margin';
import SamiroyHero from '@components/heroes/SamiroyHero';

const NotFoundPage = () => (
  <Page title="Not Found">
    <Margin height={96} />
    <SamiroyHero subtitle="404 - Page Not Found" />
    <Margin height={96} />
    <h2>Sorry! We can&#39;t seem to find the page you were looking for.</h2>
    <p>
      It may have expired, or there could be a typo. Maybe you can find what you were looking for from our homepage.
      <br />
      <br />
      <Link to="/">Go home</Link>
    </p>
  </Page>
);

export default NotFoundPage;
