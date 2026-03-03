// Job Status and Type Enums
export enum JobStatus {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
  CLOSED = "CLOSED",
}

export enum JobType {
  FULL_TIME = "FULL_TIME",
  PART_TIME = "PART_TIME",
  CONTRACT = "CONTRACT",
  INTERNSHIP = "INTERNSHIP",
  FREELANCE = "FREELANCE",
}

// Job Response Interfaces
export interface JobCompany {
  id: string;
  name: string;
  logo?: string;
  location?: string;
}

export interface JobCategory {
  id: string;
  name: string;
  icon?: string;
}

export interface JobApplicationCount {
  applications: number;
}

export interface Job {
  id: string;
  title: string;
  description: string;
  requirements?: string;
  responsibilities?: string;
  salary?: string;
  salaryRange?: string;
  location: string;
  type: JobType;
  status: JobStatus;
  deadline: Date;
  companyId: string;
  categoryId: string;
  creatorId: string;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
  company?: JobCompany;
  category?: JobCategory;
  _count?: JobApplicationCount;
}

export interface JobWithDetails extends Job {
  company: JobCompany;
  category: JobCategory;
  _count: JobApplicationCount;
}

// Payload Interfaces
export interface CreateJobPayload {
  title: string;
  description: string;
  requirements?: string;
  responsibilities?: string;
  salaryRange?: string;
  location?: string;
  type?: JobType;
  categoryId: string;
  companyId: string;
}

export interface UpdateJobPayload {
  title?: string;
  description?: string;
  requirements?: string;
  responsibilities?: string;
  salaryRange?: string;
  location?: string;
  type?: JobType;
  categoryId?: string;
  tags?: string[];
}

export interface JobFilterOptions {
  search?: string;
  type?: JobType;
  location?: string;
  categoryId?: string;
}

export interface JobAdminFilterOptions {
  search?: string;
  status?: JobStatus;
}
