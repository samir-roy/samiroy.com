import * as React from 'react';
import StatisticBox from '@widgets/StatBox';

const PoonjiStatBox = () => {
  const value = '35.81%';
  const caption = <>Poonji US Flagship fund gave returns of {value} in 2024</>;
  return <StatisticBox value={value} caption={caption} />;
};

export default React.memo(PoonjiStatBox);
