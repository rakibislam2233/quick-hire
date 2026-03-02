import AdminDashboardContent from "@/components/Pages/Dashboard/Admin/AdminDashboardContent";
import { getAdminDashboardStatsAction } from "./_actions";

const AdminDashboardPage = async () => {
  const state = await getAdminDashboardStatsAction();
  return <AdminDashboardContent stats={state?.data} />;
};

export default AdminDashboardPage;
