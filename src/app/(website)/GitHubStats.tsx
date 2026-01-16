'use client';
import { GITHUB_STATS } from '@/lib/constants';

export default function GitHubStats() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5 p-10 bg-base-1 rounded-[10px] max-lg:grid-cols-[repeat(auto-fit,minmax(260px,1fr))] max-sm:grid-cols-1">
      {GITHUB_STATS.map(({ label, value }) => (
        <div key={label} className="text-center">
          <div className="text-[64px] font-black [text-shadow:5px_5px_1px_#a8ccf7]">{value}+</div>
          <div className="text-font-muted text-base">{label}</div>
        </div>
      ))}
    </div>
  );
}
