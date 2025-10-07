import { EmployeeLocationTrendChart } from '@/components/dashboard/EmployeeLocationTrendChart';
import Statistics from '@/components/dashboard/EmployeeStatistics';
import SupportTicketsResolvedChart from '@/components/dashboard/SupportTicketsResolvedChart';
import TeamStatistics from '@/components/dashboard/TeamStatistics';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const TabLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col gap-4">{children}</div>;
};

const tabs = [
  {
    title: 'Employees stats',
    value: 'employees-stats',
    content: (
      <TabLayout>
        <Statistics />
        <EmployeeLocationTrendChart />
      </TabLayout>
    ),
  },
  {
    title: 'Teams stats',
    value: 'teams-stats',
    content: (
      <TabLayout>
        <TeamStatistics />
        <SupportTicketsResolvedChart />
      </TabLayout>
    ),
  },
];

function Dashboard() {
  return (
    <Tabs defaultValue="employees-stats">
      <TabsList>
        {tabs.map((tab) => (
          <TabsTrigger
            className="cursor-pointer text-base"
            key={tab.value}
            value={tab.value}
          >
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>
      <div className="mt-4">
        {tabs.map((tab) => (
          <TabsContent
            key={tab.value}
            value={tab.value}
          >
            {tab.content}
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
}

export default Dashboard;
