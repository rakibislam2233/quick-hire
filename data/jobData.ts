import { Company, Job } from "@/interface/job.interface";

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

export const mockCompanies: Company[] = [
  {
    id: "c1",
    name: "DesignCo",
    industry: "Design",
    location: "San Francisco, CA",
    logo: "/asset/logo/logo.png",
    description:
      "DesignCo is a leading design agency specializing in digital product experiences...",
    openPositions: 1,
    website: "https://designco.com",
    founded: "2015",
    employees: "50 - 100",
  },
  {
    id: "c2",
    name: "TechPulse",
    industry: "Engineering",
    location: "Remote",
    logo: "/asset/logo/logo.png",
    description:
      "TechPulse is a technology company building the next generation of web infrastructure...",
    openPositions: 1,
    website: "https://techpulse.io",
    founded: "2018",
    employees: "100 - 250",
  },
  {
    id: "c3",
    name: "Growthly",
    industry: "Marketing",
    location: "New York, NY",
    logo: "/asset/logo/logo.png",
    description:
      "Growthly helps startups and enterprises scale their marketing efforts through data-driven strategies...",
    openPositions: 1,
    website: "https://growthly.marketing",
    founded: "2012",
    employees: "20 - 50",
  },
  {
    id: "c4",
    name: "WebFlow Inc",
    industry: "Engineering",
    location: "London, UK",
    logo: "/asset/logo/logo.png",
    description:
      "WebFlow Inc is a web development company focused on building high-performance websites for clients worldwide...",
    openPositions: 1,
    website: "https://webflowinc.com",
    founded: "2020",
    employees: "10 - 20",
  },
];
