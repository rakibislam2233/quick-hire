import UserSavedJobsContent from "@/components/Pages/Dashboard/User/UserSavedJobsContent";
import { getSavedJobsAction } from "../_actions";

const UserSavedJobsPage = async () => {
  const savedJobs = await getSavedJobsAction();
  return <UserSavedJobsContent savedJobs={savedJobs?.data} />;
};

export default UserSavedJobsPage;
