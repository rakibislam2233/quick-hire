"use client";

import { getAllCompaniesForAdmin } from "@/services/company.service";
import { CheckCircle, Globe, Loader2, Mail, MoreVertical, XCircle } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Company {
  id: string;
  name: string;
  domain: string;
  email: string;
  status: string;
  logo?: string;
  website?: string;
  industry?: string;
  createdAt: string;
}

const AdminCompaniesContent = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const data = await getAllCompaniesForAdmin();
        setCompanies(data.companies || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <p className="text-red-500 font-medium">Error loading companies</p>
          <p className="text-gray-500 text-sm">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="font-epilogue">
      <div className="mb-8">
        <h2 className="text-2xl font-extrabold text-[#25324B]">
          Company Management
        </h2>
        <p className="text-gray-500 font-medium text-sm">
          Verify and manage company accounts.
        </p>
      </div>

      <div className="bg-white border border-gray-100 overflow-hidden shadow-none">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-50 bg-[#F8F9FF]">
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400  tracking-widest">
                  Company
                </th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400  tracking-widest">
                  Website
                </th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400  tracking-widest text-center">
                  Status
                </th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400  tracking-widest text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {companies.map((company) => (
                <tr
                  key={company.id}
                  className="hover:bg-gray-50/50 transition-colors group"
                >
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden">
                        {company.logo ? (
                          <Image
                            src={company.logo}
                            alt={company.name}
                            fill
                            className="object-contain p-2"
                          />
                        ) : (
                          <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                            <Globe className="w-4 h-4 text-gray-400" />
                          </div>
                        )}
                      </div>
                      <div>
                        <span className="block font-bold text-[#25324B] text-sm">
                          {company.name}
                        </span>
                        <div className="flex items-center gap-1 text-[10px] text-gray-400 font-medium lowercase">
                          <Mail className="w-2.5 h-2.5" />
                          {company.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2 text-primary font-bold text-xs cursor-pointer hover:underline underline-offset-4 decoration-2">
                      <Globe className="w-3.5 h-3.5" />
                      {company.domain}
                    </div>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <div className="flex items-center justify-center gap-2">
                      {company.status === "Verified" ? (
                        <span className="flex items-center gap-1 bg-green-50 text-green-600 px-2 py-0.5 rounded text-[10px] font-black ">
                          <CheckCircle className="w-3 h-3" />
                          {company.status}
                        </span>
                      ) : company.status === "Pending" ? (
                        <span className="bg-orange-50 text-orange-600 px-2 py-0.5 rounded text-[10px] font-black ">
                          {company.status}
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 bg-red-50 text-red-600 px-2 py-0.5 rounded text-[10px] font-black ">
                          <XCircle className="w-3 h-3" />
                          {company.status}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="text-gray-300 hover:text-primary transition-colors">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminCompaniesContent;
