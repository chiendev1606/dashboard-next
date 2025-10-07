'use client';

import { Laptop } from 'lucide-react';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

export const description = 'A stacked bar chart with a legend';

const chartData = [
  { month: 'January', wfh: 186, onsite: 80 },
  { month: 'February', wfh: 305, onsite: 200 },
  { month: 'March', wfh: 237, onsite: 120 },
  { month: 'April', wfh: 73, onsite: 190 },
  { month: 'May', wfh: 209, onsite: 130 },
  { month: 'June', wfh: 214, onsite: 140 },
];

const chartConfig = {
  wfh: {
    label: 'Work from home',
    color: 'var(--color-primary)',
  },
  onsite: {
    label: 'Work from office',
    color: 'var(--muted-foreground)',
  },
} satisfies ChartConfig;

export function EmployeeLocationTrendChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex gap-2 items-center">
          <Laptop />
          <div> Employee Location Trend</div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="wfh"
              stackId="a"
              fill="var(--color-wfh)"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="onsite"
              stackId="a"
              fill="var(--color-onsite)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
