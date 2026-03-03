import { z } from "zod";

export const jobSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  requirements: z.string().min(1, "Requirements are required"),
  responsibilities: z.string().min(1, "Responsibilities are required"),
  salaryRange: z.string().min(1, "Salary range is required"),
  location: z.string().min(1, "Location is required"),
  deadline: z.string().min(1, "Application deadline is required"),
  type: z.enum(['FULL_TIME', 'PART_TIME', 'CONTRACT', 'INTERNSHIP', 'FREELANCE']).default('FULL_TIME'),
  categoryId: z.string().min(1, "Category ID is required"),
});

export type JobFormData = z.infer<typeof jobSchema>;
