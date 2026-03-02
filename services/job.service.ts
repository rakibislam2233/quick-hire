"use server";
import { getCookie } from "@/utils/tokenHandlers";
import { api } from "./api";

// Public job APIs
export async function getAllJobs(params?: {
  search?: string;
  type?: string;
  location?: string;
  categoryId?: string;
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: string;
}) {
  try {
    const queryParams = new URLSearchParams();
    
    if (params?.search) queryParams.append("search", params.search);
    if (params?.type) queryParams.append("type", params.type);
    if (params?.location) queryParams.append("location", params.location);
    if (params?.categoryId) queryParams.append("categoryId", params.categoryId);
    if (params?.page) queryParams.append("page", params.page.toString());
    if (params?.limit) queryParams.append("limit", params.limit.toString());
    if (params?.sortBy) queryParams.append("sortBy", params.sortBy);
    if (params?.sortOrder) queryParams.append("sortOrder", params.sortOrder);

    const res = await api.get(`/jobs?${queryParams.toString()}`);
    if (!res.success) {
      throw new Error(res.message || "Failed to fetch jobs");
    }
    return res.data;
  } catch (error: any) {
    console.error("Failed to fetch jobs:", error.message);
    throw error;
  }
}

export async function getJobById(id: string) {
  try {
    const res = await api.get(`/jobs/${id}`);
    if (!res.success) {
      throw new Error(res.message || "Failed to fetch job");
    }
    return res.data;
  } catch (error: any) {
    console.error("Failed to fetch job:", error.message);
    throw error;
  }
}

// Company job management
export async function createJob(jobData: any) {
  const accessToken = await getCookie("accessToken");
  const refreshToken = await getCookie("refreshToken");

  if (!accessToken || !refreshToken) {
    throw new Error("Company not authenticated");
  }

  try {
    const res = await api.post("/jobs", jobData);
    if (!res.success) {
      throw new Error(res.message || "Failed to create job");
    }
    return res.data;
  } catch (error: any) {
    console.error("Failed to create job:", error.message);
    throw error;
  }
}

export async function updateJob(id: string, jobData: any) {
  const accessToken = await getCookie("accessToken");
  const refreshToken = await getCookie("refreshToken");

  if (!accessToken || !refreshToken) {
    throw new Error("Company not authenticated");
  }

  try {
    const res = await api.patch(`/jobs/${id}`, jobData);
    if (!res.success) {
      throw new Error(res.message || "Failed to update job");
    }
    return res.data;
  } catch (error: any) {
    console.error("Failed to update job:", error.message);
    throw error;
  }
}

export async function deleteJob(id: string) {
  const accessToken = await getCookie("accessToken");
  const refreshToken = await getCookie("refreshToken");

  if (!accessToken || !refreshToken) {
    throw new Error("Company not authenticated");
  }

  try {
    const res = await api.delete(`/jobs/${id}`);
    if (!res.success) {
      throw new Error(res.message || "Failed to delete job");
    }
    return res.data;
  } catch (error: any) {
    console.error("Failed to delete job:", error.message);
    throw error;
  }
}

// Admin job management
export async function getAllJobsForAdmin(params?: {
  search?: string;
  status?: string;
  page?: number;
  limit?: number;
}) {
  const accessToken = await getCookie("accessToken");
  const refreshToken = await getCookie("refreshToken");

  if (!accessToken || !refreshToken) {
    throw new Error("Admin not authenticated");
  }

  try {
    const queryParams = new URLSearchParams();
    
    if (params?.search) queryParams.append("search", params.search);
    if (params?.status) queryParams.append("status", params.status);
    if (params?.page) queryParams.append("page", params.page.toString());
    if (params?.limit) queryParams.append("limit", params.limit.toString());

    const res = await api.get(`/jobs/admin/all?${queryParams.toString()}`);
    if (!res.success) {
      throw new Error(res.message || "Failed to fetch jobs");
    }
    return res.data;
  } catch (error: any) {
    console.error("Failed to fetch admin jobs:", error.message);
    throw error;
  }
}

export async function updateJobStatus(id: string, status: string) {
  const accessToken = await getCookie("accessToken");
  const refreshToken = await getCookie("refreshToken");

  if (!accessToken || !refreshToken) {
    throw new Error("Admin not authenticated");
  }

  try {
    const res = await api.patch(`/jobs/admin/${id}/status`, { status });
    if (!res.success) {
      throw new Error(res.message || "Failed to update job status");
    }
    return res.data;
  } catch (error: any) {
    console.error("Failed to update job status:", error.message);
    throw error;
  }
}

export async function updateJobByAdmin(id: string, jobData: any) {
  const accessToken = await getCookie("accessToken");
  const refreshToken = await getCookie("refreshToken");

  if (!accessToken || !refreshToken) {
    throw new Error("Admin not authenticated");
  }

  try {
    const res = await api.patch(`/jobs/${id}`, jobData);
    if (!res.success) {
      throw new Error(res.message || "Failed to update job");
    }
    return res.data;
  } catch (error: any) {
    console.error("Failed to update job:", error.message);
    throw error;
  }
}

export async function deleteJobByAdmin(id: string) {
  const accessToken = await getCookie("accessToken");
  const refreshToken = await getCookie("refreshToken");

  if (!accessToken || !refreshToken) {
    throw new Error("Admin not authenticated");
  }

  try {
    const res = await api.delete(`/jobs/${id}`);
    if (!res.success) {
      throw new Error(res.message || "Failed to delete job");
    }
    return res.data;
  } catch (error: any) {
    console.error("Failed to delete job:", error.message);
    throw error;
  }
}
