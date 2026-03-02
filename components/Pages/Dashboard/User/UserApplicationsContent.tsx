import {
  Application,
  ApplicationStatus,
} from "@/interface/application.interface";
import {
  AlertCircle,
  Briefcase,
  Building,
  Calendar,
  CheckCircle,
  Clock,
  Send,
  XCircle,
} from "lucide-react";
import Image from "next/image";

interface UserApplicationsContentProps {
  applications?: Application[];
}

const UserApplicationsContent = ({
  applications,
}: UserApplicationsContentProps) => {
  const getStatusIcon = (status: ApplicationStatus) => {
    switch (status) {
      case ApplicationStatus.PENDING:
        return <Clock className="w-4 h-4" />;
      case ApplicationStatus.REVIEWING:
        return <AlertCircle className="w-4 h-4" />;
      case ApplicationStatus.SHORTLISTED:
        return <Send className="w-4 h-4" />;
      case ApplicationStatus.SCHEDULED:
        return <Calendar className="w-4 h-4" />;
      case ApplicationStatus.ACCEPTED:
        return <CheckCircle className="w-4 h-4" />;
      case ApplicationStatus.REJECTED:
        return <XCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: ApplicationStatus) => {
    switch (status) {
      case ApplicationStatus.PENDING:
        return "bg-orange-50 text-orange-600 border border-orange-100";
      case ApplicationStatus.REVIEWING:
        return "bg-blue-50 text-blue-600 border border-blue-100";
      case ApplicationStatus.SHORTLISTED:
        return "bg-purple-50 text-purple-600 border border-purple-100";
      case ApplicationStatus.SCHEDULED:
        return "bg-indigo-50 text-indigo-600 border border-indigo-100";
      case ApplicationStatus.ACCEPTED:
        return "bg-green-50 text-green-600 border border-green-100";
      case ApplicationStatus.REJECTED:
        return "bg-red-50 text-red-600 border border-red-100";
      default:
        return "bg-gray-50 text-gray-600 border border-gray-100";
    }
  };

  if (!applications || applications.length === 0) {
    return (
      <div className="font-epilogue">
        <div className="mb-8">
          <h2 className="text-2xl font-extrabold text-[#25324B]">
            My Applications
          </h2>
          <p className="text-gray-500 font-medium text-sm">
            Track your job applications and their status.
          </p>
        </div>

        <div className="bg-white border border-gray-100 rounded-lg p-12 text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Briefcase className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-xl font-bold text-[#25324B] mb-3">
            No Applications Yet
          </h3>
          <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
            You haven't applied to any jobs yet. Start exploring opportunities
            and submit your first application to track your progress here.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-primary text-white px-6 py-3 rounded-none font-bold hover:bg-primary/90 transition-colors">
              Browse Jobs
            </button>
            <button className="border border-gray-200 text-gray-700 px-6 py-3 rounded-none font-bold hover:bg-gray-50 transition-colors">
              Update Profile
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="font-epilogue">
      <div className="mb-8">
        <h2 className="text-2xl font-extrabold text-[#25324B]">
          My Applications
        </h2>
        <p className="text-gray-500 font-medium text-sm">
          Track your job applications and their status.
        </p>
      </div>

      <div className="space-y-4">
        {applications?.map((app) => (
          <div
            key={app?.id}
            className="bg-white border border-gray-100 p-6 rounded-lg hover:border-primary hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden">
                  {app?.job?.company?.logo ? (
                    <Image
                      src={app?.job?.company?.logo}
                      alt={app?.job?.company?.name}
                      fill
                      className="object-contain p-2"
                    />
                  ) : (
                    <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                      <Building className="w-4 h-4 text-gray-400" />
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-[#25324B] text-lg mb-1">
                    {app?.job?.title}
                  </h3>
                  <p className="text-sm text-gray-500 flex items-center gap-1">
                    <Building className="w-3 h-3" />
                    {app?.job?.company?.name}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span
                  className={`px-3 py-1 text-xs font-bold rounded-full flex items-center gap-1 ${getStatusColor(app.status)}`}
                >
                  {getStatusIcon(app.status)}
                  {app.status}
                </span>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Calendar className="w-4 h-4" />
                  {new Date(app.createdAt).toLocaleDateString()}
                </div>
              </div>
            </div>

            {/* Additional Info */}
            {app.interviewDate && (
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>
                    Interview scheduled for{" "}
                    {new Date(app.interviewDate).toLocaleDateString()}
                  </span>
                </div>
                {app.interviewLink && (
                  <a
                    href={app.interviewLink}
                    className="text-primary text-sm hover:underline mt-1 block"
                  >
                    Join Interview →
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserApplicationsContent;
