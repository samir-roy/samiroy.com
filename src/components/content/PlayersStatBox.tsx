import * as React from 'react';
import StatisticBox from '@widgets/StatBox';

const PlayersStatBox = () => {
  const [players, setPlayers] = React.useState('3,386'); // default to last updated
  const [games, setGames] = React.useState('5,778'); // default to last updated

  React.useEffect(() => {
    (async () => {
      try {
        const response = await fetch('/api/players');
        const json = await response.json();
        setPlayers(`${json.players}`);
        setGames(`${json.games}`);
      } catch (e) {
        // log.error(e);
      }
    })();
  }, []);

  const caption = (
    <h3 className="font-heavy m-caption">
      games&nbsp;played by&nbsp;{players}
      &nbsp;players last month
    </h3>
  );

  return <StatisticBox value={games} caption={caption} />;
};

export default React.memo(PlayersStatBox);
