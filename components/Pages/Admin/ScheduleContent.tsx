"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Clock, Plus } from "lucide-react";

const ScheduleContent = () => {
  const events = [
    {
      id: 1,
      time: "10:00 AM",
      title: "Interview with Maria Garcia",
      role: "Senior UI/UX Designer",
    },
    {
      id: 2,
      time: "02:30 PM",
      title: "Technical Interview - James Wilson",
      role: "Software Engineer",
    },
    {
      id: 3,
      time: "04:00 PM",
      title: "Team Huddle - Hiring Strategy",
      role: "Internal",
    },
  ];

  return (
    <div className="font-epilogue">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <div>
          <h2 className="text-2xl font-extrabold text-[#25324B]">
            My Schedule
          </h2>
          <p className="text-gray-500 font-medium">
            Manage your upcoming interviews and recruitment events.
          </p>
        </div>
        <Button className="bg-primary text-white rounded-none h-12 px-6 font-bold flex items-center gap-2 shadow-none">
          <Plus className="w-5 h-5" />
          Add Event
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Calendar View (Simulated) */}
        <div className="lg:col-span-2 bg-white border border-gray-100 p-8 shadow-none">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-bold text-[#25324B]">July 2026</h3>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                className="rounded-none h-8 w-8"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-none h-8 w-8"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-px bg-gray-100 border border-gray-100">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div
                key={day}
                className="bg-[#F8F9FF] p-2 text-center text-[10px] font-bold text-gray-400  tracking-widest"
              >
                {day}
              </div>
            ))}
            {Array.from({ length: 31 }).map((_, i) => (
              <div
                key={i}
                className={`bg-white h-24 p-2 border-t border-l border-gray-100 relative ${i + 1 === 22 ? "bg-blue-50/30" : ""}`}
              >
                <span
                  className={`text-xs font-bold ${i + 1 === 22 ? "text-primary" : "text-gray-400"}`}
                >
                  {i + 1}
                </span>
                {i + 1 === 22 && (
                  <div className="mt-2 text-[8px] font-bold bg-primary text-white p-1 truncate cursor-pointer">
                    3 Interviews
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming List */}
        <div className="lg:col-span-1 space-y-6">
          <h3 className="text-lg font-bold text-[#25324B]">Upcoming Today</h3>
          <div className="space-y-4">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white border-l-4 border-l-primary border border-gray-100 p-4 shadow-none"
              >
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-xs font-bold">{event.time}</span>
                </div>
                <h4 className="text-sm font-bold text-[#25324B] mb-1">
                  {event.title}
                </h4>
                <p className="text-[10px] text-gray-500 font-bold  tracking-wider">
                  {event.role}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-[#F8F9FF] p-6 border border-gray-100">
            <h4 className="text-sm font-bold text-[#25324B] mb-2  tracking-tight">
              Pro Tip
            </h4>
            <p className="text-xs text-gray-500 font-medium leading-relaxed">
              Sync your QuickHire calendar with Google Calendar or Outlook for a
              seamless scheduling experience.
            </p>
            <Button className="mt-4 w-full bg-primary text-white rounded-none h-10 text-xs font-bold  shadow-none">
              Sync Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleContent;
