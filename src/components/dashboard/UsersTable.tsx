import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const UsersTable = () => {
  const users = [
    {
      id: 1,
      email: "john.doe@example.com",
      status: "active",
      lastLogin: "2 hours ago",
    },
    {
      id: 2,
      email: "jane.smith@example.com",
      status: "active",
      lastLogin: "5 hours ago",
    },
    {
      id: 3,
      email: "bob.wilson@example.com",
      status: "inactive",
      lastLogin: "2 days ago",
    },
    {
      id: 4,
      email: "alice.johnson@example.com",
      status: "active",
      lastLogin: "1 hour ago",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Active Users</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Email</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Login</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.email}</TableCell>
                <TableCell>
                  <Badge variant={user.status === "active" ? "default" : "secondary"}>
                    {user.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">{user.lastLogin}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default UsersTable;
