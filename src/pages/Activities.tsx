import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import ActivityLogsTable from "@/components/activities/ActivityLogsTable";

const Activities = () => {
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
          <h1 className="text-3xl font-bold tracking-tight">Login Activities</h1>
          <p className="text-muted-foreground">
            Track and monitor all user login activities
          </p>
        </div>
        
        <ActivityLogsTable />
      </div>
    </DashboardLayout>
  );
};

export default Activities;
