// Category Interfaces
export interface Category {
  id: string;
  name: string;
  description?: string;
  icon?: string;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
  _count?: {
    jobs: number;
  };
}

export interface CategoryWithJobCount extends Category {
  jobCount: number;
}

// Payload Interfaces
export interface CreateCategoryPayload {
  name: string;
  description?: string;
  icon?: string;
}

export interface UpdateCategoryPayload {
  name?: string;
  description?: string;
  icon?: string;
}
