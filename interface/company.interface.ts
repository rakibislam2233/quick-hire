// Company Interfaces
export interface CompanyJobCount {
  jobs: number;
}

export interface Company {
  id: string;
  name: string;
  description?: string;
  website?: string;
  logo?: string;
  industry?: string;
  size?: string;
  location?: string;
  foundedYear?: number;
  ownerId: string;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
  _count?: CompanyJobCount;
}

export interface CompanyWithDetails extends Company {
  _count: CompanyJobCount;
}

// Payload Interfaces
export interface CreateCompanyPayload {
  name: string;
  description?: string;
  website?: string;
  logo?: string;
  location?: string;
  industry?: string;
  size?: string;
  foundedYear?: number;
}

export interface UpdateCompanyPayload {
  name?: string;
  description?: string;
  website?: string;
  logo?: string;
  location?: string;
  industry?: string;
  size?: string;
  foundedYear?: number;
}

export interface CompanyFilterOptions {
  search?: string;
  location?: string;
  industry?: string;
}
