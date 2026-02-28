import { mockCompanies, mockJobs } from "@/data/jobData";
import { Company, Job } from "@/interface/job.interface";

// This service will handle all job and company related API calls
// In a real application, these would use fetch() or a library like axios/api instance

export const getAllJobs = async (): Promise<Job[]> => {
  return mockJobs;
};

export const getJobById = async (id: string): Promise<Job | undefined> => {
  return mockJobs.find((job) => job.id === id);
};

export const getAllCompanies = async (): Promise<Company[]> => {
  return mockCompanies;
};

export const getCompanyById = async (
  id: string,
): Promise<Company | undefined> => {
  return mockCompanies.find((company) => company.id === id);
};
