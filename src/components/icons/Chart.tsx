import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={512}
    height={512}
    viewBox="0 0 8.467 8.467"
    {...props}
  >
    <path d="M.786.528a.265.265 0 0 0-.26.267v6.879a.265.265 0 0 0 .263.266H7.67a.265.265 0 1 0 0-.53H1.055V.795a.265.265 0 0 0-.27-.267zm6.878 1.72a.265.265 0 0 0-.181.08L4.768 5.043 3.63 3.793a.265.265 0 0 0-.373-.017L1.67 5.23a.265.265 0 1 0 .358.39L3.42 4.346l1.142 1.258a.265.265 0 0 0 .383.01l2.91-2.912a.265.265 0 0 0-.192-.453z" />
  </svg>
);
export default SvgChart;
