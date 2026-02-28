import JobsPageContent from "@/components/Pages/Main/Jobs/JobsPageContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find Jobs | QuickHire",
  description: "Browse and filter thousands of job opportunities on QuickHire.",
};

export default function JobsPage() {
  return <JobsPageContent />;
}
