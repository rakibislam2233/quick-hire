import UserHeader from "@/components/Pages/Dashboard/User/UserHeader";
import UserSidebar from "@/components/Pages/Dashboard/User/UserSidebar";

export default function UserDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-white">
      <UserSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <UserHeader />
        <main className="flex-1 p-8 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
