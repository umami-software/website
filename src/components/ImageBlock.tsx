import classNames from 'classnames';

export default function ImageBlock({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={classNames(
        'flex items-center justify-center relative rounded-[20px] bg-base-1 overflow-hidden',
        '[&_img]:absolute [&_img]:max-w-[90%] [&_img]:shadow-[var(--box-shadow-3)] [&_img]:rounded-[10px]',
        className,
      )}
    >
      {children}
    </div>
  );
}
