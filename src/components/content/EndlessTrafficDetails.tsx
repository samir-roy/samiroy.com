import * as React from 'react';
import { EndlessTrafficAppStoreButton } from '@content/EndlessTrafficCaption';
import Margin from '@widgets/Margin';

const EndlessTrafficDetails = () => (
  <>
    <div className="center carousel">
      <img
        src="https://is5-ssl.mzstatic.com/image/thumb/PurpleSource125/v4/70/44/f1/7044f1a5-1f39-23e0-62fb-ada91bf2dac5/13b422e0-efa2-45eb-bb70-30fe4544e955_StoreScreenhotTall1.png/314x0w.webp"
        alt="screenshot"
        height="340"
        width="157"
      />
      <img
        src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource115/v4/58/ad/0a/58ad0a84-9306-e193-b638-f7e0aa354847/7576c88b-61d5-4d93-b518-a1b973785494_StoreScreenhotTall2.png/314x0w.webp"
        alt="screenshot"
        height="340"
        width="157"
      />
    </div>
    <Margin height={64} />
    <p>
      A classic hit game has been reimagined exclusively for the iPhone. Don&#39;t settle for pixillated old versions
      when you can get:
    </p>
    <ul>
      <li>Colorful HD Graphics - don&#39;t settle for retro in the age of retina!</li>
      <li>Haptic Feedback - take advantage of your iPhone&#39;s Taptic Engine to get realtime feedback</li>
      <li>Game Center Leaderboards - compete against your friends for the highest score</li>
      <li>Portrait Orientation - so you can play with one hand on the subway</li>
      <li>Multi-Touch Controls - control multiple cars at once for increased efficiency</li>
      <li>Night Mode - play in the dark without hurting your eyes</li>
      <li>Continues - don&#39;t let that amazing run end - continue up to three times per game</li>
      <li>
        Magic Wand - use the magic wand button to instantly vanish all the cars and get you out of a &#34;jam&#34;
      </li>
      <li>Fast Forward - double the speed and &#34;cruise&#34; through the slower stages</li>
      <li>Sticker Pack - encourage safe driving by sending traffic themed stickers in iMessage</li>
      <li>Watch App - to scratch that Endless Traffic itch on the elevator ride up</li>
      <li>Everything Unlocked - you shouldn&#39;t have to pay for virtual cars</li>
    </ul>
    <p>Play this addictive casual arcade game today - it&#39;s FREE!</p>
    <Margin height={64} />
    <div className="boxed center">
      <h1>Download Now!</h1>
      <h2>Available exclusively for the iPhone! Search for Samiroy on the App Store or click the button below.</h2>
      <Margin height={32} />
      <EndlessTrafficAppStoreButton />
    </div>
  </>
);

export default React.memo(EndlessTrafficDetails);
