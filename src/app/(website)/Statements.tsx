'use client';
import { Block, Code, Analytics } from 'src/components/svg';
import TextBlock from '@/components/TextBlock';

const statements = [
  {
    title: 'Easy to use',
    description: `
Powerful yet simple, Umami is easy to use and understand and doesn't require complicated setup or tag configurations.
    `,
    image: <Analytics />,
  },
  {
    title: 'UTMs and Custom Events',
    description: `
Umami automatically understands links with UTM parameters and lets you view and filter your website data based on UTMs. Additionally, you can track any event on your website, such as button clicks, form submissions, purchases, newsletter signups, etc.
    `,
    image: <Code />,
  },
  {
    title: 'No Cookie Banners',
    description: `
All data is anonymized with Umami, and no personal information is ever collected on your website's users. You can track your website's performance without needing opt-in cookie banners, providing your users with a better and more trusted experience. Umami is GDPR and CCPA compliant by default.
    `,
    image: <Block />,
  },
];

export default function Statements() {
  return (
    <section className="grid gap-[60px] px-5 max-sm:max-w-[100vw] max-sm:mx-auto">
      <div className="bg-base-1 rounded-xl pb-[30px]">
        <TextBlock align="center" className="w-[60%] mx-auto max-lg:max-w-[90%]">
          <h1>Umami makes analyzing your data effortless</h1>
        </TextBlock>
      </div>
      <div className="grid grid-cols-[repeat(3,minmax(250px,1fr))] gap-[60px] bg-white z-[1] max-lg:grid-cols-1 [&_h1]:flex [&_h1]:gap-5 [&_h1]:justify-center [&_h1]:items-center">
        {statements.map(({ title, description, image }) => {
          return (
            <div key={title}>
              <TextBlock size="sm" align="center">
                <h1>
                  <div className="inline-block items-center justify-center [&_svg]:w-20 [&_svg]:h-20 [&_svg]:[filter:drop-shadow(3px_5px_2px_rgb(0_0_0/0.2))] [&_svg:nth-child(2)]:fill-[#a8ccf7] [&_svg:nth-child(2)]:mt-[10px] [&_svg:nth-child(2)]:ml-[10px] [&_svg:nth-child(2)]:absolute [&_svg:nth-child(2)]:z-0">
                    {image}
                  </div>{' '}
                  {title}
                </h1>
                <p>{description}</p>
              </TextBlock>
            </div>
          );
        })}
      </div>
    </section>
  );
}
