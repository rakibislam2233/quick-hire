"use client";

import CompanyCard from "@/components/Pages/Main/Companies/CompanyCard";
import CompanyFilters from "@/components/Pages/Main/Companies/CompanyFilters";
import { Company } from "@/interface/job.interface";
import { getAllCompanies } from "@/services/job.service";
import { useEffect, useMemo, useState } from "react";

export default function CompaniesPageContent() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [search, setSearch] = useState("");
  const [industry, setIndustry] = useState("All");

  useEffect(() => {
    const fetchCompanies = async () => {
      const data = await getAllCompanies();
      setCompanies(data);
    };
    fetchCompanies();
  }, []);

  const filteredCompanies = useMemo(() => {
    return companies.filter((company) => {
      const matchesSearch = company.name
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesIndustry =
        industry === "All" || company.industry === industry;

      return matchesSearch && matchesIndustry;
    });
  }, [companies, search, industry]);

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16 font-epilogue">
      <div className="container mx-auto px-6 md:px-16">
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-[#25324B] mb-2 tracking-tighter">
            Browse Companies
          </h1>
          <p className="text-gray-500 text-lg">
            Find the best companies to work for and see their open positions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <CompanyFilters
                onSearchChange={setSearch}
                onIndustryChange={setIndustry}
              />
            </div>
          </div>

          {/* Company Listings */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between bg-white border border-gray-100 p-4 mb-6 shadow-none">
              <span className="text-gray-600 font-medium font-epilogue">
                Showing{" "}
                <span className="text-primary font-bold">
                  {filteredCompanies.length}
                </span>{" "}
                companies
              </span>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Sort by:</span>
                <select className="text-sm font-semibold text-gray-700 bg-transparent border-none focus:ring-0 cursor-pointer">
                  <option>Popular</option>
                  <option>Newest</option>
                  <option>Most Openings</option>
                </select>
              </div>
            </div>

            {filteredCompanies.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredCompanies.map((company) => (
                  <CompanyCard key={company.id} company={company} />
                ))}
              </div>
            ) : (
              <div className="bg-white border border-gray-100 p-16 text-center w-full shadow-none">
                <p className="text-gray-500 text-lg">
                  No companies found matching your criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
