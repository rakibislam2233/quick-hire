export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  category: string;
  type: "Full-time" | "Part-time" | "Remote" | "Contract";
  salary: string;
  postedAt: string;
  description: string;
  logo: string;
  tags: string[];
}

export interface Company {
  id: string;
  name: string;
  industry: string;
  location: string;
  logo: string;
  description: string;
  openPositions: number;
  website: string;
  founded: string;
  employees: string;
}
