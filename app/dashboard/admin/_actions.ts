"use server";
import {
  createCategory,
  deleteCategory,
  getAllCategories,
  updateCategory,
} from "@/services/category.service";
import {
  deleteCompanyByAdmin,
  getAllCompaniesForAdmin,
  updateCompanyByAdmin,
} from "@/services/company.service";
import { getAdminDashboardStats } from "@/services/dashboard.service";
import {
  deleteJobByAdmin,
  getAllJobsForAdmin,
  updateJobStatus,
} from "@/services/job.service";
import {
  deleteUserById,
  getAllUsers,
  updateUserById,
} from "@/services/user.service";
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
export async function getAllUsersAction(prevState: any, formData: FormData) {
  try {
    const search = formData.get("search") as string;
    const page = parseInt(formData.get("page") as string) || 1;
    const limit = parseInt(formData.get("limit") as string) || 10;

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

export async function updateCompanyStatusAction(
  companyId: string,
  status: string,
) {
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

// Category Management Actions
export async function getAllCategoriesAction() {
  try {
    const categories = await getAllCategories();
    return { success: true, data: categories };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function createCategoryAction(
  prevState: { success: boolean; message: string; error?: string },
  formData: FormData,
) {
  try {
    const categoryData = {
      name: formData.get("name") as string,
      description: formData.get("description") as string,
      icon: formData.get("icon") as string,
    };
    console.log("CategoryData",categoryData)

    await createCategory(categoryData);
    revalidatePath("/dashboard/admin/categories");
    return { success: true, message: "Category created successfully" };
  } catch (error: any) {
    return { success: false, message: "", error: error.message };
  }
}

export async function updateCategoryAction(
  prevState: { success: boolean; message: string; error?: string },
  formData: FormData,
) {
  try {
    const categoryId = formData.get("categoryId") as string;
    const categoryData = {
      name: formData.get("name") as string,
      description: formData.get("description") as string,
      icon: formData.get("icon") as string,
    };

    await updateCategory(categoryId, categoryData);
    revalidatePath("/dashboard/admin/categories");
    return { success: true, message: "Category updated successfully" };
  } catch (error: any) {
    return { success: false, message: "", error: error.message };
  }
}

export async function deleteCategoryAction(categoryId: string) {
  try {
    await deleteCategory(categoryId);
    revalidatePath("/dashboard/admin/categories");
    return { success: true, message: "Category deleted successfully" };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

// Job Management Actions
export async function getAllJobsAction() {
  try {
    const jobs = await getAllJobsForAdmin();
    return { success: true, data: jobs };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function updateJobStatusAction(jobId: string, status: string) {
  try {
    await updateJobStatus(jobId, status);
    revalidatePath("/dashboard/admin/jobs");
    return { success: true, message: "Job status updated successfully" };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function deleteJobAction(jobId: string) {
  try {
    await deleteJobByAdmin(jobId);
    revalidatePath("/dashboard/admin/jobs");
    return { success: true, message: "Job deleted successfully" };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
