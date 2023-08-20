import * as React from 'react';
import StatisticBox from '@widgets/StatBox';

const DEFAULT_CONTRIBS = '1,942'; // default to last updated
const DEFAULT_PERIOD = 'calendar year 2022';

const ContributionsStatBox = () => {
  const [contribs, setContribs] = React.useState(DEFAULT_CONTRIBS);
  const [period, setPeriod] = React.useState(DEFAULT_PERIOD);

  React.useEffect(() => {
    (async () => {
      try {
        const response = await fetch('/api/contribs');
        const json = await response.json();
        const current = Number.parseInt(json.contribs.replace(/,/g, ''), 10);
        const fallback = Number.parseInt(DEFAULT_CONTRIBS.replace(/,/g, ''), 10);

        if (current >= fallback) {
          setContribs(json.contribs);
          setPeriod('the past year');
        }
      } catch (e) {
        console.error(e); // eslint-disable-line no-console
        setContribs(DEFAULT_CONTRIBS);
      }
    })();
  }, []);

  const caption = (
    <h3 className="font-heavy m-caption">
      contributions on&nbsp;<a href="https://github.com/samir-roy">GitHub</a>,
      {' '}<span className="together">in {period}</span>
    </h3>
  );

  return <StatisticBox value={contribs} caption={caption} />;
};

export default React.memo(ContributionsStatBox);
