// Application Status Enum
export enum ApplicationStatus {
  PENDING = "PENDING",
  REVIEWING = "REVIEWING", 
  SHORTLISTED = "SHORTLISTED",
  SCHEDULED = "SCHEDULED",
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED"
}

// Application Interfaces
export interface ApplicationJob {
  id: string;
  title: string;
  company?: ApplicationJobCompany;
}

export interface ApplicationJobCompany {
  id: string;
  name: string;
  logo?: string;
}

export interface ApplicationUser {
  id: string;
  fullName: string;
  email: string;
  profileImage?: string;
}

export interface Application {
  id: string;
  status: ApplicationStatus;
  coverLetter?: string;
  resumeUrl?: string;
  interviewDate?: Date;
  interviewLink?: string;
  jobId: string;
  userId: string;
  companyId: string;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
  job?: ApplicationJob;
  user?: ApplicationUser;
}

export interface ApplicationWithJob extends Application {
  job: ApplicationJob;
}

export interface ApplicationWithUser extends Application {
  user: ApplicationUser;
}

export interface Interview {
  id: string;
  status: ApplicationStatus;
  interviewDate?: Date;
  interviewLink?: string;
  job: {
    title: string;
    company: {
      name: string;
      logo?: string;
    };
  };
  user?: {
    fullName: string;
    email: string;
    profileImage?: string;
  };
}

// Payload Interfaces
export interface ApplyJobPayload {
  coverLetter?: string;
  resumeUrl?: string;
}

export interface UpdateApplicationStatusPayload {
  status: ApplicationStatus;
}

export interface ScheduleInterviewPayload {
  interviewDate: string;
  interviewLink?: string;
}

export interface ApplicationFilterOptions {
  userId?: string;
  jobId?: string;
  status?: ApplicationStatus;
}
