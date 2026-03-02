"use client";

import CompanyDashboardContent from "@/components/Pages/Dashboard/Company/CompanyDashboardContent";
import { useFormState, useFormStatus } from "react-dom";
import { getCompanyDashboardStatsAction } from "./_actions";

export default function CompanyDashboardPage() {
  const [state, action] = useFormState(getCompanyDashboardStatsAction, null);
  const { pending } = useFormStatus();

  return (
    <div>
      {pending ? (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      ) : (
        <CompanyDashboardContent stats={state?.data} error={state?.error} />
      )}
    </div>
  );
}
