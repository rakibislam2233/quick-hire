import z from "zod";

export const loginValidationSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "Password must be at least 6 characters long"),
});

export const registerValidationSchema = z.object({
  fullName: z
    .string()
    .min(1, "Full Name is required")
    .min(2, "Name is too short"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "Password must be at least 6 characters"),
  role: z.enum(["candidate", "employer"]),
});

export const forgotPasswordValidationSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
});

export const verifyOtpValidationSchema = z.object({
  otp: z.string().min(1, "OTP is required").min(4, "Invalid OTP length"),
});

export const resetPasswordValidationSchema = z
  .object({
    password: z
      .string()
      .min(1, "Password is required")
      .min(6, "Password must be at least 6 characters long"),
    confirmPassword: z.string().min(1, "Confirmation is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
