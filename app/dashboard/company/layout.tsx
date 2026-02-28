"use client";

import CompanyHeader from "@/components/Pages/Dashboard/Company/CompanyHeader";
import CompanySidebar from "@/components/Pages/Dashboard/Company/CompanySidebar";
import { useState } from "react";

export default function CompanyDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-white">
      <CompanySidebar
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      <div className="flex-1 flex flex-col min-w-0">
        <CompanyHeader onMenuClick={() => setIsMobileMenuOpen(true)} />
        <main className="flex-1 p-4 md:p-8 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
