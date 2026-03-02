import UserProfileContent from "@/components/Pages/Dashboard/User/UserProfileContent";
import { getMyProfileAction } from "../_actions";

const UserProfilePage = async () => {
  const profile = await getMyProfileAction();
  return <UserProfileContent profile={profile?.data} />;
};

export default UserProfilePage;
