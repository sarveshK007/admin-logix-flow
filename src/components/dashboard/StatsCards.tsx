import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, UserCheck, UserX, Activity } from "lucide-react";

const StatsCards = () => {
  const stats = [
    {
      title: "Total Users",
      value: "1,234",
      icon: Users,
      trend: "+12% from last month",
      color: "text-primary",
    },
    {
      title: "Active Users",
      value: "892",
      icon: UserCheck,
      trend: "+8% from last month",
      color: "text-accent",
    },
    {
      title: "Inactive Users",
      value: "342",
      icon: UserX,
      trend: "-3% from last month",
      color: "text-muted-foreground",
    },
    {
      title: "Total Activities",
      value: "5,678",
      icon: Activity,
      trend: "+15% from last month",
      color: "text-primary",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <Icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.trend}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default StatsCards;
