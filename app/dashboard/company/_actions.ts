/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import {
  getApplicationsForJob,
  updateApplicationStatus,
} from "@/services/application.service";
import { getAllCategories } from "@/services/category.service";
import { getCompanyDashboardStats } from "@/services/dashboard.service";
import {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
} from "@/services/job.service";
import { getMyProfile, updateMyProfile } from "@/services/user.service";
import { revalidatePath } from "next/cache";

// Company Dashboard Stats Action
export async function getCompanyDashboardStatsAction() {
  try {
    const stats = await getCompanyDashboardStats();
    return { success: true, data: stats };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

// Profile Actions
export async function getCompanyProfileAction() {
  try {
    const profile = await getMyProfile();
    return { success: true, data: profile };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function updateCompanyProfileAction(formData: FormData) {
  try {
    const data = {
      phone: formData.get("phone") as string,
      location: formData.get("location") as string,
      website: formData.get("website") as string,
      industry: formData.get("industry") as string,
      size: formData.get("size") as string,
      founded: formData.get("founded") as string,
      description: formData.get("description") as string,
    };

    await updateMyProfile(data);
    revalidatePath("/dashboard/company/profile");
    return { success: true, message: "Company profile updated successfully" };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

// Job Management Actions
export async function getAllJobsAction(params?: {
  search?: string;
  type?: string;
  location?: string;
  page?: number;
  limit?: number;
}) {
  try {
    const jobs = await getAllJobs(params);
    return { success: true, data: jobs };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function createJobAction(
  prevState: { success: boolean; message: string; error?: string },
  formData: FormData,
) {
  try {
    const jobData = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      requirements: formData.get("requirements") as string,
      responsibilities: formData.get("responsibilities") as string,
      salaryRange: formData.get("salaryRange") as string,
      location: formData.get("location") as string,
      type: formData.get("type") as string,
      categoryId: formData.get("categoryId") as string,
    };

    console.log("Creating job with data:", jobData);
    await createJob(jobData);
    revalidatePath("/dashboard/company/job-listing");
    return { success: true, message: "Job created successfully" };
  } catch (error: any) {
    return { success: false, message: "", error: error.message };
  }
}

export async function updateJobAction(
  prevState: { success: boolean; message: string; error?: string },
  formData: FormData,
) {
  try {
    const jobId = formData.get("jobId") as string;
    const jobData = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      requirements: formData.get("requirements") as string,
      responsibilities: formData.get("responsibilities") as string,
      salaryRange: formData.get("salaryRange") as string,
      location: formData.get("location") as string,
      type: formData.get("type") as string,
      categoryId: formData.get("categoryId") as string,
    };

    await updateJob(jobId, jobData);
    revalidatePath("/dashboard/company/job-listing");
    return { success: true, message: "Job updated successfully" };
  } catch (error: any) {
    return { success: false, message: "", error: error.message };
  }
}

export async function deleteJobAction(jobId: string) {
  try {
    await deleteJob(jobId);
    revalidatePath("/dashboard/company/job-listing");
    return { success: true, message: "Job deleted successfully" };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

// Applicants Management Actions
export async function getApplicationsForJobAction(jobId: string) {
  try {
    const applications = await getApplicationsForJob(jobId);
    return { success: true, data: applications };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function updateApplicationStatusAction(
  applicationId: string,
  status: string,
) {
  try {
    await updateApplicationStatus(applicationId, status);
    revalidatePath("/dashboard/company/applicants");
    return {
      success: true,
      message: "Application status updated successfully",
    };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

// Categories Management Actions
export async function getAllCategoriesAction() {
  try {
    const categories = await getAllCategories();
    return { success: true, data: categories };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
