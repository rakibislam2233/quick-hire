import AdminDashboardContent from "@/components/Pages/Dashboard/Admin/AdminDashboardContent";
import { getAdminDashboardStatsAction } from "./_actions";

const AdminDashboardPage = async () => {
  const response = await getAdminDashboardStatsAction();
  return <AdminDashboardContent stats={response?.data?.stats} />;
};

export default AdminDashboardPage;
