import JobDetailPageContent from "@/components/Pages/Main/Jobs/JobDetailPageContent";
import { Metadata } from "next";

interface JobDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: JobDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `Job Details | QuickHire`,
    description: `View details and apply for job ${id} on QuickHire.`,
  };
}

export default async function JobDetailPage({ params }: JobDetailPageProps) {
  const { id } = await params;
  return <JobDetailPageContent id={id} />;
}
