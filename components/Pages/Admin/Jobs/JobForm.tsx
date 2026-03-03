"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createJobAction, updateJobAction } from "@/services/adminJob.service";
import { JobFormData } from "@/validation/job.validation";
import {
  ArrowLeft,
  Briefcase,
  Calendar,
  CheckCircle2,
  DollarSign,
  Layers,
  Loader2,
  MapPin
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";

interface JobFormProps {
  initialData?: Partial<JobFormData>;
  isEdit?: boolean;
  id?: string;
}

const JobForm = ({ initialData, isEdit = false, id }: JobFormProps) => {
  const router = useRouter();

  // Bind ID if editing
  const action = isEdit ? updateJobAction.bind(null, id!) : createJobAction;

  const [state, formAction, isPending] = useActionState(action, {
    success: false,
    message: "",
  });

  useEffect(() => {
    if (state.success) {
      const timer = setTimeout(() => {
        router.push("/admin/job-listing");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [state.success, router]);

  if (state.success) {
    return (
      <div className="flex flex-col items-center justify-center py-20 bg-white border border-gray-100 shadow-none font-epilogue">
        <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h2 className="text-2xl font-extrabold text-[#25324B] mb-2  tracking-tighter">
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
      <div className="flex items-center justify-between mb-8">
        <div>
          <Link
            href="/admin/job-listing"
            className="flex items-center gap-2 text-gray-500 font-bold text-xs  tracking-widest mb-2 no-underline hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to listings
          </Link>
          <h2 className="text-2xl font-extrabold text-[#25324B]  tracking-tighter">
            {isEdit ? "Edit Job Post" : "Post a New Job"}
          </h2>
        </div>
      </div>

      <div className="bg-white border border-gray-100 p-8 shadow-none space-y-8">
        {state.message && !state.success && (
          <div className="p-4 bg-red-50 border border-red-100 text-red-600 text-sm font-bold ">
            {state.message}
          </div>
        )}

        {/* Job Details Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 border-b border-gray-50 pb-4">
            <Briefcase className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-bold text-[#25324B]  tracking-tighter">
              Job Details
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2 col-span-1 md:col-span-2">
              <label className="text-xs font-bold text-[#25324B]  ">
                Job Title
              </label>
              <Input
                name="title"
                defaultValue={initialData?.title}
                placeholder="e.g. Senior Frontend Developer"
                className={`rounded-none h-12 border-gray-200 focus-visible:ring-0 focus-visible:border-primary shadow-none ${state.errors?.title ? "border-red-500" : ""}`}
              />
              {state.errors?.title && (
                <p className="text-[10px] text-red-500 font-bold ">
                  {state.errors.title[0]}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-[#25324B]  ">
                Category ID
              </label>
              <select
                name="categoryId"
                defaultValue={initialData?.categoryId}
                className={`w-full h-12 px-3 bg-white border border-gray-100 text-sm font-medium focus:outline-none focus:border-primary appearance-none cursor-pointer ${state.errors?.categoryId ? "border-red-500" : ""}`}
              >
                <option value="">Select Category</option>
                <option value="cmm8xyd310000q4eqgx6fh2ln">Design</option>
                <option value="cmm8ylrm80001q4eq5u6a1boy">Sales</option>
                <option value="cmm8yne030002q4eqr65ukcee">Marketing</option>
                <option value="cmm8ypnbk0003q4eq7wqu0htc">Finance</option>
                <option value="cmm8yqfln0004q4eqts2yq4qr">Technology</option>
                <option value="cmm8yr8fu0005q4eqvg3dyg3l">Engineering</option>
                <option value="cmm8ysl760006q4eqd3qnrkvt">Business</option>
                <option value="cmm8ythf30007q4eq2fu7cwcd">Human Resource</option>
              </select>
              {state.errors?.categoryId && (
                <p className="text-[10px] text-red-500 font-bold ">
                  {state.errors.categoryId[0]}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-[#25324B]  ">
                Job Type
              </label>
              <select
                name="type"
                defaultValue={initialData?.type}
                className={`w-full h-12 px-3 bg-white border border-gray-100 text-sm font-medium focus:outline-none focus:border-primary appearance-none cursor-pointer ${state.errors?.type ? "border-red-500" : ""}`}
              >
                <option value="">Select Type</option>
                <option value="FULL_TIME">Full-Time</option>
                <option value="PART_TIME">Part-Time</option>
                <option value="CONTRACT">Contract</option>
                <option value="INTERNSHIP">Internship</option>
                <option value="FREELANCE">Freelance</option>
              </select>
              {state.errors?.type && (
                <p className="text-[10px] text-red-500 font-bold ">
                  {state.errors.type[0]}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-[#25324B]  ">
                Salary Range
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  name="salaryRange"
                  defaultValue={initialData?.salaryRange}
                  placeholder="e.g. $80k - $120k"
                  className={`pl-10 rounded-none h-12 border-gray-200 focus-visible:ring-0 focus-visible:border-primary shadow-none ${state.errors?.salaryRange ? "border-red-500" : ""}`}
                />
              </div>
              {state.errors?.salaryRange && (
                <p className="text-[10px] text-red-500 font-bold ">
                  {state.errors.salaryRange[0]}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-[#25324B]  ">
                Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  name="location"
                  defaultValue={initialData?.location}
                  placeholder="e.g. San Francisco, CA"
                  className={`pl-10 rounded-none h-12 border-gray-200 focus-visible:ring-0 focus-visible:border-primary shadow-none ${state.errors?.location ? "border-red-500" : ""}`}
                />
              </div>
              {state.errors?.location && (
                <p className="text-[10px] text-red-500 font-bold ">
                  {state.errors.location[0]}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-[#25324B]  ">
                Application Deadline
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  name="deadline"
                  type="date"
                  defaultValue={initialData?.deadline}
                  className={`pl-10 rounded-none h-12 border-gray-200 focus-visible:ring-0 focus-visible:border-primary shadow-none ${state.errors?.deadline ? "border-red-500" : ""}`}
                />
              </div>
              {state.errors?.deadline && (
                <p className="text-[10px] text-red-500 font-bold ">
                  {state.errors.deadline[0]}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 border-b border-gray-50 pb-4">
            <Layers className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-bold text-[#25324B]  tracking-tighter">
              Job Description
            </h3>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-[#25324B]  ">
              Description
            </label>
            <Textarea
              name="description"
              defaultValue={initialData?.description}
              placeholder="Provide a detailed description of the role and company culture..."
              className={`rounded-none min-h-[150px] border-gray-200 focus-visible:ring-0 focus-visible:border-primary shadow-none ${state.errors?.description ? "border-red-500" : ""}`}
            />
            {state.errors?.description && (
              <p className="text-[10px] text-red-500 font-bold ">
                {state.errors.description[0]}
              </p>
            )}
          </div>
        </div>

        {/* Requirements Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 border-b border-gray-50 pb-4">
            <Briefcase className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-bold text-[#25324B]  tracking-tighter">
              Requirements
            </h3>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-[#25324B]  ">
              Requirements
            </label>
            <Textarea
              name="requirements"
              defaultValue={initialData?.requirements}
              placeholder="List the required skills, experience, and qualifications for this role..."
              className={`rounded-none min-h-[150px] border-gray-200 focus-visible:ring-0 focus-visible:border-primary shadow-none ${state.errors?.requirements ? "border-red-500" : ""}`}
            />
            {state.errors?.requirements && (
              <p className="text-[10px] text-red-500 font-bold ">
                {state.errors.requirements[0]}
              </p>
            )}
          </div>
        </div>

        {/* Responsibilities Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 border-b border-gray-50 pb-4">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-bold text-[#25324B]  tracking-tighter">
              Responsibilities
            </h3>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-[#25324B]  ">
              Responsibilities
            </label>
            <Textarea
              name="responsibilities"
              defaultValue={initialData?.responsibilities}
              placeholder="Describe the day-to-day responsibilities and tasks for this position..."
              className={`rounded-none min-h-[150px] border-gray-200 focus-visible:ring-0 focus-visible:border-primary shadow-none ${state.errors?.responsibilities ? "border-red-500" : ""}`}
            />
            {state.errors?.responsibilities && (
              <p className="text-[10px] text-red-500 font-bold ">
                {state.errors.responsibilities[0]}
              </p>
            )}
          </div>
        </div>

        <div className="flex justify-end gap-4 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.back()}
            className="rounded-none h-12 px-8 font-bold border-gray-200  tracking-widest text-xs"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={isPending}
            className="bg-primary text-white rounded-none h-12 px-10 font-bold shadow-none  tracking-widest text-xs"
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
