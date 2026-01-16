'use client';
import { Icon, Icons, Text } from '@umami/react-zen';
import TextBlock from '@/components/TextBlock';
import LinkButton from '@/components/LinkButton';

const items = [
  {
    title: 'Creators',
    description: 'Measure everything you need to help improve your website.',
    image: '/images/creators.jpg',
    url: '/product/creators',
  },
  {
    title: 'Marketers',
    description: 'Easily measure the effectiveness of your campaigns.',
    image: '/images/marketers.jpg',
    url: '/product/marketers',
  },
  {
    title: 'Agencies',
    description: 'Bring value to your clients by delivering insights into their data',
    image: '/images/agencies.jpg',
    url: '/product/agencies',
  },
];

export default function Personas() {
  return (
    <section className="grid grid-cols-1 justify-center bg-base-1 overflow-hidden px-5 pb-[60px] pt-0 rounded-[20px] max-sm:max-w-[100vw] max-sm:m-[10px]">
      <TextBlock align="center" size="lg">
        <h1>Built for you</h1>
      </TextBlock>
      <div className="grid grid-cols-[repeat(3,minmax(280px,1fr))] text-center justify-center items-center max-w-[900px] mx-auto gap-[60px] max-[1200px]:grid-cols-1">
        {items.map(({ title, description, image, url }) => {
          return (
            <div key={title}>
              <div className="w-[300px] h-[300px] mx-auto rounded-full overflow-hidden max-sm:w-[250px] max-sm:h-[250px] [&_img]:max-w-full [&_img]:h-auto">
                <img src={image} alt="" />
              </div>
              <TextBlock size="sm" align="center">
                <h1>{title}</h1>
                <p>{description}</p>
              </TextBlock>
              <div className="font-semibold mt-[60px] flex justify-center">
                <LinkButton href={url} variant="secondary">
                  <Text>Learn more </Text>
                  <Icon>
                    <Icons.Arrow />
                  </Icon>
                </LinkButton>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
