import JobForm from "@/components/Pages/Admin/Jobs/JobForm";
import { getJobById } from "@/services/job.service";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface EditJobPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: EditJobPageProps): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `Edit Job ${id} | Admin Dashboard`,
  };
}

export default async function EditJobPage({ params }: EditJobPageProps) {
  const { id } = await params;
  const job = await getJobById(id);

  if (!job) {
    notFound();
  }

  // Convert Job interface to JobFormData expected by the form
  const initialData = {
    title: job.title,
    category: job.category,
    type: job.type as any,
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
