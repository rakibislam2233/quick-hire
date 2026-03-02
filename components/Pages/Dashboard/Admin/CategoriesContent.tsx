"use client";
import { deleteCategoryAction } from "@/app/dashboard/admin/_actions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Category } from "@/interface/category.interface";
import { getIconDisplayName, renderIcon } from "@/lib/icon-utils";
import { Edit, Filter, Plus, Search, Trash2 } from "lucide-react";
import Link from "next/link";
import { useState, useTransition } from "react";
import { toast } from "sonner";

interface CategoriesContentProps {
  categories?: Category[];
}

const CategoriesContent = ({ categories }: CategoriesContentProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const [localCategories, setLocalCategories] = useState(categories || []);

  const filteredCategories = localCategories?.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleDelete = async (categoryId: string) => {
    startTransition(async () => {
      try {
        const result = await deleteCategoryAction(categoryId);
        if (result.success) {
          toast.success(result.message);
          // Instantly update UI without reload
          setLocalCategories(prev => prev.filter(cat => cat.id !== categoryId));
        } else {
          toast.error("Failed to delete category");
        }
      } catch (error) {
        toast.error("An error occurred while deleting the category");
      } finally {
        setDeleteConfirm(null);
      }
    });
  };

  return (
    <div className="font-epilogue">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <div>
          <h2 className="text-2xl font-extrabold text-[#25324B]">Categories</h2>
          <p className="text-gray-500 font-medium text-sm">
            Manage job categories for better organization.
          </p>
        </div>
        <Link href="/dashboard/admin/categories/add" className="no-underline">
          <Button className="bg-primary text-white rounded-none h-12 px-6 font-bold flex items-center gap-2 shadow-none">
            <Plus className="w-5 h-5" />
            Add Category
          </Button>
        </Link>
      </div>

      <div className="bg-white border border-gray-100 shadow-none">
        <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search categories..."
              className="pl-10 rounded-none border-gray-200 focus-visible:ring-0 focus-visible:border-primary shadow-none h-11"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button
            variant="outline"
            className="rounded-none border-gray-200 text-[#25324B] font-bold h-11 px-6 flex items-center gap-2"
          >
            <Filter className="w-4 h-4" />
            Filter
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-50 bg-[#F8F9FF]">
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 tracking-widest">
                  Category Name
                </th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 tracking-widest">
                  Description
                </th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 tracking-widest">
                  Icon
                </th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 tracking-widest">
                  Jobs Count
                </th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 tracking-widest">
                  Status
                </th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 tracking-widest text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredCategories?.map((category) => (
                <tr
                  key={category.id}
                  className="hover:bg-gray-50/50 transition-colors group"
                >
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center">
                        {renderIcon(category?.icon)}
                      </div>
                      <div>
                        <span className="block font-bold text-[#25324B] text-sm">
                          {category.name}
                        </span>
                        <p className="text-xs text-gray-400">
                          ID: {category.id}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-sm text-gray-600 line-clamp-2 max-w-xs">
                      {category.description || "No description"}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      {renderIcon(category.icon)}
                      <span className="text-sm text-gray-500">
                        {getIconDisplayName(category.icon)}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <span className="text-sm font-bold text-[#25324B]">
                      {category._count?.jobs || 0}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <Badge
                      variant="outline"
                      className="bg-green-50 text-green-600 border-green-100"
                    >
                      Active
                    </Badge>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/dashboard/admin/categories/edit/${category.id}`}
                        className="text-gray-300 hover:text-primary transition-colors"
                      >
                        <Edit className="w-4 h-4" />
                      </Link>
                      <button
                        className="text-gray-300 hover:text-red-500 transition-colors cursor-pointer"
                        onClick={() => setDeleteConfirm(category.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {(!filteredCategories || filteredCategories.length === 0) && (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center justify-center">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                        <Filter className="w-8 h-8 text-gray-400" />
                      </div>
                      <h3 className="text-lg font-bold text-[#25324B] mb-2">
                        No Categories Found
                      </h3>
                      <p className="text-gray-500 text-sm mb-6">
                        Get started by creating your first job category.
                      </p>
                      <Link
                        href="/dashboard/admin/categories/add"
                        className="no-underline"
                      >
                        <Button className="bg-primary text-white rounded-none h-12 px-8 font-bold shadow-none">
                          Add Category
                        </Button>
                      </Link>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Delete Confirmation Dialog */}
      {deleteConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm mx-4 shadow-xl">
            <h3 className="text-lg font-bold text-[#25324B] mb-2">
              Confirm Delete
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              Are you sure you want to delete this category? This action cannot be undone.
            </p>
            <div className="flex justify-end gap-3">
              <Button
                variant="outline"
                onClick={() => setDeleteConfirm(null)}
                disabled={isPending}
                className="rounded-none border-gray-200 text-[#25324B] font-bold h-10 px-6"
              >
                Cancel
              </Button>
              <Button
                onClick={() => handleDelete(deleteConfirm)}
                disabled={isPending}
                className="bg-red-500 text-white rounded-none h-10 px-6 font-bold hover:bg-red-600"
              >
                {isPending ? "Deleting..." : "Delete"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoriesContent;
