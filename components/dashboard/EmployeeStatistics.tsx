import { BadgeCheck, PartyPopper, UserCheck, UserIcon } from 'lucide-react';
import { StatisticCard, StatisticCardContent, StatisticCardFooter, StatisticCardHeader } from './StatisticCard';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { Statistic } from './type';

export default function EmployeeStatistics() {
  return (
    <div className="flex gap-2 w-full [&>*]:flex-1">
      {statistics.map((statistic) => (
        <StatisticCard
          key={statistic.key}
          className={statistic.cardClassName}
        >
          <StatisticCardHeader>{statistic.header}</StatisticCardHeader>
          <StatisticCardContent>{statistic.body}</StatisticCardContent>
          <StatisticCardFooter>{statistic.footer}</StatisticCardFooter>
        </StatisticCard>
      ))}
    </div>
  );
}

const statistics: Statistic[] = [
  {
    key: 'total-employees',
    header: 'Total employees',
    body: (
      <div className="flex w-full justify-between items-center">
        <div className="flex gap-2">
          <UserIcon />
          <span className="text-5xl font-semibold">100</span>
        </div>
        <Button
          size="sm"
          className="uppercase text-xs font-semibold cursor-pointer"
        >
          View all
        </Button>
      </div>
    ),
  },

  {
    key: 'employees-present',
    header: 'Employees present',
    body: (
      <div className="flex w-full justify-between items-center">
        <div className="flex gap-2">
          <UserCheck />
          <span className="text-5xl font-semibold">80</span>
        </div>
      </div>
    ),
    footer: (
      <div className="flex gap-2 items-center text-green-500">
        <BadgeCheck />
        <span className="text-sm font-medium">80% of employees are present</span>
      </div>
    ),
  },
  {
    key: 'employees-of-the-month',
    header: 'Employees of the month',
    cardClassName: 'border-primary',
    body: (
      <div className="flex w-full justify-between items-center">
        <div className="flex gap-2 items-center">
          <Avatar className="size-10 rounded-full overflow-hidden">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="text-xl">John Doe</span>
        </div>
      </div>
    ),
    footer: (
      <div className="flex gap-2 items-center">
        <PartyPopper className="text-primary" />
        <span className="text-sm font-medium">Congratulations, John Doe!</span>
      </div>
    ),
  },
];
