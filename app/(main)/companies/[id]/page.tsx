import CompanyDetailPageContent from "@/components/Pages/Main/Companies/CompanyDetailPageContent";
import { Metadata } from "next";

interface CompanyDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: CompanyDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `Company Details | QuickHire`,
    description: `View details and open positions for company ${id} on QuickHire.`,
  };
}

export default async function CompanyDetailPage({
  params,
}: CompanyDetailPageProps) {
  const { id } = await params;
  return <CompanyDetailPageContent id={id} />;
}
