"use client";
import { createJobAction, getAllCategoriesAction, updateJobAction } from "@/app/dashboard/company/_actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import RichTextEditor from "@/components/ui/rich-text-editor";
import { JobType } from "@/interface/job.interface";
import {
  ArrowLeft,
  Briefcase,
  CheckCircle2,
  DollarSign,
  Layers,
  Loader2,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";

interface JobFormProps {
  initialData?: any;
  isEdit?: boolean;
  id?: string;
}

const JobForm = ({ initialData, isEdit = false, id }: JobFormProps) => {
  const router = useRouter();
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const action = isEdit ? updateJobAction : createJobAction;

  const [state, formAction, isPending] = useActionState(action, {
    success: false,
    message: "",
  });

  // Fetch categories on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const result = await getAllCategoriesAction();
        if (result.success) {
          setCategories(result.data || []);
        }
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    if (state.success) {
      toast.success(state.message);
      router.push("/dashboard/company/job-listing");
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
          Redirecting you back to the job listings...
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
      {isEdit && <input type="hidden" name="jobId" value={id} />}
      <input type="hidden" name="companyId" value="your_company_id_here" />

      <div className="flex items-center justify-between mb-8">
        <div>
          <Link
            href="/dashboard/company/job-listing"
            className="flex items-center gap-2 text-gray-500 font-bold text-xs tracking-widest mb-2 no-underline hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to listings
          </Link>
          <h2 className="text-2xl font-extrabold text-[#25324B] tracking-tighter">
            {isEdit ? "Edit Job Post" : "Post a New Job"}
          </h2>
        </div>
      </div>

      <div className="bg-white border border-gray-100 p-8 shadow-none space-y-8">
        {state.message && !state.success && (
          <div className="p-4 bg-red-50 border border-red-100 text-red-600 text-sm font-bold">
            {state.message}
          </div>
        )}

        {/* Job Details Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 border-b border-gray-50 pb-4">
            <Briefcase className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-bold text-[#25324B] tracking-tighter">
              Job Details
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2 col-span-1 md:col-span-2">
              <label className="text-xs font-bold text-[#25324B] ">
                Job Title
              </label>
              <div className="relative">
                <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  name="title"
                  defaultValue={initialData?.title}
                  placeholder="e.g. Senior Software Engineer"
                  className="pl-10 rounded-none h-12 border-gray-200 focus-visible:ring-0 focus-visible:border-primary shadow-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-[#25324B] ">
                Category
              </label>
              <select
                name="categoryId"
                defaultValue={initialData?.categoryId}
                disabled={loading}
                className="w-full h-12 px-3 bg-white border border-gray-100 text-sm font-medium focus:outline-none focus:border-primary appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <option value="">{loading ? "Loading categories..." : "Select Category"}</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-[#25324B] ">
                Job Type
              </label>
              <select
                name="type"
                defaultValue={initialData?.type}
                className="w-full h-12 px-3 bg-white border border-gray-100 text-sm font-medium focus:outline-none focus:border-primary appearance-none cursor-pointer"
              >
                <option value="">Select Type</option>
                <option value={JobType.FULL_TIME}>Full-Time</option>
                <option value={JobType.PART_TIME}>Part-Time</option>
                <option value={JobType.CONTRACT}>Contract</option>
                <option value={JobType.INTERNSHIP}>Internship</option>
                <option value={JobType.FREELANCE}>Freelance</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-[#25324B] ">
                Salary Range
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  name="salaryRange"
                  defaultValue={initialData?.salaryRange}
                  placeholder="e.g. $80,000 - $120,000"
                  className="pl-10 rounded-none h-12 border-gray-200 focus-visible:ring-0 focus-visible:border-primary shadow-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-[#25324B] ">
                Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  name="location"
                  defaultValue={initialData?.location}
                  placeholder="e.g. San Francisco, CA"
                  className="pl-10 rounded-none h-12 border-gray-200 focus-visible:ring-0 focus-visible:border-primary shadow-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 border-b border-gray-50 pb-4">
            <Layers className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-bold text-[#25324B] tracking-tighter">
              Job Description
            </h3>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-[#25324B] ">
              Description
            </label>
            <input type="hidden" name="description" id="description-hidden" />
            <RichTextEditor
              value={initialData?.description || ""}
              onChange={(value) => {
                const hiddenInput = document.getElementById('description-hidden') as HTMLInputElement;
                if (hiddenInput) hiddenInput.value = value;
              }}
              placeholder="We are looking for a talented senior software engineer to join our team..."
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-[#25324B] ">
              Requirements
            </label>
            <input type="hidden" name="requirements" id="requirements-hidden" />
            <RichTextEditor
              value={initialData?.requirements || ""}
              onChange={(value) => {
                const hiddenInput = document.getElementById('requirements-hidden') as HTMLInputElement;
                if (hiddenInput) hiddenInput.value = value;
              }}
              placeholder="5+ years of experience in software development, Strong knowledge of JavaScript/TypeScript..."
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-[#25324B] ">
              Responsibilities
            </label>
            <input type="hidden" name="responsibilities" id="responsibilities-hidden" />
            <RichTextEditor
              value={initialData?.responsibilities || ""}
              onChange={(value) => {
                const hiddenInput = document.getElementById('responsibilities-hidden') as HTMLInputElement;
                if (hiddenInput) hiddenInput.value = value;
              }}
              placeholder="Design and develop high-quality software solutions, Write clean and maintainable code..."
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
              "Update Job Post"
            ) : (
              "Post Job"
            )}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default JobForm;
