import { cn } from '@/lib/utils';

export const StatisticCard = ({
  children,
  className,
  ...props
}: { children: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn('flex flex-col gap-4 border border-gray-200 rounded-md p-4 justify-between', className)}
      {...props}
    >
      {children}
    </div>
  );
};

export const StatisticCardHeader = ({
  children,
  className,
  ...props
}: { children: React.ReactNode } & React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h3
      className={cn('text-base font-semibold w-full', className)}
      {...props}
    >
      {children}
    </h3>
  );
};

export const StatisticCardContent = ({
  children,
  className,
  ...props
}: { children: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn('flex flex-col gap-4', className)}
      {...props}
    >
      {children}
    </div>
  );
};

export const StatisticCardFooter = ({
  children,
  className,
  ...props
}: { children: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>) => {
  if (!children) return <div className="h-6" />;
  return (
    <div
      className={cn('flex flex-col gap-4', className)}
      {...props}
    >
      {children}
    </div>
  );
};
