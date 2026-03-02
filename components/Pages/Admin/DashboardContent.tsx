"use client";

import {
    ArrowRight,
    Calendar as CalendarIcon,
    ChevronDown,
    Printer,
} from "lucide-react";

const DashboardContent = () => {
  return (
    <div className="font-epilogue">
      {/* Greeting & Date Select */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-extrabold text-[#25324B]">
            Good morning, Maria
          </h1>
          <p className="text-gray-500 font-medium">
            Here is your job listings statistic report from July 19 - July 25.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-white border border-gray-100 flex items-center gap-2 px-4 py-2 hover:bg-gray-50 transition-colors cursor-pointer">
            <span className="text-sm font-bold text-[#25324B]">
              Jul 19 - Jul 25
            </span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>
          <div className="bg-white border border-gray-100 p-2 hover:bg-gray-50 transition-colors cursor-pointer">
            <Printer className="w-5 h-5 text-[#25324B]" />
          </div>
        </div>
      </div>

      {/* Top Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-primary p-6 text-white flex items-center justify-between group cursor-pointer transition-all">
          <div>
            <span className="text-5xl font-extrabold block mb-2">76</span>
            <p className="text-white/90 font-semibold leading-tight">
              New candidates to <br /> review
            </p>
          </div>
          <ArrowRight className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" />
        </div>

        <div className="bg-[#56CDAD] p-6 text-white flex items-center justify-between group cursor-pointer transition-all">
          <div>
            <span className="text-5xl font-extrabold block mb-2">3</span>
            <p className="text-white/90 font-semibold leading-tight">
              Schedule for today
            </p>
          </div>
          <ArrowRight className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" />
        </div>

        <div className="bg-[#26A4FF] p-6 text-white flex items-center justify-between group cursor-pointer transition-all">
          <div>
            <span className="text-5xl font-extrabold block mb-2">24</span>
            <p className="text-white/90 font-semibold leading-tight">
              Messages received
            </p>
          </div>
          <ArrowRight className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>

      {/* Middle Section: Stats & Job Open */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
        {/* Job Statistics Chart (Simulated) */}
        <div className="lg:col-span-3 bg-white border border-gray-100 p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-bold text-[#25324B]">
                Job statistics
              </h3>
              <p className="text-gray-500 text-sm font-medium">
                Showing Job Statistic Jul 19-25
              </p>
            </div>
            <div className="bg-[#F8F9FF] p-1 flex items-center">
              <button className="px-4 py-1 text-xs font-bold bg-white text-primary ">
                Week
              </button>
              <button className="px-4 py-1 text-xs font-bold text-gray-400">
                Month
              </button>
              <button className="px-4 py-1 text-xs font-bold text-gray-400">
                Year
              </button>
            </div>
          </div>

          <div className="flex items-center gap-8 mb-8 border-b border-gray-100 pb-2">
            <button className="text-sm font-bold text-primary border-b-2 border-primary pb-2 px-1">
              Overview
            </button>
            <button className="text-sm font-bold text-gray-400 pb-2 px-1">
              Jobs View
            </button>
            <button className="text-sm font-bold text-gray-400 pb-2 px-1">
              Jobs Applied
            </button>
          </div>

          {/* Simulated Chart Bars */}
          <div className="h-64 flex items-end justify-between gap-4 px-4 pt-4">
            {[
              { label: "Mon", v: 40, a: 25 },
              { label: "Tue", v: 30, a: 20 },
              { label: "Wed", v: 60, a: 15 },
              { label: "Thu", v: 45, a: 40 },
              { label: "Fri", v: 50, a: 30 },
              { label: "Sat", v: 15, a: 10 },
              { label: "Sun", v: 10, a: 5 },
            ].map((data) => (
              <div
                key={data.label}
                className="flex-1 flex flex-col items-center gap-3 group relative"
              >
                <div className="w-full h-full flex items-end justify-center gap-1 group">
                  <div
                    className="w-4 bg-[#FFB836] transition-all hover:bg-[#FFB836]/80"
                    style={{ height: `${data.v}%` }}
                  ></div>
                  <div
                    className="w-4 bg-primary transition-all hover:bg-primary/80"
                    style={{ height: `${data.a}%` }}
                  ></div>
                  {/* Tooltip on Wed specifically as per image */}
                  {data.label === "Wed" && (
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#25324B] text-white p-2 text-[10px] rounded pointer-events-none z-10 w-16">
                      <div className="flex items-center justify-between mb-1">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        <span>122</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="w-2 h-2 rounded-full bg-[#FFB836]"></span>
                        <span>36</span>
                      </div>
                      <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-[#25324B] rotate-45"></div>
                    </div>
                  )}
                </div>
                <span className="text-xs font-bold text-gray-400">
                  {data.label}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-6 mt-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#FFB836]"></div>
              <span className="text-xs font-bold text-gray-500  tracking-wider">
                Job View
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary"></div>
              <span className="text-xs font-bold text-gray-500  tracking-wider">
                Job Applied
              </span>
            </div>
          </div>
        </div>

        {/* Sidebar Cards within Content */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white border border-gray-100 p-6 flex flex-col justify-center h-48 group cursor-pointer transition-all">
            <h3 className="text-lg font-bold text-[#25324B] mb-4">Job Open</h3>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-extrabold text-[#25324B]">12</span>
              <span className="text-gray-400 font-bold  text-xs">
                Jobs Opened
              </span>
            </div>
          </div>

          <div className="bg-white border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-[#25324B] mb-6">
              Applicants Summary
            </h3>
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-5xl font-extrabold text-[#25324B]">67</span>
              <span className="text-gray-400 font-bold  text-xs">
                Applicants
              </span>
            </div>

            {/* Visual indicator bar */}
            <div className="flex w-full h-3 mb-8 overflow-hidden">
              <div className="w-[40%] bg-primary"></div>
              <div className="w-[20%] bg-[#56CDAD]"></div>
              <div className="w-[15%] bg-[#26A4FF]"></div>
              <div className="w-[15%] bg-[#FFB836]"></div>
              <div className="w-[10%] bg-[#FF6550]"></div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-sm"></div>
                  <span className="text-xs font-bold text-gray-500">
                    Full Time : <span className="text-[#25324B]">45</span>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#FFB836] rounded-sm"></div>
                  <span className="text-xs font-bold text-gray-500">
                    Internship : <span className="text-[#25324B]">32</span>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#56CDAD] rounded-sm"></div>
                  <span className="text-xs font-bold text-gray-500">
                    Part-Time : <span className="text-[#25324B]">24</span>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#FF6550] rounded-sm"></div>
                  <span className="text-xs font-bold text-gray-500">
                    Contract : <span className="text-[#25324B]">30</span>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#26A4FF] rounded-sm"></div>
                  <span className="text-xs font-bold text-gray-500">
                    Remote : <span className="text-[#25324B]">22</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer / Secondary Stats Row */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          {/* Could add mini charts here as seen in the image - Job Views, Job Applied stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-100 p-6 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-gray-400  tracking-wider mb-1">
                  Job Views
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-extrabold text-[#25324B]">
                    2,342
                  </span>
                  <span className="text-[10px] font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded flex items-center gap-0.5">
                    6.4% <ChevronDown className="w-2.5 h-2.5 rotate-180" />
                  </span>
                </div>
                <p className="text-[10px] font-bold text-gray-400 mt-1 ">
                  This Week
                </p>
              </div>
              <div className="w-10 h-10 bg-[#FFB836] rounded-full flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            </div>

            <div className="bg-white border border-gray-100 p-6 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-gray-400  tracking-wider mb-1">
                  Job Applied
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-extrabold text-[#25324B]">
                    654
                  </span>
                  <span className="text-[10px] font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded flex items-center gap-0.5">
                    0.5% <ChevronDown className="w-2.5 h-2.5" />
                  </span>
                </div>
                <p className="text-[10px] font-bold text-gray-400 mt-1 ">
                  This Week
                </p>
              </div>
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
                <CalendarIcon className="w-5 h-5 border rounded" />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1"></div>
      </div>
    </div>
  );
};

export default DashboardContent;
