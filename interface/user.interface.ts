export enum UserRole {
  USER = "USER",
  COMPANY = "COMPANY",
  ADMIN = "ADMIN",
}

export enum UserStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  BLOCKED = "BLOCKED",
  BANNED = "BANNED",
  DELETED = "DELETED",
}

export interface IUser {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string | null;
  profileImage: string | null;
  bio: string | null;
  isEmailVerified: true;
  status: UserStatus;
  role: UserRole;
  companyId: string | null;
  isDeleted: false;
  createdAt: string;
  company?: {
    id: string;
    name: string;
    description: string | null;
    website: string | null;
    logo: string | null;
    location: string | null;
    industry: string | null;
    size: string;
    foundedYear: string;
    createdAt: string;
    updatedAt: string;
  };
}
