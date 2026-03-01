import CategoryCard from "@/components/Card/CategoryCard";
import { ArrowRight, BarChart, Monitor } from "lucide-react";
import Link from "next/link";
import { HiOutlineBriefcase } from "react-icons/hi";
import { HiOutlineMegaphone } from "react-icons/hi2";
import { IoCodeSlash } from "react-icons/io5";
import { LuPencilRuler } from "react-icons/lu";
import { PiMoneyLight, PiUsersThree } from "react-icons/pi";

const categories = [
  {
    title: "Design",
    jobs: 235,
    icon: LuPencilRuler,
    isActive: false,
  },
  {
    title: "Sales",
    jobs: 756,
    icon: BarChart,
    isActive: false,
  },
  {
    title: "Marketing",
    jobs: 140,
    icon: HiOutlineMegaphone,
    isActive: true,
  },
  {
    title: "Finance",
    jobs: 325,
    icon: PiMoneyLight,
    isActive: false,
  },
  {
    title: "Technology",
    jobs: 436,
    icon: Monitor,
    isActive: false,
  },
  {
    title: "Engineering",
    jobs: 542,
    icon: IoCodeSlash,
    isActive: false,
  },
  {
    title: "Business",
    jobs: 211,
    icon: HiOutlineBriefcase,
    isActive: false,
  },
  {
    title: "Human Resource",
    jobs: 346,
    icon: PiUsersThree,
    isActive: false,
  },
];

const ExploreCategories = () => {
  return (
    <section className="w-full bg-white py-10 md:py-16 ">
      <div className="w-full container mx-auto px-5 md:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#25324B]">
            Explore by <span className="text-[#26A4FF]">category</span>
          </h2>
          <Link
            href="/jobs"
            className="flex items-center text-primary font-epilogue font-semibold hover:text-blue-700 transition-colors group"
          >
            Show all jobs
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreCategories;
