import JobForm from "@/components/Pages/Dashboard/Company/JobForm";
import { getAllCategories } from "@/services/category.service";

const CompanyAddJobPage = async () => {
  const categories = await getAllCategories();
  return <JobForm categories={categories?.data || []} />;
};
export default CompanyAddJobPage;
