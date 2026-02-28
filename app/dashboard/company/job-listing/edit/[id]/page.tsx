import JobForm from "@/components/Pages/Dashboard/Company/Jobs/JobForm";
import { getJobById } from "@/services/job.service";
import { JobFormData } from "@/validation/job.validation";
import { notFound } from "next/navigation";

interface EditJobPageProps {
  params: Promise<{ id: string }>;
}

export default async function CompanyEditJobPage({ params }: EditJobPageProps) {
  const { id } = await params;
  const job = await getJobById(id);

  if (!job) {
    notFound();
  }

  const initialData: Partial<JobFormData> = {
    title: job.title,
    category: job.category,
    type: job.type as JobFormData["type"],
    salary: job.salary,
    location: job.location,
    description: job.description,
  };

  return (
    <div className="bg-white p-8">
      <JobForm initialData={initialData} isEdit={true} id={id} />
    </div>
  );
}
