import CompanyHeader from "@/components/Pages/Dashboard/Company/CompanyHeader";
import CompanySidebar from "@/components/Pages/Dashboard/Company/CompanySidebar";

export default function CompanyDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-white">
      <CompanySidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <CompanyHeader />
        <main className="flex-1 p-8 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
