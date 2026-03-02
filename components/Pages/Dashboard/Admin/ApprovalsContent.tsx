"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, Building2, Calendar, CheckCircle, Clock, Eye, Filter, Search, User, XCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface ApprovalsContentProps {
  approvals?: any[];
}

const ApprovalsContent = ({ approvals }: ApprovalsContentProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredApprovals = approvals?.filter((approval: any) => {
    const matchesSearch = 
      approval.company?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      approval.job?.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      approval.user?.fullName?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || approval.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "PENDING":
        return "bg-orange-50 text-orange-600 border-orange-100";
      case "APPROVED":
        return "bg-green-50 text-green-600 border-green-100";
      case "REJECTED":
        return "bg-red-50 text-red-600 border-red-100";
      default:
        return "bg-gray-50 text-gray-600 border-gray-100";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "PENDING":
        return <Clock className="w-4 h-4" />;
      case "APPROVED":
        return <CheckCircle className="w-4 h-4" />;
      case "REJECTED":
        return <XCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="font-epilogue p-6 space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <div>
          <h2 className="text-2xl font-extrabold text-[#25324B]">
            Approvals
          </h2>
          <p className="text-gray-500 font-medium text-sm">
            Review and approve job postings and company registrations.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              placeholder="Search approvals..."
              className="pl-10 rounded-none border-gray-200 focus-visible:ring-0 focus-visible:border-primary shadow-none h-11 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="rounded-none border-gray-200 focus-visible:ring-0 focus-visible:border-primary shadow-none h-11 px-4 text-sm"
          >
            <option value="all">All Status</option>
            <option value="PENDING">Pending</option>
            <option value="APPROVED">Approved</option>
            <option value="REJECTED">Rejected</option>
          </select>
          <Button
            variant="outline"
            className="rounded-none border-gray-200 text-[#25324B] font-bold h-11 px-6 flex items-center gap-2"
          >
            <Filter className="w-4 h-4" />
            Filter
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="p-6 border border-gray-100 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pending Approvals</p>
              <p className="text-3xl font-bold text-orange-600 mt-2">
                {filteredApprovals?.filter((a) => a.status === "PENDING").length || 0}
              </p>
            </div>
            <div className="p-3 bg-orange-50 rounded-lg">
              <Clock className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
        <div className="p-6 border border-gray-100 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Approved Today</p>
              <p className="text-3xl font-bold text-green-600 mt-2">
                {filteredApprovals?.filter((a) => a.status === "APPROVED").length || 0}
              </p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
        <div className="p-6 border border-gray-100 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Rejected Today</p>
              <p className="text-3xl font-bold text-red-600 mt-2">
                {filteredApprovals?.filter((a) => a.status === "REJECTED").length || 0}
              </p>
            </div>
            <div className="p-3 bg-red-50 rounded-lg">
              <XCircle className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </div>
        <div className="p-6 border border-gray-100 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Pending</p>
              <p className="text-3xl font-bold text-blue-600 mt-2">
                {filteredApprovals?.length || 0}
              </p>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <Eye className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Approvals List */}
      <div className="bg-white border border-gray-100 rounded-lg">
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-lg font-bold text-[#25324B]">Recent Approvals</h3>
        </div>
        <div className="divide-y divide-gray-50">
          {filteredApprovals?.map((approval) => (
            <div key={approval.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1 space-y-4">
                  {/* Company Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center">
                      {approval.company?.logo ? (
                        <img
                          src={approval.company.logo}
                          alt={approval.company.name}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      ) : (
                        <Building2 className="w-6 h-6 text-gray-400" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#25324B]">{approval.company?.name}</h4>
                      <p className="text-sm text-gray-500">
                        {approval.company?.location || "No location"}
                      </p>
                    </div>
                  </div>

                  {/* Job Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-gray-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#25324B]">{approval.job?.title}</h4>
                      <p className="text-sm text-gray-500">
                        {approval.job?.type} • {approval.job?.location}
                      </p>
                    </div>
                  </div>

                  {/* User Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center">
                      <User className="w-5 h-5 text-gray-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#25324B]">{approval.user?.fullName}</h4>
                      <p className="text-sm text-gray-500">
                        {approval.user?.email}
                      </p>
                    </div>
                  </div>

                  {/* Dates */}
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>Applied: {new Date(approval.createdAt).toLocaleDateString()}</span>
                    {approval.reviewedAt && (
                      <span>• Reviewed: {new Date(approval.reviewedAt).toLocaleDateString()}</span>
                    )}
                  </div>
                </div>

                {/* Status and Actions */}
                <div className="flex flex-col items-end gap-3">
                  <Badge className={`${getStatusColor(approval.status)} flex items-center gap-1`}>
                    {getStatusIcon(approval.status)}
                    {approval.status}
                  </Badge>
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/dashboard/admin/approvals/${approval.id}`}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      <Eye className="w-4 h-4" />
                    </Link>
                    <Button
                      size="sm"
                      className="rounded-none h-8 px-3 text-xs"
                      onClick={() => {/* Handle approval logic */}}
                    >
                      Review
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {(!filteredApprovals || filteredApprovals.length === 0) && (
            <div className="p-12 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-bold text-[#25324B] mb-2">No Approvals Found</h3>
              <p className="text-gray-500 text-sm mb-6">
                No pending approvals at the moment. Check back later for new submissions.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApprovalsContent;
