import * as React from 'react';

type Props = {
  /** height of margin space to add */
  height?: number;
  /** different height to set for desktop, optional */
  desktop?: number;
}

const Margin = ({ height = 16, desktop }: Props = {}) => (
  <>
    <div style={{ marginTop: height }} />
    {desktop !== undefined && <div style={{ marginTop: desktop }} className="desktop" />}
  </>
);

export default React.memo(Margin);
