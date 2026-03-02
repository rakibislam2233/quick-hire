import JobForm from "@/components/Pages/Dashboard/Company/JobForm";
import { getJobById } from "@/services/job.service";
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

  const initialData = {
    title: job.title,
    categoryId: job.categoryId,
    type: job.type,
    salaryRange: job.salary,
    location: job.location,
    description: job.description,
    requirements: job.requirements,
    responsibilities: job.responsibilities,
  };

  return (
    <div className="bg-white p-8">
      <JobForm initialData={initialData} isEdit={true} id={id} />
    </div>
  );
}
