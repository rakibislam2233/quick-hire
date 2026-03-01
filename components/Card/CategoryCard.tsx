import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ElementType } from "react";

interface Category {
  title: string;
  jobs: number;
  icon: ElementType;
  isActive: boolean;
}

const CategoryCard = ({ category }: { category: Category }) => {
  return (
    <Link
      href={`/jobs?category=${category.title.toLowerCase()}`}
      key={category.title}
      className={`group flex items-start gap-0 p-4 md:p-8 pt-10 border transition-all duration-300 ${
        category.isActive
          ? "bg-primary border-primary text-white shadow-xl hover:-translate-y-1"
          : "bg-white border-[#D6DDEB] hover:shadow-lg hover:-translate-y-1 "
      }`}
    >
      <div className="flex flex-row md:flex-col justify-between gap-6 md:gap-8 w-full h-full">
        <category.icon strokeWidth={1.5} className={`w-10 h-10 ${category.isActive ? "text-white" : "text-primary"}`} />
        <div className="w-full">
          <h3
            className={`text-xl font-semibold mb-3 font-sans ${
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
      </div>
    </Link>
  );
};

export default CategoryCard;
