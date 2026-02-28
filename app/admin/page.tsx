import DashboardContent from "@/components/Pages/Admin/DashboardContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard | QuickHire",
};

export default function AdminPage() {
  return <DashboardContent />;
}
