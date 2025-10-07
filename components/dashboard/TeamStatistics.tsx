'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { PieChart as PieChartIcon, Star, UsersRound } from 'lucide-react';
import { Pie, PieChart } from 'recharts';
import { Button } from '../ui/button';
import { StatisticCard, StatisticCardContent, StatisticCardFooter, StatisticCardHeader } from './StatisticCard';

import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { cn } from '@/lib/utils';
import { Statistic } from './type';

export default function TeamStatistics() {
  return (
    <div className="flex gap-2 w-full [&>*]:flex-1">
      {statistics.map((statistic) => (
        <StatisticCard
          key={statistic.key}
          className={cn('justify-start', statistic.cardClassName)}
        >
          <StatisticCardHeader>{statistic.header}</StatisticCardHeader>
          <StatisticCardContent>{statistic.body}</StatisticCardContent>
          <StatisticCardFooter>{statistic.footer}</StatisticCardFooter>
        </StatisticCard>
      ))}
    </div>
  );
}

const teamMembers = [
  {
    name: 'John Doe',
    image: 'https://github.com/shadcn.png',
  },
  {
    name: 'John Doe',
    image: 'https://github.com/shadcn.png',
  },
  {
    name: 'Tom Hanks',
    image: 'https://github.com/shadcn.png',
  },
  {
    name: 'Jane Doe',
    image: 'https://github.com/shadcn.png',
  },
  {
    name: 'Larry Page',
    image: 'https://github.com/shadcn.png',
  },
  {
    name: 'Sergey Brin',
    image: 'https://github.com/shadcn.png',
  },
];

const statistics: Statistic[] = [
  {
    key: 'total-teams',
    header: 'Total teams',
    body: (
      <div className="flex w-full justify-between items-center">
        <div className="flex gap-2">
          <UsersRound />
          <span className="text-5xl font-semibold">8</span>
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
    key: 'team-members',
    header: (
      <div className="flex gap-2 items-center justify-between">
        <span>Total teams</span>
        <Star className="text-yellow-500" />
      </div>
    ),
    body: (
      <div className="flex w-full justify-between items-center">
        <div className="*:data-[slot=avatar]:ring-background flex *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale flex-wrap gap-2">
          {teamMembers.map((member, index) => (
            <Avatar
              className="size-12 rounded-full overflow-hidden"
              key={index}
            >
              <AvatarImage
                src={member.image}
                alt={member.name}
              />
              <AvatarFallback className="text-sm size-12 rounded-full overflow-hidden">
                {member.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
          ))}
        </div>
      </div>
    ),
  },
  {
    key: 'employees-of-the-month',
    header: (
      <div className="flex gap-2 items-center justify-between">
        <span>Team distribution</span>
        <PieChartIcon />
      </div>
    ),
    body: (
      <div className="flex w-full justify-center items-center">
        <TeamDistributionChart />
      </div>
    ),
  },
];

const chartData = [
  { browser: 'chrome', visitors: 275, fill: 'var(--color-chrome)' },
  { browser: 'safari', visitors: 200, fill: 'var(--color-safari)' },
  { browser: 'firefox', visitors: 187, fill: 'var(--color-firefox)' },
  ,
];

const chartConfig = {
  visitors: {
    label: 'Visitors',
  },
  chrome: {
    label: 'Chrome',
    color: 'var(--chart-1)',
  },
  safari: {
    label: 'Safari',
    color: 'var(--chart-2)',
  },
} satisfies ChartConfig;

export function TeamDistributionChart() {
  return (
    <div className="h-[150px]">
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square h-full"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={chartData}
            dataKey="visitors"
            nameKey="browser"
          />
        </PieChart>
      </ChartContainer>
    </div>
  );
}
