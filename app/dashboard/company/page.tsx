import CompanyDashboardContent from "@/components/Pages/Dashboard/Company/CompanyDashboardContent";
import { getCompanyDashboardStatsAction } from "./_actions";

const CompanyDashboardPage = async () => {
  const responseData = await getCompanyDashboardStatsAction();
  const dashboardData = responseData?.data;
  return <CompanyDashboardContent stats={dashboardData?.stats} />;
};
export default CompanyDashboardPage;
