"use client";

import { CheckCircle, PlayCircle } from "lucide-react";

const GuideContent = () => {
  const steps = [
    {
      title: "Create your profile",
      description:
        "Fill in your details, work experience, and skills to highlight your expertise to potential employers.",
    },
    {
      title: "Upload your resume",
      description:
        "Our AI-powered system analyzes your resume to suggest the best-matching job roles for you.",
    },
    {
      title: "Search & filter jobs",
      description:
        "Use our advanced filters to find jobs by category, location, salary range, and company type.",
    },
    {
      title: "Apply with one click",
      description:
        "Apply instantly to any job that fits your profile and track your application status in real-time.",
    },
  ];

  return (
    <div className="font-epilogue bg-white min-h-screen pt-24 pb-10">
      <div className="container mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-[#25324B] mb-8 leading-tight">
              Mastering the <br />
              QuickHire <span className="text-primary ">Platform</span>
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              New to QuickHire? This guide will walk you through everything you
              need to know to find your dream job or hire the best talent
              efficiently.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary hover:bg-blue-700 text-white px-8 h-14 font-bold  text-[10px] tracking-widest transition-all rounded-sm flex items-center gap-3">
                <PlayCircle className="w-5 h-5" /> Watch Tutorial
              </button>
              <button className="bg-white text-[#25324B] border border-gray-100 px-8 h-14 font-bold  text-[10px] tracking-widest hover:bg-gray-50 transition-all rounded-sm">
                Download PDF
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-primary/5 w-full aspect-video flex items-center justify-center border-2 border-dashed border-primary/20 rounded-sm">
              <PlayCircle className="w-20 h-20 text-primary opacity-20" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl border border-gray-100 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-50 text-green-600 flex items-center justify-center rounded-full shrink-0">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-black text-[#25324B]">
                    Complete setup
                  </p>
                  <p className="text-[10px] text-gray-400 font-bold">
                    85% Profile Strength
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              <span className="text-7xl font-black text-gray-50 absolute -top-8 -left-4 -z-10">
                0{index + 1}
              </span>
              <h3 className="text-xl font-extrabold text-[#25324B] mb-4">
                {step.title}
              </h3>
              <p className="text-sm text-gray-500 font-medium leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GuideContent;
