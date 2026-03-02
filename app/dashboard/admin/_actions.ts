"use server";

import { getAdminDashboardStats } from "@/services/dashboard.service";
import { getAllUsers, deleteUserById, updateUserById } from "@/services/user.service";
import { getAllCompaniesForAdmin, deleteCompanyByAdmin, updateCompanyByAdmin } from "@/services/company.service";
import { revalidatePath } from "next/cache";

// Admin Dashboard Stats Action
export async function getAdminDashboardStatsAction() {
  try {
    const stats = await getAdminDashboardStats();
    return { success: true, data: stats };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

// User Management Actions
export async function getAllUsersAction(search?: string, page = 1, limit = 10) {
  try {
    const users = await getAllUsers(search, page, limit);
    return { success: true, data: users };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function updateUserStatusAction(userId: string, status: string) {
  try {
    await updateUserById(userId, { status });
    revalidatePath("/dashboard/admin/users");
    return { success: true, message: "User status updated successfully" };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function deleteUserAction(userId: string) {
  try {
    await deleteUserById(userId);
    revalidatePath("/dashboard/admin/users");
    return { success: true, message: "User deleted successfully" };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

// Company Management Actions
export async function getAllCompaniesAction() {
  try {
    const companies = await getAllCompaniesForAdmin();
    return { success: true, data: companies };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function updateCompanyStatusAction(companyId: string, status: string) {
  try {
    await updateCompanyByAdmin(companyId, new FormData());
    revalidatePath("/dashboard/admin/companies");
    return { success: true, message: "Company status updated successfully" };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function deleteCompanyAction(companyId: string) {
  try {
    await deleteCompanyByAdmin(companyId);
    revalidatePath("/dashboard/admin/companies");
    return { success: true, message: "Company deleted successfully" };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
