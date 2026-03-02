// Saved Job Interfaces
export interface SavedJobJob {
  id: string;
  title: string;
  description: string;
  requirements?: string;
  responsibilities?: string;
  salary?: string;
  location: string;
  type: string;
  status: string;
  deadline: Date;
  companyId: string;
  categoryId: string;
  creatorId: string;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
  company?: SavedJobCompany;
}

export interface SavedJobCompany {
  id: string;
  name: string;
  logo?: string;
}

export interface SavedJob {
  id: string;
  jobId: string;
  userId: string;
  createdAt: Date;
  job?: SavedJobJob;
}

export interface SavedJobWithDetails extends SavedJob {
  job: SavedJobJob;
}

// Response Interface
export interface ToggleSaveJobResult {
  saved: boolean;
}
