import ProfileContent from "@/components/Pages/Dashboard/Company/ProfileContent";
import { getCompanyProfileAction } from "../_actions";
const CompanyProfilePage = async () => {
  const profile = await getCompanyProfileAction();
  return <ProfileContent profile={profile?.data} />;
};
export default CompanyProfilePage;
