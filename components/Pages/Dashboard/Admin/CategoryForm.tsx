"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createCategoryAction, updateCategoryAction } from "@/app/dashboard/admin/_actions";
import {
  ArrowLeft,
  CheckCircle2,
  FolderOpen,
  Loader2,
  Tag,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";

interface CategoryFormProps {
  initialData?: any;
  isEdit?: boolean;
  id?: string;
}

const CategoryForm = ({ initialData, isEdit = false, id }: CategoryFormProps) => {
  const router = useRouter();

  const action = isEdit ? updateCategoryAction : createCategoryAction;

  const [state, formAction, isPending] = useActionState(action, {
    success: false,
    message: "",
  });

  useEffect(() => {
    if (state.success) {
      toast.success(state.message);
      router.push("/dashboard/admin/categories");
    } else if (state.error) {
      toast.error(state.error);
    }
  }, [state, router]);

  if (state.success) {
    return (
      <div className="flex flex-col items-center justify-center py-20 bg-white border border-gray-100 shadow-none font-epilogue">
        <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h2 className="text-2xl font-extrabold text-[#25324B] mb-2 tracking-tighter">
          {state.message}
        </h2>
        <p className="text-gray-500 font-medium mb-8">
          Redirecting you back to the categories list...
        </p>
        <Loader2 className="w-6 h-6 text-primary animate-spin" />
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className="space-y-8 font-epilogue max-w-4xl mx-auto"
    >
      {/* Hidden fields */}
      {isEdit && <input type="hidden" name="categoryId" value={id} />}

      <div className="flex items-center justify-between mb-8">
        <div>
          <Link
            href="/dashboard/admin/categories"
            className="flex items-center gap-2 text-gray-500 font-bold text-xs tracking-widest mb-2 no-underline hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to categories
          </Link>
          <h2 className="text-2xl font-extrabold text-[#25324B] tracking-tighter">
            {isEdit ? "Edit Category" : "Add New Category"}
          </h2>
        </div>
      </div>

      <div className="bg-white border border-gray-100 p-8 shadow-none space-y-8">
        {state.message && !state.success && (
          <div className="p-4 bg-red-50 border border-red-100 text-red-600 text-sm font-bold">
            {state.message}
          </div>
        )}

        {/* Category Details Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 border-b border-gray-50 pb-4">
            <FolderOpen className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-bold text-[#25324B] tracking-tighter">
              Category Details
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2 col-span-1 md:col-span-2">
              <label className="text-xs font-bold text-[#25324B] ">
                Category Name
              </label>
              <div className="relative">
                <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  name="name"
                  defaultValue={initialData?.name}
                  placeholder="e.g. Software Development"
                  className="pl-10 rounded-none h-12 border-gray-200 focus-visible:ring-0 focus-visible:border-primary shadow-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-[#25324B] ">
                Icon
              </label>
              <div className="relative">
                <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  name="icon"
                  defaultValue={initialData?.icon}
                  placeholder="e.g. 💻 or emoji"
                  className="pl-10 rounded-none h-12 border-gray-200 focus-visible:ring-0 focus-visible:border-primary shadow-none"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-[#25324B] ">
              Description
            </label>
            <Textarea
              name="description"
              defaultValue={initialData?.description}
              placeholder="Provide a brief description of this category..."
              className="rounded-none min-h-[120px] border-gray-200 focus-visible:ring-0 focus-visible:border-primary shadow-none resize-none"
              rows={4}
            />
          </div>
        </div>

        <div className="flex justify-end gap-4 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.back()}
            className="rounded-none h-12 px-8 font-bold border-gray-200 tracking-widest text-xs"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={isPending}
            className="bg-primary text-white rounded-none h-12 px-10 font-bold shadow-none tracking-widest text-xs"
          >
            {isPending ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Processing...
              </>
            ) : isEdit ? (
              "Update Category"
            ) : (
              "Add Category"
            )}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default CategoryForm;
