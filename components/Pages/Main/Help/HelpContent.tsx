"use client";

import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  Book,
  HelpCircle,
  Search,
  Settings,
  User,
} from "lucide-react";

const HelpContent = () => {
  const categories = [
    {
      name: "Getting Started",
      icon: Book,
      articles: 12,
      color: "text-blue-600 bg-blue-50",
    },
    {
      name: "Managing Profile",
      icon: User,
      articles: 8,
      color: "text-purple-600 bg-purple-50",
    },
    {
      name: "Account Settings",
      icon: Settings,
      articles: 5,
      color: "text-orange-600 bg-orange-50",
    },
    {
      name: "Privacy & Security",
      icon: HelpCircle,
      articles: 10,
      color: "text-green-600 bg-green-50",
    },
  ];

  const popularArticles = [
    "How to apply for a job?",
    "Managing your notification settings",
    "Restoring a deleted account",
    "How to post a job as a company?",
    "Verifying your company email",
  ];

  return (
    <div className="font-epilogue bg-white min-h-screen pt-24 pb-10">
      <div className="container mx-auto px-4 md:px-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-[#25324B] mb-8  tracking-tighter">
            How can we <span className="text-primary ">help?</span>
          </h1>
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Search for articles, guides..."
              className="h-14 pl-12 rounded-none border-gray-100 text-lg font-medium focus-visible:ring-primary"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="border border-gray-100 p-8 hover:border-primary transition-all cursor-pointer group"
            >
              <div
                className={`${cat.color} w-12 h-12 flex items-center justify-center mb-6 rounded-sm`}
              >
                <cat.icon className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-[#25324B] mb-2">{cat.name}</h3>
              <p className="text-xs text-gray-400 font-bold  tracking-widest">
                {cat.articles} Articles
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-[#F8F9FF] p-10 md:p-16">
          <div>
            <h2 className="text-2xl font-black text-[#25324B] mb-8  tracking-tighter">
              Popular Articles
            </h2>
            <div className="space-y-4">
              {popularArticles.map((article) => (
                <div
                  key={article}
                  className="flex items-center justify-between p-4 bg-white border border-gray-50 group cursor-pointer hover:border-primary transition-all"
                >
                  <span className="text-sm font-bold text-[#25324B]">
                    {article}
                  </span>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-primary transition-all" />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="bg-[#25324B] p-10 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-extrabold mb-4">
                  Still need help?
                </h3>
                <p className="text-gray-400 text-sm mb-8 leading-relaxed max-w-xs">
                  Our support team is always ready to assist you. Get in touch
                  with us.
                </p>
                <button className="bg-primary hover:bg-blue-700 text-white px-8 h-12 font-bold  text-[10px] tracking-widest transition-all">
                  Support Center
                </button>
              </div>
              <HelpCircle className="absolute -right-10 -bottom-10 w-48 h-48 text-white/5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpContent;
