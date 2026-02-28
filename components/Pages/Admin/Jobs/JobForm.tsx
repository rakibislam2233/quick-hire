"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { JobFormData, jobSchema } from "@/validation/job.validation";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { useState } from "react";
import { useForm } from "react-hook-form";

interface JobFormProps {
  initialData?: JobFormData & { id?: string };
  isEdit?: boolean;
}

const JobForm = ({ initialData, isEdit = false }: JobFormProps) => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<JobFormData>({
    resolver: zodResolver(jobSchema),
    defaultValues: initialData,
  });

  const onSubmit = async (data: JobFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Job Data:", data);
    setIsSubmitting(false);
    setIsSuccess(true);

    setTimeout(() => {
      router.push("/admin/job-listing");
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-20 bg-white border border-gray-100 shadow-none font-epilogue">
        <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h2 className="text-2xl font-extrabold text-[#25324B] mb-2 uppercase tracking-tighter">
          {isEdit ? "Job Updated Successfully!" : "Job Posted Successfully!"}
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
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8 font-epilogue max-w-4xl mx-auto"
    >
      <div className="flex items-center justify-between mb-8">
        <div>
          <Link
            href="/admin/job-listing"
            className="flex items-center gap-2 text-gray-500 font-bold text-xs uppercase tracking-widest mb-2 no-underline hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to listings
          </Link>
          <h2 className="text-2xl font-extrabold text-[#25324B] uppercase tracking-tighter">
            {isEdit ? "Edit Job Post" : "Post a New Job"}
          </h2>
        </div>
      </div>

      <div className="bg-white border border-gray-100 p-8 shadow-none space-y-8">
        {/* Job Details Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 border-b border-gray-50 pb-4">
            <Briefcase className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-bold text-[#25324B] uppercase tracking-tighter">
              Job Details
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2 col-span-1 md:col-span-2">
              <label className="text-xs font-bold text-[#25324B] uppercase italic">
                Job Title
              </label>
              <Input
                {...register("title")}
                placeholder="e.g. Senior Frontend Developer"
                className={`rounded-none h-12 border-gray-200 focus-visible:ring-0 focus-visible:border-primary shadow-none ${errors.title ? "border-red-500" : ""}`}
              />
              {errors.title && (
                <p className="text-[10px] text-red-500 font-bold uppercase">
                  {errors.title.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-[#25324B] uppercase italic">
                Category
              </label>
              <select
                {...register("category")}
                className={`w-full h-12 px-3 bg-white border border-gray-200 text-sm font-medium focus:outline-none focus:border-primary appearance-none cursor-pointer ${errors.category ? "border-red-500" : ""}`}
              >
                <option value="">Select Category</option>
                <option value="Design">Design</option>
                <option value="Development">Development</option>
                <option value="Marketing">Marketing</option>
                <option value="Business">Business</option>
              </select>
              {errors.category && (
                <p className="text-[10px] text-red-500 font-bold uppercase">
                  {errors.category.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-[#25324B] uppercase italic">
                Job Type
              </label>
              <select
                {...register("type")}
                className={`w-full h-12 px-3 bg-white border border-gray-200 text-sm font-medium focus:outline-none focus:border-primary appearance-none cursor-pointer ${errors.type ? "border-red-500" : ""}`}
              >
                <option value="">Select Type</option>
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Remote">Remote</option>
                <option value="Contract">Contract</option>
              </select>
              {errors.type && (
                <p className="text-[10px] text-red-500 font-bold uppercase">
                  {errors.type.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-[#25324B] uppercase italic">
                Salary Range
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  {...register("salary")}
                  placeholder="e.g. $80k - $120k"
                  className={`pl-10 rounded-none h-12 border-gray-200 focus-visible:ring-0 focus-visible:border-primary shadow-none ${errors.salary ? "border-red-500" : ""}`}
                />
              </div>
              {errors.salary && (
                <p className="text-[10px] text-red-500 font-bold uppercase">
                  {errors.salary.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-[#25324B] uppercase italic">
                Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  {...register("location")}
                  placeholder="e.g. San Francisco, CA"
                  className={`pl-10 rounded-none h-12 border-gray-200 focus-visible:ring-0 focus-visible:border-primary shadow-none ${errors.location ? "border-red-500" : ""}`}
                />
              </div>
              {errors.location && (
                <p className="text-[10px] text-red-500 font-bold uppercase">
                  {errors.location.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 border-b border-gray-50 pb-4">
            <Layers className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-bold text-[#25324B] uppercase tracking-tighter">
              Job Description
            </h3>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-[#25324B] uppercase italic">
              Description
            </label>
            <Textarea
              {...register("description")}
              placeholder="Provide a detailed description of the role and responsibilities..."
              className={`rounded-none min-h-[200px] border-gray-200 focus-visible:ring-0 focus-visible:border-primary shadow-none ${errors.description ? "border-red-500" : ""}`}
            />
            {errors.description && (
              <p className="text-[10px] text-red-500 font-bold uppercase">
                {errors.description.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex justify-end gap-4 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.back()}
            className="rounded-none h-12 px-8 font-bold border-gray-200 uppercase tracking-widest text-xs"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#4640DE] text-white rounded-none h-12 px-10 font-bold shadow-none uppercase tracking-widest text-xs"
          >
            {isSubmitting ? (
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
