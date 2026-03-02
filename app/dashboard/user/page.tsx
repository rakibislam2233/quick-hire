import UserDashboardContent from "@/components/Pages/Dashboard/User/UserDashboardContent";
import { getUserDashboardStatsAction } from "./_actions";

export default async function UserDashboardPage() {
  const state = await getUserDashboardStatsAction();
  return <UserDashboardContent stats={state?.data} />;
}
