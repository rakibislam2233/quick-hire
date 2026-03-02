"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    BookOpen,
    FileText,
    LifeBuoy,
    MessageCircle,
    Search,
} from "lucide-react";

const HelpCenterContent = () => {
  const categories = [
    {
      name: "Getting Started",
      icon: BookOpen,
      description: "Learn the basics of using QuickHire management tools.",
    },
    {
      name: "Recruitment Process",
      icon: FileText,
      description: "How to manage applicants and move them through stages.",
    },
    {
      name: "Account & Billing",
      icon: LifeBuoy,
      description: "Manage your subscription, team members, and security.",
    },
  ];

  return (
    <div className="font-epilogue">
      <div className="bg-primary p-12 -mx-8 -mt-8 mb-12 text-center text-white font-epilogue">
        <h2 className="text-3xl font-extrabold mb-4  tracking-tighter">
          How can we help you today?
        </h2>
        <div className="max-w-2xl mx-auto relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            placeholder="Search for articles, guides, and more..."
            className="w-full h-14 pl-12 rounded-none border-none text-[#25324B] font-medium shadow-lg focus-visible:ring-2 focus-visible:ring-primary/20"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <h3 className="text-xl font-bold text-[#25324B] mb-8  tracking-tighter">
          Browse by Category
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="bg-white border border-gray-100 p-8 shadow-none group cursor-pointer hover:border-primary transition-colors"
            >
              <div className="w-12 h-12 bg-[#F8F9FF] flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <cat.icon className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-[#25324B] mb-2">
                {cat.name}
              </h4>
              <p className="text-sm text-gray-500 font-medium mb-6 leading-relaxed">
                {cat.description}
              </p>
              <div className="flex items-center gap-2 text-primary text-xs font-bold  tracking-wider">
                Explore Articles <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#F8F9FF] p-12 border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-white flex items-center justify-center text-primary  shrink-0">
              <MessageCircle className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-extrabold text-[#25324B] mb-2  tracking-tighter">
                Still need help?
              </h3>
              <p className="text-gray-500 font-medium max-w-md">
                Our support team is available 24/7 to help you with any
                technical issues or recruitment questions.
              </p>
            </div>
          </div>
          <Button className="bg-primary text-white rounded-none h-14 px-10 font-bold shadow-none  tracking-widest text-sm">
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  );
};

// Need to import ChevronRight
import { ChevronRight } from "lucide-react";

export default HelpCenterContent;
