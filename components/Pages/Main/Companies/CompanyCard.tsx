import { Button } from "@/components/ui/button";
import { Company } from "@/interface/job.interface";
import { Briefcase, MapPin, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CompanyCardProps {
  company: Company;
}

export default function CompanyCard({ company }: CompanyCardProps) {
  return (
    <div className="bg-white border border-gray-100 p-8 flex flex-col items-center text-center group">
      <div className="relative h-20 w-20 mb-6 transition-transform group-hover:scale-105">
        <Image
          src={company.logo}
          alt={company.name}
          fill
          className="object-contain"
        />
      </div>

      <h3 className="text-xl font-bold text-[#25324B] mb-2">{company.name}</h3>
      <div className="px-3 py-1 bg-blue-50 text-primary text-xs font-semibold rounded-full border border-blue-100 mb-6">
        {company.openPositions} Open Positions
      </div>

      <p className="text-gray-500 text-sm line-clamp-2 mb-8 h-10">
        {company.description}
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-500 mb-8 w-full border-t border-gray-50 pt-6">
        <div className="flex items-center gap-1">
          <Briefcase className="w-3.5 h-3.5" />
          <span>{company.industry}</span>
        </div>
        <div className="flex items-center gap-1">
          <MapPin className="w-3.5 h-3.5" />
          <span>{company.location}</span>
        </div>
        <div className="flex items-center gap-1">
          <Users className="w-3.5 h-3.5" />
          <span>{company.employees}</span>
        </div>
      </div>

      <Link href={`/companies/${company.id}`} className="w-full">
        <Button
          variant="outline"
          className="w-full border-primary text-primary rounded-none hover:bg-primary hover:text-white transition-all shadow-none"
        >
          View Company
        </Button>
      </Link>
    </div>
  );
}
