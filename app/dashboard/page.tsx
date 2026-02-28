import { redirect } from "next/navigation";

export default function DashboardPage() {
  // In a real app, logic here would redirect based on the user's role from auth session
  // For this demonstration, we'll default to the company dashboard
  redirect("/dashboard/company");
}
