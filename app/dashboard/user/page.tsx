"use client";

import UserDashboardContent from "@/components/Pages/Dashboard/User/UserDashboardContent";
import { useFormState, useFormStatus } from "react-dom";
import { getUserDashboardStatsAction } from "./_actions";

export default function UserDashboardPage() {
  const [state, action] = useFormState(getUserDashboardStatsAction, null);
  const { pending } = useFormStatus();

  return (
    <div>
      {pending ? (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      ) : (
        <UserDashboardContent stats={state?.data} error={state?.error} />
      )}
    </div>
  );
}
