import JobListingsContent from "@/components/Pages/Admin/JobListingsContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Job Listings | Admin Dashboard",
};

export default function JobListingsPage() {
  return <JobListingsContent />;
}
