'use client';
import { CLOUD_URL } from '@/lib/constants';
import useQueryString from '@/components/hooks/useQueryString';

export default function CloudBanner() {
  const query = useQueryString({ ref: 'umami-docs' });

  return (
    <div
      className="text-[var(--light100)] bg-cover bg-no-repeat bg-center py-5 px-[30px] rounded-lg [&_h1]:text-2xl [&_h1]:mb-[30px] [&_h1]:mt-0 [&_p]:text-base [&_a]:text-primary [&_a:active]:text-primary [&_a:visited]:text-primary [&_a:hover]:text-[var(--primary500)]"
      style={{ backgroundImage: "url('https://static.umami.dev/website/images/bg-cloud-banner.jpg')" }}
    >
      <h1>Umami Cloud</h1>
      <p>
        Get up and running right away by using the <strong>Umami Cloud</strong> platform.
      </p>
      <p>
        <span>Sign up for free at </span>
        <a href={`${CLOUD_URL}/signup${query}`}>
          <strong>cloud.umami.is</strong>
        </a>
        .
      </p>
    </div>
  );
}
