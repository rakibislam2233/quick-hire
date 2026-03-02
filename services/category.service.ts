/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { getCookie } from "@/utils/tokenHandlers";
import { api } from "./api";

// Public category APIs
export async function getAllCategories() {
  try {
    const res = await api.get("/categories");
    if (!res.success) {
      throw new Error(res.message || "Failed to fetch categories");
    }
    return res.data;
  } catch (error: any) {
    console.error("Failed to fetch categories:", error.message);
    throw error;
  }
}

export async function getCategoryById(id: string) {
  try {
    const res = await api.get(`/categories/${id}`);
    if (!res.success) {
      throw new Error(res.message || "Failed to fetch category");
    }
    return res.data;
  } catch (error: any) {
    console.error("Failed to fetch category:", error.message);
    throw error;
  }
}

// Admin category management
export async function createCategory(categoryData: {
  name: string;
  icon?: string;
}) {
  const accessToken = await getCookie("accessToken");
  const refreshToken = await getCookie("refreshToken");

  if (!accessToken || !refreshToken) {
    throw new Error("Admin not authenticated");
  }

  try {
    const res = await api.post("/categories", categoryData);
    if (!res.success) {
      throw new Error(res.message || "Failed to create category");
    }
    return res.data;
  } catch (error: any) {
    console.error("Failed to create category:", error.message);
    throw error;
  }
}

export async function updateCategory(id: string, categoryData: {
  name?: string;
  icon?: string;
}) {
  const accessToken = await getCookie("accessToken");
  const refreshToken = await getCookie("refreshToken");

  if (!accessToken || !refreshToken) {
    throw new Error("Admin not authenticated");
  }

  try {
    const res = await api.patch(`/categories/${id}`, categoryData);
    if (!res.success) {
      throw new Error(res.message || "Failed to update category");
    }
    return res.data;
  } catch (error: any) {
    console.error("Failed to update category:", error.message);
    throw error;
  }
}

export async function deleteCategory(id: string) {
  const accessToken = await getCookie("accessToken");
  const refreshToken = await getCookie("refreshToken");

  if (!accessToken || !refreshToken) {
    throw new Error("Admin not authenticated");
  }

  try {
    const res = await api.delete(`/categories/${id}`);
    if (!res.success) {
      throw new Error(res.message || "Failed to delete category");
    }
    return res.data;
  } catch (error: any) {
    console.error("Failed to delete category:", error.message);
    throw error;
  }
}
