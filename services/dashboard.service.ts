"use server";
import { getCookie } from "@/utils/tokenHandlers";
import { api } from "./api";

// Admin dashboard
export async function getAdminDashboardStats() {
  const accessToken = await getCookie("accessToken");
  const refreshToken = await getCookie("refreshToken");

  if (!accessToken || !refreshToken) {
    throw new Error("Admin not authenticated");
  }

  try {
    const res = await api.get("/dashboard/admin");
    if (!res.success) {
      throw new Error(res.message || "Failed to fetch admin dashboard stats");
    }
    return res.data;
  } catch (error: any) {
    console.error("Failed to fetch admin dashboard:", error.message);
    throw error;
  }
}

// User dashboard
export async function getUserDashboardStats() {
  const accessToken = await getCookie("accessToken");
  const refreshToken = await getCookie("refreshToken");

  if (!accessToken || !refreshToken) {
    throw new Error("User not authenticated");
  }

  try {
    const res = await api.get("/dashboard/user");
    if (!res.success) {
      throw new Error(res.message || "Failed to fetch user dashboard stats");
    }
    return res.data;
  } catch (error: any) {
    console.error("Failed to fetch user dashboard:", error.message);
    throw error;
  }
}

// Company dashboard
export async function getCompanyDashboardStats() {
  const accessToken = await getCookie("accessToken");
  const refreshToken = await getCookie("refreshToken");

  if (!accessToken || !refreshToken) {
    throw new Error("Company not authenticated");
  }

  try {
    const res = await api.get("/dashboard/company");
    if (!res.success) {
      throw new Error(res.message || "Failed to fetch company dashboard stats");
    }
    return res.data;
  } catch (error: any) {
    console.error("Failed to fetch company dashboard:", error.message);
    throw error;
  }
}
