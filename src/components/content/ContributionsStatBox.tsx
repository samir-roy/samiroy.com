import * as React from 'react';
import StatisticBox from '@widgets/StatBox';

const DEFAULT_CONTRIBS = '1,138'; // default to last updated

const ContributionsStatBox = () => {
  const [contribs, setContribs] = React.useState(DEFAULT_CONTRIBS);

  React.useEffect(() => {
    (async () => {
      try {
        const response = await fetch('/api/contribs');
        const json = await response.json();
        setContribs(`${json.contribs}`);
      } catch (e) {
        console.error(e); // eslint-disable-line no-console
        setContribs(DEFAULT_CONTRIBS);
      }
    })();
  }, []);

  const caption = (
    <h3 style={{ fontWeight: 600, marginBottom: 0, marginTop: 8 }}>
      contributions on&nbsp;<a href="https://github.com/samir-roy">GitHub</a>,
      {' '}<span className="together">in the past year.</span>
    </h3>
  );

  return <StatisticBox value={contribs} caption={caption} />;
};

export default React.memo(ContributionsStatBox);
