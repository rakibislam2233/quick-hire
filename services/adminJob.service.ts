"use server";

import { jobSchema } from "@/validation/job.validation";
import { revalidatePath } from "next/cache";

export type AdminJobActionState = {
  success: boolean;
  message: string;
  errors?: {
    [K in keyof z.infer<typeof jobSchema>]?: string[];
  };
  data?: unknown;
};

import { z } from "zod";

export async function createJobAction(
  prevState: AdminJobActionState,
  formData: FormData,
): Promise<AdminJobActionState> {
  const rawData = {
    title: formData.get("title") as string,
    category: formData.get("category") as string,
    type: formData.get("type") as string,
    salary: formData.get("salary") as string,
    location: formData.get("location") as string,
    description: formData.get("description") as string,
  };

  const validatedFields = jobSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Please fix the errors in the form.",
      errors: validatedFields.error.flatten()
        .fieldErrors as AdminJobActionState["errors"],
    };
  }
  await new Promise((resolve) => setTimeout(resolve, 1500));

  revalidatePath("/admin/job-listing");
  revalidatePath("/jobs");

  return {
    success: true,
    message: "Job created successfully!",
  };
}

export async function updateJobAction(
  id: string,
  prevState: AdminJobActionState,
  formData: FormData,
): Promise<AdminJobActionState> {
  const rawData = {
    title: formData.get("title") as string,
    category: formData.get("category") as string,
    type: formData.get("type") as string,
    salary: formData.get("salary") as string,
    location: formData.get("location") as string,
    description: formData.get("description") as string,
  };

  const validatedFields = jobSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Please fix the errors in the form.",
      errors: validatedFields.error.flatten()
        .fieldErrors as AdminJobActionState["errors"],
    };
  }

  await new Promise((resolve) => setTimeout(resolve, 1500));

  revalidatePath("/admin/job-listing");
  revalidatePath(`/admin/job-listing/edit/${id}`);
  revalidatePath("/jobs");
  revalidatePath(`/jobs/${id}`);

  return {
    success: true,
    message: "Job updated successfully!",
  };
}
