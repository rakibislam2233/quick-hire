"use client";

import { PlayCircle } from "lucide-react";

const GuidePage = () => {
  const steps = [
    {
      title: "Create your profile",
      description:
        "Set up your candidate or company profile with all necessary details to stand out.",
      time: "2 mins",
    },
    {
      title: "Search for opportunities",
      description:
        "Use our advanced filters to find the perfect job or the best talent in the market.",
      time: "5 mins",
    },
    {
      title: "Apply or Recruit",
      description:
        "Send applications or post jobs to start the hiring journey immediately.",
      time: "Instant",
    },
  ];

  return (
    <div className="font-epilogue bg-white min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-20">
          <h1 className="text-4xl md:text-5xl font-black text-[#25324B] mb-6 leading-tight">
            How to use <br />
            <span className="text-primary italic">QuickHire</span> Platform
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl font-medium leading-relaxed">
            Follow our simple guide to get the most out of our platform. Whether
            you're hiring or seeking a new career path.
          </p>
        </div>

        <div className="space-y-8 mb-20">
          {steps.map((step, idx) => (
            <div key={step.title} className="flex gap-6 md:gap-10 items-start">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-[#25324B] text-white flex items-center justify-center font-black rounded-full shrink-0">
                  {idx + 1}
                </div>
                {idx !== steps.length - 1 && (
                  <div className="w-px h-24 bg-gray-100 mt-2"></div>
                )}
              </div>
              <div className="pt-1">
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="text-xl font-extrabold text-[#25324B] tracking-tight">
                    {step.title}
                  </h3>
                  <span className="text-[10px] font-black uppercase text-primary bg-blue-50 px-2 py-1 rounded">
                    {step.time}
                  </span>
                </div>
                <p className="text-gray-500 font-medium leading-relaxed italic max-w-lg">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#4640DE] p-10 md:p-16 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="relative z-10 max-w-sm">
            <h2 className="text-3xl font-black mb-4 leading-tight italic decoration-white/20 underline decoration-4 underline-offset-8">
              Watch the video guide
            </h2>
            <p className="text-white/60 text-sm font-medium mb-8 leading-relaxed">
              A visual walkthrough of how to navigate the dashboard and manage
              your applications efficiently.
            </p>
            <button className="flex items-center gap-3 bg-white text-[#4640DE] px-8 h-12 font-black uppercase text-xs tracking-widest hover:bg-opacity-90 transition-all">
              <PlayCircle className="w-5 h-5" />
              Watch Now
            </button>
          </div>
          <div className="w-full md:w-auto flex-1 h-[200px] bg-white/10 border border-white/20 flex items-center justify-center relative group cursor-pointer">
            <PlayCircle className="w-20 h-20 text-white/20 group-hover:scale-110 transition-transform group-hover:text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidePage;
