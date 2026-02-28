import { z } from "zod";

export const jobSchema = z.object({
  title: z.string().min(3, "Job title must be at least 3 characters"),
  category: z.string().min(1, "Please select a category"),
  type: z.string().min(1, "Please select a job type"),
  salary: z.string().min(1, "Salary range is required"),
  location: z.string().min(1, "Location is required"),
  description: z.string().min(20, "Description must be at least 20 characters"),
});

export type JobFormData = z.infer<typeof jobSchema>;
