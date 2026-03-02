import CompanyDashboardContent from "@/components/Pages/Dashboard/Company/CompanyDashboardContent";
import { getCompanyDashboardStatsAction } from "./_actions";

const CompanyDashboardPage = async () => {
  const state = await getCompanyDashboardStatsAction();
  console.log("State", state);
  return <CompanyDashboardContent stats={state?.data} />;
};
export default CompanyDashboardPage;
