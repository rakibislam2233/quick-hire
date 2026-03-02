import UserApplicationsContent from "@/components/Pages/Dashboard/User/UserApplicationsContent";
import { getMyApplicationsAction } from "../_actions";

const UserApplicationsPage = async () => {
  const applications = await getMyApplicationsAction();
  return <UserApplicationsContent applications={applications?.data} />;
};
export default UserApplicationsPage;
