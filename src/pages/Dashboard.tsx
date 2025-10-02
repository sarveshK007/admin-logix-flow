import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import StatsCards from "@/components/dashboard/StatsCards";
import RecentActivity from "@/components/dashboard/RecentActivity";
import UsersTable from "@/components/dashboard/UsersTable";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Overview of user activities and system status
          </p>
        </div>
        
        <StatsCards />
        
        <div className="grid gap-8 lg:grid-cols-2">
          <RecentActivity />
          <UsersTable />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
