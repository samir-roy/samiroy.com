import * as React from 'react';

type Props = {
  /** height of margin space to add */
  height?: number;
  /** additional height to set for desktop, optional */
  desktop?: number;
  /** additional height to set for mobile, optional */
  mobile?: number;
  /** name for anchor id to allow jumping to section */
  name?: string;
};

const Margin = ({ height = 16, desktop, mobile, name }: Props = {}) => (
  <>
    <div id={name} style={{ marginBottom: height }} />
    {desktop !== undefined && <div style={{ marginTop: desktop }} className="desktop" />}
    {mobile !== undefined && <div style={{ marginTop: mobile }} className="mobile" />}
  </>
);

export default React.memo(Margin);
