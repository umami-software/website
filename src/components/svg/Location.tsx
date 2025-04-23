import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLocation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 682.667 682.667"
    {...props}
  >
    <defs>
      <clipPath id="location_svg__a" clipPathUnits="userSpaceOnUse">
        <path d="M0 512h512V0H0Z" />
      </clipPath>
    </defs>
    <g clipPath="url(#location_svg__a)" transform="matrix(1.33333 0 0 -1.33333 0 682.667)">
      <path
        d="M0 0c-60 90-165 212-165 317 0 90.981 74.019 165 165 165s165-74.019 165-165C165 212 60 90 0 0"
        style={{
          fill: 'none',
          stroke: '#000',
          strokeWidth: 30,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeMiterlimit: 10,
          strokeDasharray: 'none',
          strokeOpacity: 1,
        }}
        transform="translate(256 15)"
      />
      <path
        d="M0 0c-41.353 0-75 33.647-75 75s33.647 75 75 75 75-33.647 75-75S41.353 0 0 0"
        style={{
          fill: 'none',
          stroke: '#000',
          strokeWidth: 30,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeMiterlimit: 10,
          strokeDasharray: 'none',
          strokeOpacity: 1,
        }}
        transform="translate(256 257)"
      />
    </g>
  </svg>
);
export default SvgLocation;
