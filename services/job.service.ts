import { mockCompanies, mockJobs } from "@/data/jobData";
import { Company, Job } from "@/interface/job.interface";


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
