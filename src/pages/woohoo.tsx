import * as React from 'react';
import Page from '@components/Page';
import Margin from '@widgets/Margin';
import NavBar from '@widgets/NavBar';
import WoohooHero from '@components/heroes/WoohooHero';

const styles = {
  body: {
    fontSize: '1.6em',
    textAlign: 'justify',
    fontWeight: 200,
    marginBottom: 32,
  } as React.CSSProperties,
};

const WoohooPage = () => (
  <Page title="WooHoo">
    <NavBar />
    <Margin height={64} />
    <WoohooHero />
    <Margin height={64} />
    <p style={styles.body}>
      WooHoo was a live fantasy sports experience created to play along with the ICC Cricket World Cup in 2015.
    </p>
    <div className="center carousel" style={{ marginBottom: 48 }}>
      <img alt="screenshot" width="240" height="426" src="/woohoo01.webp" />
      <img alt="screenshot" width="240" height="426" src="/woohoo02.webp" />
      <img alt="screenshot" width="240" height="426" src="/woohoo03.webp" />
    </div>
    <p>
      The goal of the game was to predict outcomes in live matches to win points. Players would receive questions
      of variying timeframes throughout the course of the live sports game and would win points for correct
      predictions. They could compete against their friends for bragging rights or against everyone else to win
      prizes. Players were also able to chat with their friends while playing the game and see their rankings on
      live leaderboards.
    </p>
    <div className="center carousel" style={{ marginTop: 48, marginBottom: 48 }}>
      <img alt="screenshot" width="240" height="426" src="/woohoo04.webp" />
      <img alt="screenshot" width="240" height="426" src="/woohoo05.webp" />
      <img alt="screenshot" width="240" height="426" src="/woohoo06.webp" />
    </div>
    <p>
      The game was run during the ICC Cricket World Cup in 2015 and was enjoyed and appreciated by all who
      experienced it. The experience ended along with the tournament and was not resurrected for other events
      as there was no path to monetization other than sponsorships at that time, due to the more restrictive
      laws around fantasy sports. At the time it was created, WooHoo was a one-of-a-kind experience. Today,
      with the laws more relaxed, there are various different services who have emulated that live fantasy
      sports experience.
    </p>
  </Page>
);

export default WoohooPage;
