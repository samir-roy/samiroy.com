import * as React from 'react';
import Glitchometer from '@samiroy/glitchometer';

type Props = {
  /** the value to display */
  value: string;
  /** the caption to display below value */
  caption?: JSX.Element | string;
  /** optional title to display above value */
  title?: JSX.Element | string;
};

const StatBox = ({ value, caption, title }: Props) => (
  <div className="boxed center">
    {!!title && <h4 className="m-zero m-b-md">{title}</h4>}
    <Glitchometer value={value} />
    {!!caption && <h4 className="m-zero m-t-sm">{caption}</h4>}
  </div>
);

export default React.memo(StatBox);
