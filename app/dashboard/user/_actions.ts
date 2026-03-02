"use server";
import { getUserDashboardStats } from "@/services/dashboard.service";
import { getMyProfile, updateMyProfile } from "@/services/user.service";
import { getMyApplications } from "@/services/application.service";
import { getSavedJobs, toggleSaveJob } from "@/services/application.service";
import { revalidatePath } from "next/cache";

// User Dashboard Stats Action
export async function getUserDashboardStatsAction() {
  try {
    const stats = await getUserDashboardStats();
    return { success: true, data: stats };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

// Profile Actions
export async function getMyProfileAction() {
  try {
    const profile = await getMyProfile();
    return { success: true, data: profile };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function updateMyProfileAction(formData: FormData) {
  try {
    const data = {
      fullName: formData.get("fullName") as string,
      phone: formData.get("phone") as string,
      location: formData.get("location") as string,
      bio: formData.get("bio") as string,
      skills: formData.get("skills") as string,
      experience: formData.get("experience") as string,
      education: formData.get("education") as string,
    };
    
    await updateMyProfile(data);
    revalidatePath("/dashboard/user/profile");
    return { success: true, message: "Profile updated successfully" };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

// Applications Actions
export async function getMyApplicationsAction() {
  try {
    const applications = await getMyApplications();
    return { success: true, data: applications };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

// Saved Jobs Actions
export async function getSavedJobsAction() {
  try {
    const savedJobs = await getSavedJobs();
    return { success: true, data: savedJobs };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function toggleSaveJobAction(jobId: string) {
  try {
    await toggleSaveJob(jobId);
    revalidatePath("/dashboard/user/saved");
    return { success: true, message: "Job saved/unsaved successfully" };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
