'use client';
import { Text, Column } from '@umami/react-zen';

const items = [
  { name: 'amd', title: 'AMD' },
  { name: 'accenture', title: 'Accenture' },
  { name: 'gm', title: 'GM' },
  { name: 'espn', title: 'ESPN' },
  { name: 'siemens', title: 'Siemens' },
  { name: 'intel', title: 'Intel' },
  { name: 'hulu', title: 'Hulu' },
  { name: 'vsp', title: 'VSP' },
  //{ name: 'huawei', title: 'Huawei' },
];

export default function Companies() {
  return (
    <Column gap="3" width="100%">
      <Text color="muted" align="center">
        Trusted by thousands of companies
      </Text>
      <div className="relative overflow-hidden grayscale opacity-50 h-[100px] w-full [mask-image:linear-gradient(to_right,rgba(255,255,255,0),white_20%,white_80%,rgba(255,255,255,0))] [&_img]:max-w-[100px] [&_img]:max-h-[100px] [&_img]:h-auto [&_img]:m-auto">
        <div className="absolute flex items-center gap-[100px] animate-[scroll_20s_linear_infinite]">
          {items.map(({ name, title }) => {
            return <img key={name} src={`/images/logo-${name}.png`} alt={title} />;
          })}
        </div>
        <div
          className="absolute flex items-center gap-[100px] animate-[scroll_20s_linear_infinite]"
          style={{ left: 1600 }}
        >
          {items.map(({ name, title }) => {
            return <img key={name} src={`/images/logo-${name}.png`} alt={title} />;
          })}
        </div>
      </div>
    </Column>
  );
}
