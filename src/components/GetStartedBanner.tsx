'use client';
import { Button } from '@umami/react-zen';
import { CLOUD_URL } from '@/lib/constants';
import useQueryString from '@/components/hooks/useQueryString';

export default function GetStartedBanner() {
  const query = useQueryString({ ref: 'umami-get-started-banner' });

  return (
    <div className="flex flex-row justify-center items-center gap-10 py-[60px] px-10 rounded-xl flex-wrap z-[1] relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:opacity-60 before:-z-[1] before:bg-[length:100%_400px] before:bg-no-repeat before:bg-[center_top_10%] before:bg-[url('https://static.umami.dev/website/images/bg-get-started-banner.jpg')] max-sm:max-w-[100vw] max-sm:m-[10px]">
      <div className="text-[max(32px,min(5vw,48px))] font-extrabold tracking-[-0.05em] leading-none">
        Are you ready for better analytics?
      </div>
      <div className="flex justify-center">
        <Button variant="primary" size="lg" asChild>
          <a href={`${CLOUD_URL}/signup${query}`} data-umami-event="get-started-banner-button">
            Try 14-day free trial
          </a>
        </Button>
      </div>
    </div>
  );
}
