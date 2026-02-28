import CompaniesPageContent from "@/components/Pages/Main/Companies/CompaniesPageContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Browse Companies | QuickHire",
  description:
    "Find the best companies to work for and see their open positions on QuickHire.",
};

export default function CompaniesPage() {
  return <CompaniesPageContent />;
}
