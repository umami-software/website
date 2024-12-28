import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCheckmark = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" {...props}>
    <path
      d="m63.984 37.219-1.406 1.406-18.687 18.688-6.594-5.782-1.5-1.312-2.625 3.031 1.5 1.313 8 7 1.406 1.218 1.313-1.312 20-20 1.437-1.407z"
      style={{
        textIndent: 0,
        textTransform: 'none',
        blockProgression: 'tb',
      }}
    />
  </svg>
);
export default SvgCheckmark;
