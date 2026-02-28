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

export const mockJobs: Job[] = [
  {
    id: "1",
    title: "Senior UI/UX Designer",
    company: "DesignCo",
    location: "San Francisco, CA",
    category: "Design",
    type: "Full-time",
    salary: "$120k - $150k",
    postedAt: "2 days ago",
    description:
      "We are looking for a Senior UI/UX Designer to lead our design team...",
    logo: "/asset/logo/logo.png",
    tags: ["UI", "UX", "Product Design"],
  },
  {
    id: "2",
    title: "Software Engineer",
    company: "TechPulse",
    location: "Remote",
    category: "Engineering",
    type: "Remote",
    salary: "$100k - $130k",
    postedAt: "1 day ago",
    description:
      "Join our Engineering team to build scalable web applications...",
    logo: "/asset/logo/logo.png",
    tags: ["React", "Node.js", "TypeScript"],
  },
  {
    id: "3",
    title: "Marketing Manager",
    company: "Growthly",
    location: "New York, NY",
    category: "Marketing",
    type: "Full-time",
    salary: "$80k - $110k",
    postedAt: "3 days ago",
    description: "Lead our marketing strategies and drive growth...",
    logo: "/asset/logo/logo.png",
    tags: ["SEO", "Content Strategy", "Ads"],
  },
  {
    id: "4",
    title: "Frontend Developer",
    company: "WebFlow Inc",
    location: "London, UK",
    category: "Engineering",
    type: "Contract",
    salary: "$60 - $80 / hour",
    postedAt: "Just now",
    description:
      "Help us build beautiful user interfaces with React and Tailwind...",
    logo: "/asset/logo/logo.png",
    tags: ["Frontend", "Tailwind", "Next.js"],
  },
];
