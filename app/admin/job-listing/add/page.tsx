import JobForm from "@/components/Pages/Admin/Jobs/JobForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Post a Job | Admin Dashboard",
};

export default function AddJobPage() {
  return (
    <div className="bg-white p-8">
      <JobForm />
    </div>
  );
}
