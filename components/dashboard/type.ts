export type Statistic = {
  key: string;
  header: string | React.ReactNode;
  body: React.ReactNode;
  footer?: React.ReactNode;
  cardClassName?: string;
};
