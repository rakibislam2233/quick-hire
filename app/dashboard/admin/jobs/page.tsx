import AdminJobsContent from "@/components/Pages/Dashboard/Admin/AdminJobsContent";
import { getAllJobsAction } from "../_actions";

const AdminJobsPage = async () => {
  try {
    const result = await getAllJobsAction();
    const jobs = result.success ? result.data : [];
    return <AdminJobsContent jobs={jobs} />;
  } catch (error) {
    console.error("Failed to fetch jobs:", error);
    return <AdminJobsContent jobs={[]} />;
  }
};

export default AdminJobsPage;
