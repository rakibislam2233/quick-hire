import CategoryForm from "@/components/Pages/Dashboard/Admin/CategoryForm";

export default function AdminAddCategoryPage() {
  return (
    <div className="bg-white p-8">
      <CategoryForm isEdit={false} />
    </div>
  );
}
