"use client";
import {
  createCategoryAction,
  updateCategoryAction,
} from "@/app/dashboard/admin/_actions";
import { Button } from "@/components/ui/button";
import IconPicker from "@/components/ui/icon-picker";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Category } from "@/interface/category.interface";
import { resolveIcon, type IconValue } from "@/lib/icon-config";
import { ArrowLeft, FolderOpen, Loader2, Tag, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";

interface CategoryFormProps {
  initialData?: Category;
  isEdit?: boolean;
  id?: string;
}

const CategoryForm = ({
  initialData,
  isEdit = false,
  id,
}: CategoryFormProps) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  // Icon state
  const [selectedIcon, setSelectedIcon] = useState<IconValue | null>(() => {
    if (!initialData?.icon) return null;
    try {
      return JSON.parse(initialData.icon) as IconValue;
    } catch {
      return initialData.icon
        ? { name: initialData.icon, library: "lucide" }
        : null;
    }
  });

  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      try {
        const prevState = { success: false, message: "", error: "" };
        const result = isEdit
          ? await updateCategoryAction(prevState, formData)
          : await createCategoryAction(prevState, formData);

        if (result.success) {
          toast.success(result.message);
          router.push("/dashboard/admin/categories");
        } else {
          toast.error(result.error || "Failed to save category");
        }
      } catch (error) {
        toast.error("An error occurred while saving the category");
      }
    });
  };

  const SelectedIconComponent = resolveIcon(selectedIcon);

  // ── Main form ───────────────────────────────────────────────────────────────
  return (
    <form
      action={handleSubmit}
      className="space-y-8 font-epilogue max-w-4xl mx-auto"
    >
      {/* Hidden fields */}
      {isEdit && <input type="hidden" name="categoryId" value={id} />}
      <input
        type="hidden"
        name="icon"
        value={selectedIcon ? JSON.stringify(selectedIcon) : ""}
      />
      {/* Page header */}
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
        {/* Category Details */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 border-b border-gray-50 pb-4">
            <FolderOpen className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-bold text-[#25324B] tracking-tighter">
              Category Details
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Category Name */}
            <div className="space-y-2 col-span-1 md:col-span-2">
              <label className="text-xs font-bold text-[#25324B]">
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

            {/* Icon / Image toggle section */}
            <div className="space-y-4 col-span-1 md:col-span-2">
              <label className="text-xs font-bold text-[#25324B]">
                Category Visual
              </label>

              {/* Toggle buttons */}
              <div className="flex gap-0 border border-gray-200 w-fit"></div>

              <div className="space-y-3">
                <IconPicker
                  value={selectedIcon}
                  onChange={setSelectedIcon}
                  placeholder="Select an icon"
                />

                {/* Selected icon preview */}
                {selectedIcon && SelectedIconComponent && (
                  <div className="flex items-center gap-3 p-3 bg-gray-50 border border-gray-100">
                    <div>
                      <p className="text-xs font-bold text-[#25324B]">
                        {selectedIcon.name}
                      </p>
                      <p className="text-xs text-gray-400">
                        {selectedIcon.library === "lucide"
                          ? "Lucide React"
                          : `React Icons · ${selectedIcon.set?.toUpperCase()}`}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedIcon(null)}
                      className="ml-auto text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-[#25324B]">
              Description
            </label>
            <Textarea
              name="description"
              defaultValue={initialData?.description}
              placeholder="Provide a brief description of this category..."
              className="rounded-none min-h-30 border-gray-200 focus-visible:ring-0 focus-visible:border-primary shadow-none resize-none"
              rows={4}
            />
          </div>
        </div>

        {/* Actions */}
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
