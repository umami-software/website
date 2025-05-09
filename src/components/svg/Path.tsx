import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPath = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 64 64" {...props}>
    <path d="m56.4 47.6-6-6c-.8-.8-2-.8-2.8 0s-.8 2 0 2.8l2.6 2.6H18.5c-3.6 0-6.5-2.9-6.5-6.5s2.9-6.5 6.5-6.5h27C51.3 34 56 29.3 56 23.5S51.3 13 45.5 13H22.7c-.9-3.4-4-6-7.7-6-4.4 0-8 3.6-8 8s3.6 8 8 8c3.7 0 6.8-2.6 7.7-6h22.8c3.6 0 6.5 2.9 6.5 6.5S49.1 30 45.5 30h-27C12.7 30 8 34.7 8 40.5S12.7 51 18.5 51h31.7l-2.6 2.6c-.8.8-.8 2 0 2.8.4.4.9.6 1.4.6s1-.2 1.4-.6l6-6c.8-.8.8-2 0-2.8M15 19c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4" />
  </svg>
);
export default SvgPath;
