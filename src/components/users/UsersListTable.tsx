import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search } from "lucide-react";

const UsersListTable = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const users = [
    { id: 1, email: "john.doe@example.com", name: "John Doe", status: "active", lastLogin: "2 hours ago", totalLogins: 245 },
    { id: 2, email: "jane.smith@example.com", name: "Jane Smith", status: "active", lastLogin: "5 hours ago", totalLogins: 189 },
    { id: 3, email: "bob.wilson@example.com", name: "Bob Wilson", status: "inactive", lastLogin: "2 days ago", totalLogins: 156 },
    { id: 4, email: "alice.johnson@example.com", name: "Alice Johnson", status: "active", lastLogin: "1 hour ago", totalLogins: 312 },
    { id: 5, email: "charlie.brown@example.com", name: "Charlie Brown", status: "active", lastLogin: "3 hours ago", totalLogins: 278 },
    { id: 6, email: "diana.prince@example.com", name: "Diana Prince", status: "inactive", lastLogin: "1 week ago", totalLogins: 98 },
    { id: 7, email: "evan.davis@example.com", name: "Evan Davis", status: "active", lastLogin: "30 minutes ago", totalLogins: 421 },
    { id: 8, email: "fiona.green@example.com", name: "Fiona Green", status: "active", lastLogin: "4 hours ago", totalLogins: 203 },
  ];

  const filteredUsers = users.filter(
    (user) =>
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>All Users</CardTitle>
          <div className="relative w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8"
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Login</TableHead>
              <TableHead className="text-right">Total Logins</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Badge variant={user.status === "active" ? "default" : "secondary"}>
                    {user.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">{user.lastLogin}</TableCell>
                <TableCell className="text-right font-medium">{user.totalLogins}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default UsersListTable;
