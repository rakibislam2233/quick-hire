"use client";

import { CheckCircle, Globe, Mail, MoreVertical, XCircle } from "lucide-react";
import Image from "next/image";

const AdminCompaniesContent = () => {
  const companies = [
    {
      id: 1,
      name: "Nomad",
      domain: "nomad.com",
      email: "contact@nomad.com",
      status: "Verified",
      logo: "/asset/logo/logo.png",
    },
    {
      id: 2,
      name: "Dropbox",
      domain: "dropbox.com",
      email: "hr@dropbox.com",
      status: "Pending",
      logo: "/asset/logo/logo.png",
    },
    {
      id: 3,
      name: "Spotify",
      domain: "spotify.com",
      email: "jobs@spotify.com",
      status: "Verified",
      logo: "/asset/logo/logo.png",
    },
    {
      id: 4,
      name: "Skynet",
      domain: "skynet.net",
      email: "admin@skynet.net",
      status: "Rejected",
      logo: "/asset/logo/logo.png",
    },
  ];

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
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  Company
                </th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  Website
                </th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">
                  Status
                </th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">
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
                      <div className="w-10 h-10 border border-gray-100 p-2 relative shrink-0">
                        <Image
                          src={company.logo}
                          alt={company.name}
                          fill
                          className="object-contain p-1"
                        />
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
                        <span className="flex items-center gap-1 bg-green-50 text-green-600 px-2 py-0.5 rounded text-[10px] font-black uppercase">
                          <CheckCircle className="w-3 h-3" />
                          {company.status}
                        </span>
                      ) : company.status === "Pending" ? (
                        <span className="bg-orange-50 text-orange-600 px-2 py-0.5 rounded text-[10px] font-black uppercase">
                          {company.status}
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 bg-red-50 text-red-600 px-2 py-0.5 rounded text-[10px] font-black uppercase">
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
