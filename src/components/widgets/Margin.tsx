import * as React from 'react';

type Props = {
  /** height of margin space to add */
  height?: number;
  /** additional height to set for desktop, optional */
  desktop?: number;
  /** additional height to set for mobile, optional */
  mobile?: number;
}

const Margin = ({ height = 16, desktop, mobile }: Props = {}) => (
  <>
    <div style={{ marginTop: height }} />
    {desktop !== undefined && <div style={{ marginTop: desktop }} className="desktop" />}
    {mobile !== undefined && <div style={{ marginTop: mobile }} className="mobile" />}
  </>
);

export default React.memo(Margin);
