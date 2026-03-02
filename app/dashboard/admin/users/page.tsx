"use client";

import AdminUsersContent from "@/components/Pages/Dashboard/Admin/AdminUsersContent";
import { useFormState, useFormStatus } from "react-dom";
import { getAllUsersAction } from "../_actions";

export default function AdminUsersPage() {
  const [state, action] = useFormState(getAllUsersAction, null);
  const { pending } = useFormStatus();

  return (
    <form action={action}>
      <input type="hidden" name="search" value="" />
      <input type="hidden" name="page" value="1" />
      <input type="hidden" name="limit" value="10" />
      {pending ? (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      ) : (
        <AdminUsersContent users={state?.data?.users} error={state?.error} />
      )}
    </form>
  );
}
