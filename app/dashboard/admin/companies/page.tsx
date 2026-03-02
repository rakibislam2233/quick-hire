import AdminCompaniesContent from "@/components/Pages/Dashboard/Admin/AdminCompaniesContent";
import { getAllCompaniesForAdmin } from "@/services/company.service";

const AdminCompaniesPage = async () => {
  const response = await getAllCompaniesForAdmin();
  const companies = response?.data || [];
  return <AdminCompaniesContent companies={companies} />;
};
export default AdminCompaniesPage;
