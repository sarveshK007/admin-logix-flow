import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter } from "lucide-react";
import { format } from "date-fns";

const ActivityLogsTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const activities = [
    { id: 1, userId: 1, email: "john.doe@example.com", action: "login", status: "success", timestamp: new Date(Date.now() - 1000 * 60 * 5), ip: "192.168.1.1" },
    { id: 2, userId: 2, email: "jane.smith@example.com", action: "logout", status: "success", timestamp: new Date(Date.now() - 1000 * 60 * 15), ip: "192.168.1.2" },
    { id: 3, userId: 3, email: "bob.wilson@example.com", action: "login", status: "failed", timestamp: new Date(Date.now() - 1000 * 60 * 30), ip: "192.168.1.3" },
    { id: 4, userId: 4, email: "alice.johnson@example.com", action: "login", status: "success", timestamp: new Date(Date.now() - 1000 * 60 * 45), ip: "192.168.1.4" },
    { id: 5, userId: 5, email: "charlie.brown@example.com", action: "logout", status: "success", timestamp: new Date(Date.now() - 1000 * 60 * 60), ip: "192.168.1.5" },
    { id: 6, userId: 6, email: "diana.prince@example.com", action: "login", status: "failed", timestamp: new Date(Date.now() - 1000 * 60 * 90), ip: "192.168.1.6" },
    { id: 7, userId: 7, email: "evan.davis@example.com", action: "login", status: "success", timestamp: new Date(Date.now() - 1000 * 60 * 120), ip: "192.168.1.7" },
    { id: 8, userId: 8, email: "fiona.green@example.com", action: "logout", status: "success", timestamp: new Date(Date.now() - 1000 * 60 * 150), ip: "192.168.1.8" },
    { id: 9, userId: 1, email: "john.doe@example.com", action: "login", status: "failed", timestamp: new Date(Date.now() - 1000 * 60 * 180), ip: "192.168.1.1" },
    { id: 10, userId: 2, email: "jane.smith@example.com", action: "login", status: "success", timestamp: new Date(Date.now() - 1000 * 60 * 210), ip: "192.168.1.2" },
  ];

  const filteredActivities = activities.filter((activity) => {
    const matchesSearch = activity.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || activity.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <CardTitle>Login Activity Logs</CardTitle>
          <div className="flex gap-2">
            <div className="relative w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-32">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="success">Success</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Email</TableHead>
              <TableHead>Action</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>IP Address</TableHead>
              <TableHead>Timestamp</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredActivities.map((activity) => (
              <TableRow key={activity.id}>
                <TableCell className="font-medium">{activity.email}</TableCell>
                <TableCell className="capitalize">{activity.action}</TableCell>
                <TableCell>
                  <Badge variant={activity.status === "success" ? "default" : "destructive"}>
                    {activity.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">{activity.ip}</TableCell>
                <TableCell className="text-muted-foreground">
                  {format(activity.timestamp, "MMM dd, yyyy HH:mm:ss")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default ActivityLogsTable;
