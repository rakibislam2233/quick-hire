"use server";
import { getCookie } from "@/utils/tokenHandlers";
import { api } from "./api";

// User application APIs
export async function applyToJob(jobId: string, applicationData: FormData) {
  const accessToken = await getCookie("accessToken");
  const refreshToken = await getCookie("refreshToken");

  if (!accessToken || !refreshToken) {
    throw new Error("User not authenticated");
  }

  try {
    const res = await api.post(`/applications/job/${jobId}`, applicationData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (!res.success) {
      throw new Error(res.message || "Failed to apply to job");
    }
    return res.data;
  } catch (error: any) {
    console.error("Failed to apply to job:", error.message);
    throw error;
  }
}

export async function getMyApplications() {
  const accessToken = await getCookie("accessToken");
  const refreshToken = await getCookie("refreshToken");

  if (!accessToken || !refreshToken) {
    throw new Error("User not authenticated");
  }

  try {
    const res = await api.get("/applications/my");
    if (!res.success) {
      throw new Error(res.message || "Failed to fetch applications");
    }
    return res.data;
  } catch (error: any) {
    console.error("Failed to fetch applications:", error.message);
    throw error;
  }
}

export async function getUpcomingInterviews() {
  const accessToken = await getCookie("accessToken");
  const refreshToken = await getCookie("refreshToken");

  if (!accessToken || !refreshToken) {
    throw new Error("User not authenticated");
  }

  try {
    const res = await api.get("/applications/interviews");
    if (!res.success) {
      throw new Error(res.message || "Failed to fetch interviews");
    }
    return res.data;
  } catch (error: any) {
    console.error("Failed to fetch interviews:", error.message);
    throw error;
  }
}

// Company application management
export async function getApplicationsForJob(jobId: string) {
  const accessToken = await getCookie("accessToken");
  const refreshToken = await getCookie("refreshToken");

  if (!accessToken || !refreshToken) {
    throw new Error("Company not authenticated");
  }

  try {
    const res = await api.get(`/applications/job/${jobId}`);
    if (!res.success) {
      throw new Error(res.message || "Failed to fetch applications");
    }
    return res.data;
  } catch (error: any) {
    console.error("Failed to fetch job applications:", error.message);
    throw error;
  }
}

export async function updateApplicationStatus(applicationId: string, status: string) {
  const accessToken = await getCookie("accessToken");
  const refreshToken = await getCookie("refreshToken");

  if (!accessToken || !refreshToken) {
    throw new Error("Company not authenticated");
  }

  try {
    const res = await api.patch(`/applications/${applicationId}/status`, { status });
    if (!res.success) {
      throw new Error(res.message || "Failed to update application status");
    }
    return res.data;
  } catch (error: any) {
    console.error("Failed to update application status:", error.message);
    throw error;
  }
}

export async function scheduleInterview(applicationId: string, interviewData: {
  interviewDate: string;
  interviewLink: string;
  interviewNote?: string;
}) {
  const accessToken = await getCookie("accessToken");
  const refreshToken = await getCookie("refreshToken");

  if (!accessToken || !refreshToken) {
    throw new Error("Company not authenticated");
  }

  try {
    const res = await api.patch(`/applications/schedule/${applicationId}`, interviewData);
    if (!res.success) {
      throw new Error(res.message || "Failed to schedule interview");
    }
    return res.data;
  } catch (error: any) {
    console.error("Failed to schedule interview:", error.message);
    throw error;
  }
}

export async function getCompanyUpcomingInterviews() {
  const accessToken = await getCookie("accessToken");
  const refreshToken = await getCookie("refreshToken");

  if (!accessToken || !refreshToken) {
    throw new Error("Company not authenticated");
  }

  try {
    const res = await api.get("/applications/interviews");
    if (!res.success) {
      throw new Error(res.message || "Failed to fetch interviews");
    }
    return res.data;
  } catch (error: any) {
    console.error("Failed to fetch company interviews:", error.message);
    throw error;
  }
}

// Saved jobs
export async function toggleSaveJob(jobId: string) {
  const accessToken = await getCookie("accessToken");
  const refreshToken = await getCookie("refreshToken");

  if (!accessToken || !refreshToken) {
    throw new Error("User not authenticated");
  }

  try {
    const res = await api.post(`/saved-jobs/${jobId}`);
    if (!res.success) {
      throw new Error(res.message || "Failed to toggle save job");
    }
    return res.data;
  } catch (error: any) {
    console.error("Failed to toggle save job:", error.message);
    throw error;
  }
}

export async function getSavedJobs() {
  const accessToken = await getCookie("accessToken");
  const refreshToken = await getCookie("refreshToken");

  if (!accessToken || !refreshToken) {
    throw new Error("User not authenticated");
  }

  try {
    const res = await api.get("/saved-jobs");
    if (!res.success) {
      throw new Error(res.message || "Failed to fetch saved jobs");
    }
    return res.data;
  } catch (error: any) {
    console.error("Failed to fetch saved jobs:", error.message);
    throw error;
  }
}
