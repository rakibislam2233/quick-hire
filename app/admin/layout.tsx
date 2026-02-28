import AdminHeader from "@/components/Pages/Admin/AdminHeader";
import Sidebar from "@/components/Pages/Admin/Sidebar";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Admin Dashboard | QuickHire",
};

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <AdminHeader />
        <main className="flex-1 overflow-y-auto bg-white p-8">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
