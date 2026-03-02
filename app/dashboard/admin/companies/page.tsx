import AdminCompaniesContent from "@/components/Pages/Dashboard/Admin/AdminCompaniesContent";
import { getAllCompaniesForAdmin } from "@/services/company.service";

const AdminCompaniesPage = async () => {
  const companies = await getAllCompaniesForAdmin();
  return <AdminCompaniesContent companies={companies} />;
};
export default AdminCompaniesPage;
