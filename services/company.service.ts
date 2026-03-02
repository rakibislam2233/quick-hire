"use server";
import { getCookie } from "@/utils/tokenHandlers";
import { api } from "./api";

// Public company APIs
export async function getAllCompanies() {
  try {
    const res = await api.get("/companies");
    if (!res.success) {
      throw new Error(res.message || "Failed to fetch companies");
    }
    return res.data;
  } catch (error: any) {
    console.error("Failed to fetch companies:", error.message);
    throw error;
  }
}

export async function getCompanyById(id: string) {
  try {
    const res = await api.get(`/companies/${id}`);
    if (!res.success) {
      throw new Error(res.message || "Failed to fetch company");
    }
    return res.data;
  } catch (error: any) {
    console.error("Failed to fetch company:", error.message);
    throw error;
  }
}

// Company profile management
export async function createCompany(companyData: FormData) {
  const accessToken = await getCookie("accessToken");
  const refreshToken = await getCookie("refreshToken");

  if (!accessToken || !refreshToken) {
    throw new Error("User not authenticated");
  }

  try {
    const res = await api.post("/companies", companyData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (!res.success) {
      throw new Error(res.message || "Failed to create company");
    }
    return res.data;
  } catch (error: any) {
    console.error("Failed to create company:", error.message);
    throw error;
  }
}

export async function updateCompany(id: string, companyData: FormData) {
  const accessToken = await getCookie("accessToken");
  const refreshToken = await getCookie("refreshToken");

  if (!accessToken || !refreshToken) {
    throw new Error("User not authenticated");
  }

  try {
    const res = await api.patch(`/companies/${id}`, companyData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (!res.success) {
      throw new Error(res.message || "Failed to update company");
    }
    return res.data;
  } catch (error: any) {
    console.error("Failed to update company:", error.message);
    throw error;
  }
}

// Admin company management
export async function getAllCompaniesForAdmin() {
  const accessToken = await getCookie("accessToken");
  const refreshToken = await getCookie("refreshToken");

  if (!accessToken || !refreshToken) {
    throw new Error("Admin not authenticated");
  }

  try {
    const res = await api.get("/companies");
    if (!res.success) {
      throw new Error(res.message || "Failed to fetch companies");
    }
    return res.data;
  } catch (error: any) {
    console.error("Failed to fetch admin companies:", error.message);
    throw error;
  }
}

export async function getCompanyByIdForAdmin(id: string) {
  const accessToken = await getCookie("accessToken");
  const refreshToken = await getCookie("refreshToken");

  if (!accessToken || !refreshToken) {
    throw new Error("Admin not authenticated");
  }

  try {
    const res = await api.get(`/companies/${id}`);
    if (!res.success) {
      throw new Error(res.message || "Failed to fetch company");
    }
    return res.data;
  } catch (error: any) {
    console.error("Failed to fetch admin company:", error.message);
    throw error;
  }
}

export async function createCompanyByAdmin(companyData: FormData) {
  const accessToken = await getCookie("accessToken");
  const refreshToken = await getCookie("refreshToken");

  if (!accessToken || !refreshToken) {
    throw new Error("Admin not authenticated");
  }

  try {
    const res = await api.post("/companies", companyData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (!res.success) {
      throw new Error(res.message || "Failed to create company");
    }
    return res.data;
  } catch (error: any) {
    console.error("Failed to create admin company:", error.message);
    throw error;
  }
}

export async function updateCompanyByAdmin(id: string, companyData: FormData) {
  const accessToken = await getCookie("accessToken");
  const refreshToken = await getCookie("refreshToken");

  if (!accessToken || !refreshToken) {
    throw new Error("Admin not authenticated");
  }

  try {
    const res = await api.patch(`/companies/${id}`, companyData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (!res.success) {
      throw new Error(res.message || "Failed to update company");
    }
    return res.data;
  } catch (error: any) {
    console.error("Failed to update admin company:", error.message);
    throw error;
  }
}

export async function deleteCompanyByAdmin(id: string) {
  const accessToken = await getCookie("accessToken");
  const refreshToken = await getCookie("refreshToken");

  if (!accessToken || !refreshToken) {
    throw new Error("Admin not authenticated");
  }

  try {
    const res = await api.delete(`/companies/${id}`);
    if (!res.success) {
      throw new Error(res.message || "Failed to delete company");
    }
    return res.data;
  } catch (error: any) {
    console.error("Failed to delete admin company:", error.message);
    throw error;
  }
}
