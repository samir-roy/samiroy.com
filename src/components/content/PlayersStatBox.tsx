import * as React from 'react';
import StatisticBox from '@widgets/StatBox';

const PlayersStatBox = () => {
  const caption = <>satisfied&nbsp;players</>;
  return <StatisticBox value="75,348" caption={caption} />;
};

export default React.memo(PlayersStatBox);
