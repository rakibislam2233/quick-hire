"use client";
import { UserRole } from "@/interface/user.interface";
import { getAllUsers } from "@/services/user.service";
import { Loader2, Mail, MoreVertical, Shield, User } from "lucide-react";
import { useEffect, useState } from "react";

interface User {
  id: string;
  fullName: string;
  email: string;
  role: UserRole;
  status: string;
  createdAt: string;
}

const AdminUsersContent = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getAllUsers();
        setUsers(data.users || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
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
          <p className="text-red-500 font-medium">Error loading users</p>
          <p className="text-gray-500 text-sm">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="font-epilogue">
      <div className="mb-8">
        <h2 className="text-2xl font-extrabold text-[#25324B]">
          User Management
        </h2>
        <p className="text-gray-500 font-medium text-sm">
          Monitor and manage all platform users.
        </p>
      </div>

      <div className="bg-white border border-gray-100 overflow-hidden shadow-none">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-50 bg-[#F8F9FF]">
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400  tracking-widest">
                  User
                </th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400  tracking-widest">
                  Role
                </th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400  tracking-widest text-center">
                  Status
                </th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400  tracking-widest text-center">
                  Joined Date
                </th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400  tracking-widest text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-gray-50/50 transition-colors group"
                >
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-[#25324B] font-bold text-xs ring-4 ring-white">
                        {user.fullName[0]}
                      </div>
                      <div>
                        <span className="block font-bold text-[#25324B] text-sm">
                          {user.fullName}
                        </span>
                        <div className="flex items-center gap-1 text-[10px] text-gray-400 font-medium lowercase">
                          <Mail className="w-2.5 h-2.5" />
                          {user.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      {user.role === UserRole.COMPANY ? (
                        <Shield className="w-3.5 h-3.5 text-primary" />
                      ) : user.role === UserRole.ADMIN ? (
                        <Shield className="w-3.5 h-3.5 text-red-600" />
                      ) : (
                        <User className="w-3.5 h-3.5 text-gray-400" />
                      )}
                      <span className="text-xs font-bold text-[#25324B]">
                        {user.role === UserRole.COMPANY ? "Company Admin" : 
                         user.role === UserRole.ADMIN ? "Admin" : "User"}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <span
                      className={`px-2.5 py-0.5 rounded text-[10px] font-black  ${
                        user.status === "ACTIVE"
                          ? "bg-green-50 text-green-600"
                          : user.status === "PENDING"
                            ? "bg-orange-50 text-orange-600"
                            : "bg-red-50 text-red-600"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-center text-xs font-medium text-gray-500">
                    {new Date(user.createdAt).toLocaleDateString()}
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

export default AdminUsersContent;
