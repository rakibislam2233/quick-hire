import CategoryForm from "@/components/Pages/Dashboard/Admin/CategoryForm";
import { getCategoryById } from "@/services/category.service";
import { notFound } from "next/navigation";

interface EditCategoryPageProps {
  params: Promise<{ id: string }>;
}

export default async function AdminEditCategoryPage({ params }: EditCategoryPageProps) {
  const { id } = await params;
  const category = await getCategoryById(id);

  if (!category) {
    notFound();
  }

  return (
    <div className="bg-white p-8">
      <CategoryForm initialData={category} isEdit={true} id={id} />
    </div>
  );
}
