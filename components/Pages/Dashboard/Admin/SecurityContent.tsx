"use client";
import { Button } from "@/components/ui/button";
import { Shield, Users, Lock, Key, AlertTriangle, Settings, Eye, EyeOff } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useState } from "react";

const SecurityContent = () => {
  const [showPasswords, setShowPasswords] = useState(false);

  const securityMetrics = [
    {
      title: "Total Users",
      value: "1,234",
      change: "+12%",
      icon: Users,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      title: "Active Sessions",
      value: "456",
      change: "+5%",
      icon: Key,
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      title: "Failed Logins",
      value: "23",
      change: "-8%",
      icon: Shield,
      color: "text-red-600",
      bg: "bg-red-50",
    },
    {
      title: "Security Alerts",
      value: "7",
      change: "+2",
      icon: AlertTriangle,
      color: "text-orange-600",
      bg: "bg-orange-50",
    },
  ];

  const recentActivities = [
    {
      id: 1,
      type: "Failed Login Attempt",
      user: "john.doe@example.com",
      ip: "192.168.1.100",
      time: "2 minutes ago",
      severity: "high",
    },
    {
      id: 2,
      type: "Password Changed",
      user: "admin@company.com",
      ip: "192.168.1.50",
      time: "15 minutes ago",
      severity: "low",
    },
    {
      id: 3,
      type: "New User Registration",
      user: "jane.smith@example.com",
      ip: "192.168.1.75",
      time: "1 hour ago",
      severity: "low",
    },
    {
      id: 4,
      type: "Suspicious Activity",
      user: "unknown@hack.com",
      ip: "10.0.0.1",
      time: "2 hours ago",
      severity: "critical",
    },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "low":
        return "bg-green-50 text-green-600 border-green-100";
      case "medium":
        return "bg-yellow-50 text-yellow-600 border-yellow-100";
      case "high":
        return "bg-orange-50 text-orange-600 border-orange-100";
      case "critical":
        return "bg-red-50 text-red-600 border-red-100";
      default:
        return "bg-gray-50 text-gray-600 border-gray-100";
    }
  };

  return (
    <div className="font-epilogue p-6 space-y-8">
      <div className="mb-8">
        <h2 className="text-2xl font-extrabold text-[#25324B]">
          Security Management
        </h2>
        <p className="text-gray-500 font-medium text-sm">
          Monitor and manage platform security.
        </p>
      </div>

      {/* Security Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {securityMetrics.map((metric, index) => (
          <Card key={index} className={`${metric.bg} p-6 border border-gray-100`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {metric.value}
                </p>
                <div className="flex items-center gap-1 mt-2">
                  <span className={`text-sm font-medium ${metric.color}`}>
                    {metric.change}
                  </span>
                </div>
              </div>
              <div className={`p-3 rounded-lg ${metric.bg}`}>
                <metric.icon className={`w-6 h-6 ${metric.color}`} />
              </div>
            </div>
        ))}
      </div>

      {/* Security Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card className="p-6 border border-gray-100">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Lock className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-bold text-[#25324B]">Password Policy</h3>
              <p className="text-sm text-gray-500">Configure password requirements</p>
            </div>
          </div>
          <Button className="w-full bg-primary text-white rounded-none h-10 font-bold">
            Configure
          </Button>
        </Card>

        <Card className="p-6 border border-gray-100">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-2 bg-purple-50 rounded-lg">
              <Shield className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <h3 className="font-bold text-[#25324B]">Two-Factor Auth</h3>
              <p className="text-sm text-gray-500">Enable 2FA for all users</p>
            </div>
          </div>
          <Button variant="outline" className="w-full rounded-none h-10 font-bold">
            Setup
          </Button>
        </Card>

        <Card className="p-6 border border-gray-100">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-2 bg-green-50 rounded-lg">
              <Key className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-[#25324B]">Session Management</h3>
              <p className="text-sm text-gray-500">Manage active sessions</p>
            </div>
          </div>
          <Button variant="outline" className="w-full rounded-none h-10 font-bold">
            View Sessions
          </Button>
        </Card>
      </div>

      {/* Recent Security Activity */}
      <Card className="border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-[#25324B]">Recent Security Activity</h3>
            <Button
              variant="outline"
              size="sm"
              className="rounded-none h-8 px-4 text-xs"
              onClick={() => setShowPasswords(!showPasswords)}
            >
              {showPasswords ? <EyeOff className="w-4 h-4 mr-1" /> : <Eye className="w-4 h-4 mr-1" />}
              {showPasswords ? "Hide" : "Show"} IPs
            </Button>
          </div>
        </div>
        <div className="divide-y divide-gray-50">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-lg ${getSeverityColor(activity.severity)}`}>
                  <AlertTriangle className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{activity.type}</p>
                  <p className="text-xs text-gray-500">
                    User: {activity.user}
                    {showPasswords && (
                      <span className="ml-2 text-gray-400">({activity.ip})</span>
                    )}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-400">{activity.time}</p>
                <Badge
                  variant="outline"
                  className={`mt-1 ${getSeverityColor(activity.severity)}`}
                >
                  {activity.severity}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-4">
        <Button className="bg-red-600 text-white rounded-none h-10 px-6 font-bold">
          <AlertTriangle className="w-4 h-4 mr-2" />
          Security Audit
        </Button>
        <Button variant="outline" className="rounded-none h-10 px-6 font-bold">
          <Settings className="w-4 h-4 mr-2" />
          Security Settings
        </Button>
        <Button variant="outline" className="rounded-none h-10 px-6 font-bold">
          <Users className="w-4 h-4 mr-2" />
          User Permissions
        </Button>
      </div>
    </div>
  );
};

export default SecurityContent;
