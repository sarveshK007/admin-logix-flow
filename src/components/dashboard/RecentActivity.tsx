import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from "date-fns";

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      user: "john.doe@example.com",
      action: "login",
      status: "success",
      timestamp: new Date(Date.now() - 1000 * 60 * 5),
    },
    {
      id: 2,
      user: "jane.smith@example.com",
      action: "logout",
      status: "success",
      timestamp: new Date(Date.now() - 1000 * 60 * 15),
    },
    {
      id: 3,
      user: "bob.wilson@example.com",
      action: "login",
      status: "failed",
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
    },
    {
      id: 4,
      user: "alice.johnson@example.com",
      action: "login",
      status: "success",
      timestamp: new Date(Date.now() - 1000 * 60 * 45),
    },
    {
      id: 5,
      user: "charlie.brown@example.com",
      action: "logout",
      status: "success",
      timestamp: new Date(Date.now() - 1000 * 60 * 60),
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center justify-between rounded-lg border p-3 transition-colors hover:bg-muted/50"
            >
              <div className="flex-1">
                <p className="font-medium">{activity.user}</p>
                <p className="text-sm text-muted-foreground">
                  {formatDistanceToNow(activity.timestamp, { addSuffix: true })}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant={activity.status === "success" ? "default" : "destructive"}>
                  {activity.action}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
