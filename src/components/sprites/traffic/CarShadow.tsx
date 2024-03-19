import * as React from 'react';

const CarShadow = () => (
  <svg
    width="100%"
    height="100%"
    preserveAspectRatio="xMinYMin"
    viewBox="0 0 512 384"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M94.8578 90.4621L9.67065 206.951L41.8443 217.018L111.596 100.537L94.8578 90.4621Z"
      fill="var(--text-color)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M162.142 116.625L176.834 126.71L112.47 252.528L89.0413 237.029L162.142 116.625Z"
      fill="var(--text-color)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M313.312 166.865L331.139 176.16L268.086 323.134L252.547 303.343L313.312 166.865ZM398.253 184.819L414.342 196.094L365.465 327.072L338.043 317.012L398.253 184.819ZM410.654 351.823L427.012 356.546L496.413 239.081L480.507 218.997L410.654 351.823Z"
      fill="var(--text-color)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M142.029 278.125L107.707 308.045L284.791 373.769L357.11 292.995L433.877 267.798L494.371 173.035L468.921 132.035L498.44 90.921L343.814 41.2033L142.029 278.125Z"
      fill="black"
      fillOpacity="0.22"
    />
  </svg>
);

export default React.memo(CarShadow);
