"use client";

import AdminDashboardContent from "@/components/Pages/Dashboard/Admin/AdminDashboardContent";
import { useFormState, useFormStatus } from "react-dom";
import { getAdminDashboardStatsAction } from "./_actions";

export default function AdminDashboardPage() {
  const [state, action] = useFormState(getAdminDashboardStatsAction, null);
  const { pending } = useFormStatus();

  return (
    <div>
      {pending ? (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      ) : (
        <AdminDashboardContent stats={state?.data} error={state?.error} />
      )}
    </div>
  );
}
