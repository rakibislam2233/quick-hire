"use server";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ActionState } from "@/interface/action-state.interface";
import { getCookie } from "@/utils/tokenHandlers";
import { revalidateTag } from "next/cache";
import { api } from "./api";

export type UserActionState = ActionState;

export async function getMyProfile() {
  const accessToken = await getCookie("accessToken");
  const refreshToken = await getCookie("refreshToken");
  if (!accessToken && !refreshToken) {
    return null;
  }
  try {
    const res = await api.get("/users/profile/me", {
      next: {
        tags: ["profile"],
        revalidate: 180, // 3 minutes
      },
    });
    if (!res.success) {
      console.error("Profile fetch failed:", res.message);
      return null;
    }
    return res.data;
  } catch (error: any) {
    console.error("Failed to fetch profile:", error.message);
    return null;
  }
}

export async function updateMyProfile(data: any) {
  const accessToken = await getCookie("accessToken");
  const refreshToken = await getCookie("refreshToken");

  if (!accessToken || !refreshToken) {
    throw new Error("User not authenticated");
  }

  try {
    const res = await api.patch("/users/profile/me", data);
    if (!res.success) {
      throw new Error(res.message || "Failed to update profile");
    }
    revalidateTag("profile", { expire: 0 });
    return res.data;
  } catch (error: any) {
    console.error("Failed to update profile:", error.message);
    throw error;
  }
}

export async function deleteMyProfile() {
  const accessToken = await getCookie("accessToken");
  const refreshToken = await getCookie("refreshToken");

  if (!accessToken || !refreshToken) {
    throw new Error("User not authenticated");
  }

  try {
    const res = await api.delete("/users/profile/me");
    if (!res.success) {
      throw new Error(res.message || "Failed to delete profile");
    }
    return res.data;
  } catch (error: any) {
    console.error("Failed to delete profile:", error.message);
    throw error;
  }
}

// Admin functions
export async function getAllUsers(search?: string, page = 1, limit = 10) {
  const accessToken = await getCookie("accessToken");
  const refreshToken = await getCookie("refreshToken");

  if (!accessToken || !refreshToken) {
    throw new Error("Admin not authenticated");
  }

  try {
    const queryParams = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
    });

    if (search) {
      queryParams.append("search", search);
    }

    const res = await api.get(`/users?${queryParams.toString()}`);
    if (!res.success) {
      throw new Error(res.message || "Failed to fetch users");
    }
    return res.data;
  } catch (error: any) {
    console.error("Failed to fetch users:", error.message);
    throw error;
  }
}

export async function getUserById(id: string) {
  const accessToken = await getCookie("accessToken");
  const refreshToken = await getCookie("refreshToken");

  if (!accessToken || !refreshToken) {
    throw new Error("Admin not authenticated");
  }

  try {
    const res = await api.get(`/users/${id}`);
    if (!res.success) {
      throw new Error(res.message || "Failed to fetch user");
    }
    return res.data;
  } catch (error: any) {
    console.error("Failed to fetch user:", error.message);
    throw error;
  }
}

export async function updateUserById(id: string, data: any) {
  const accessToken = await getCookie("accessToken");
  const refreshToken = await getCookie("refreshToken");

  if (!accessToken || !refreshToken) {
    throw new Error("Admin not authenticated");
  }

  try {
    const res = await api.patch(`/users/${id}`, data);
    if (!res.success) {
      throw new Error(res.message || "Failed to update user");
    }
    return res.data;
  } catch (error: any) {
    console.error("Failed to update user:", error.message);
    throw error;
  }
}

export async function deleteUserById(id: string) {
  const accessToken = await getCookie("accessToken");
  const refreshToken = await getCookie("refreshToken");

  if (!accessToken || !refreshToken) {
    throw new Error("Admin not authenticated");
  }

  try {
    const res = await api.delete(`/users/${id}`);
    if (!res.success) {
      throw new Error(res.message || "Failed to delete user");
    }
    return res.data;
  } catch (error: any) {
    console.error("Failed to delete user:", error.message);
    throw error;
  }
}
