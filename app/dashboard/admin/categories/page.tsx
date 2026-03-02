
import CategoriesContent from "@/components/Pages/Dashboard/Admin/CategoriesContent";
import { getAllCategoriesAction } from "../_actions";

const AdminCategoriesPage = async () => {
  const categories = await getAllCategoriesAction();
  return <CategoriesContent categories={categories?.data} />;
};

export default AdminCategoriesPage;
