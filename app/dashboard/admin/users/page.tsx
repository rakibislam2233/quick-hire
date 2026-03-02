import AdminUsersContent from "@/components/Pages/Dashboard/Admin/AdminUsersContent";
import { getAllUsers } from "@/services/user.service";

const AdminUsersPage = async () => {
  const users = await getAllUsers();
  return <AdminUsersContent users={users} />;
};

export default AdminUsersPage;
