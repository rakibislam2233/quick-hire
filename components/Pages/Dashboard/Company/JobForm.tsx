"use client";
import {
  createJobAction,
  updateJobAction
} from "@/app/dashboard/company/_actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import RichTextEditor from "@/components/ui/rich-text-editor";
import { Category } from "@/interface/category.interface";
import { Job, JobType } from "@/interface/job.interface";
import {
  ArrowLeft,
  Briefcase,
  DollarSign,
  Layers,
  Loader2,
  MapPin
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { toast } from "sonner";

interface JobFormProps {
  initialData?: Job;
  categories: Category[];
  isEdit?: boolean;
  id?: string;
}

const JobForm = ({
  initialData,
  categories,
  isEdit = false,
  id,
}: JobFormProps) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      try {
        const prevState = { success: false, message: "", error: "" };
        const result = isEdit 
          ? await updateJobAction(prevState, formData)
          : await createJobAction(prevState, formData);
        
        if (result.success) {
          toast.success(result.message);
          router.push("/dashboard/company/job-listing");
        } else {
          toast.error(result.error || "Failed to save job");
        }
      } catch (error) {
        toast.error("An error occurred while saving the job");
      }
    });
  };


  return (
    <form
      action={handleSubmit}
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
        {isPending && (
          <div className="p-4 bg-blue-50 border border-blue-100 text-blue-600 text-sm font-bold">
            Processing...
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
                className="w-full h-12 px-3 bg-white border border-gray-100 text-sm font-medium focus:outline-none focus:border-primary appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {categories?.map((category) => (
                  <option key={category?.id} value={category?.id}>
                    {category?.name || "Unknown Category"}
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
                  defaultValue={initialData?.salary}
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
                const hiddenInput = document.getElementById(
                  "description-hidden",
                ) as HTMLInputElement;
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
                const hiddenInput = document.getElementById(
                  "requirements-hidden",
                ) as HTMLInputElement;
                if (hiddenInput) hiddenInput.value = value;
              }}
              placeholder="5+ years of experience in software development, Strong knowledge of JavaScript/TypeScript..."
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-[#25324B] ">
              Responsibilities
            </label>
            <input
              type="hidden"
              name="responsibilities"
              id="responsibilities-hidden"
            />
            <RichTextEditor
              value={initialData?.responsibilities || ""}
              onChange={(value) => {
                const hiddenInput = document.getElementById(
                  "responsibilities-hidden",
                ) as HTMLInputElement;
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
