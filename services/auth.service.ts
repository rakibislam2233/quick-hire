"use server";

import {
  forgotPasswordValidationSchema,
  loginValidationSchema,
  registerValidationSchema,
  resetPasswordValidationSchema,
  verifyOtpValidationSchema,
} from "@/validation/auth.validation";
import { api } from "./api";

export type ActionState = {
  success?: boolean;
  message?: string;
  errors?: Record<string, string[]>;
  data?: any;
};

export async function loginAction(
  prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const data = Object.fromEntries(formData.entries());

  const validated = loginValidationSchema.safeParse(data);
  if (!validated.success) {
    return { success: false, errors: validated.error.flatten().fieldErrors };
  }

  const response = await api.post("/auth/login", validated.data);

  if (!response.success) {
    return { success: false, message: response.message };
  }

  return { success: true, message: "Login successful", data: response.data };
}

export async function registerAction(
  prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const data = Object.fromEntries(formData.entries());

  const validated = registerValidationSchema.safeParse(data);
  if (!validated.success) {
    return { success: false, errors: validated.error.flatten().fieldErrors };
  }

  // Assuming backend expects firstName and lastName or fullName
  const response = await api.post("/auth/register", validated.data);

  if (!response.success) {
    return { success: false, message: response.message };
  }

  return {
    success: true,
    message: "Registration successful. Please verify your email.",
  };
}

export async function forgotPasswordAction(
  prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const data = Object.fromEntries(formData.entries());

  const validated = forgotPasswordValidationSchema.safeParse(data);
  if (!validated.success) {
    return { success: false, errors: validated.error.flatten().fieldErrors };
  }

  const response = await api.post("/auth/forgot-password", validated.data);

  if (!response.success) {
    return { success: false, message: response.message };
  }

  return { success: true, message: "Password reset link sent to your email." };
}

export async function verifyOtpAction(
  prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const data = Object.fromEntries(formData.entries());

  const validated = verifyOtpValidationSchema.safeParse(data);
  if (!validated.success) {
    return { success: false, errors: validated.error.flatten().fieldErrors };
  }

  // usually needs email too, which can be passed via a hidden field
  const response = await api.post("/auth/verify-otp", validated.data);

  if (!response.success) {
    return { success: false, message: response.message };
  }

  return { success: true, message: "OTP verified successfully." };
}

export async function resetPasswordAction(
  prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const data = Object.fromEntries(formData.entries());

  const validated = resetPasswordValidationSchema.safeParse(data);
  if (!validated.success) {
    return { success: false, errors: validated.error.flatten().fieldErrors };
  }

  // Assuming there's a token or email passed as hidden field
  const response = await api.post("/auth/reset-password", validated.data);

  if (!response.success) {
    return { success: false, message: response.message };
  }

  return { success: true, message: "Password reset successfully." };
}
