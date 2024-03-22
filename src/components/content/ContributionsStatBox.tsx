import * as React from 'react';
import StatisticBox from '@widgets/StatBox';

const DEFAULT_CONTRIBS = '9,456'; // default to last updated

const ContributionsStatBox = () => {
  const [contribs, setContribs] = React.useState(DEFAULT_CONTRIBS);

  React.useEffect(() => {
    (async () => {
      try {
        const response = await fetch('/api/contribs');
        const json = await response.json();
        setContribs(json.contribs);
      } catch (e) {
        // log.error(e);
        setContribs(DEFAULT_CONTRIBS);
      }
    })();
  }, []);

  const caption = (
    <>
      contributions on&nbsp;<a href="https://github.com/samir-roy">GitHub</a> and counting
    </>
  );

  return <StatisticBox value={contribs} caption={caption} />;
};

export default React.memo(ContributionsStatBox);
