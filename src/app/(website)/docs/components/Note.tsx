import Callout from '@/app/(website)/docs/components/Callout';

export function Note({ children }: { children: React.ReactNode }) {
  return <Callout variant="note">{children}</Callout>;
}
