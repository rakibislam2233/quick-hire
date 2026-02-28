import ApplicantsContent from "@/components/Pages/Admin/ApplicantsContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Applicants | Admin Dashboard",
};

export default function ApplicantsPage() {
  return <ApplicantsContent />;
}
