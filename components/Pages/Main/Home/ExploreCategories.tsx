import {
  ArrowRight,
  BarChart,
  Briefcase,
  Code,
  Megaphone,
  Monitor,
  PenTool,
  Users,
  Wallet,
} from "lucide-react";
import Link from "next/link";

const categories = [
  {
    title: "Design",
    jobs: 235,
    icon: PenTool,
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
    icon: Megaphone,
    isActive: true,
  },
  {
    title: "Finance",
    jobs: 325,
    icon: Wallet,
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
    icon: Code,
    isActive: false,
  },
  {
    title: "Business",
    jobs: 211,
    icon: Briefcase,
    isActive: false,
  },
  {
    title: "Human Resource",
    jobs: 346,
    icon: Users,
    isActive: false,
  },
];

const ExploreCategories = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="w-full container mx-auto px-5 md:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#25324B]">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              href={`/jobs?category=${category.title.toLowerCase()}`}
              key={category.title}
              className={`group flex items-start gap-0 p-8 pt-10 border transition-all duration-300 ${
                category.isActive
                  ? "bg-primary border-primary text-white shadow-xl hover:-translate-y-1"
                  : "bg-white border-gray-100/60 hover:border-primary/20 hover:shadow-lg hover:-translate-y-1"
              }`}
            >
              <div className="flex flex-col w-full h-full">
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-lg mb-8 ${
                    category.isActive ? "text-white" : "text-primary"
                  }`}
                >
                  <category.icon strokeWidth={1.5} className="w-10 h-10" />
                </div>
                <h3
                  className={`text-xl font-bold mb-3 font-sans ${
                    category.isActive ? "text-white" : "text-[#25324B]"
                  }`}
                >
                  {category.title}
                </h3>
                <div className="flex items-center justify-between w-full mt-auto">
                  <p
                    className={`text-base font-epilogue flex items-center gap-4 w-full ${
                      category.isActive ? "text-blue-100" : "text-slate-500"
                    }`}
                  >
                    {category.jobs} jobs available
                    <ArrowRight
                      className={`w-5 h-5 ml-auto transition-transform group-hover:translate-x-1 ${category.isActive ? "text-white" : "text-[#25324B]"}`}
                    />
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreCategories;
