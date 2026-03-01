"use client";

import { ArrowRight, MessageSquare, User, Zap } from "lucide-react";

const AdviceContent = () => {
  const articles = [
    {
      id: 1,
      title: "10 Tips for a Standout Resume in 2024",
      excerpt:
        "Learn how to optimize your resume for applicant tracking systems and hiring managers.",
      category: "Career Advice",
      date: "Feb 24, 2024",
      icon: User,
      color: "text-blue-600 bg-blue-50",
    },
    {
      id: 2,
      title: "Navigating Technical Interviews with Confidence",
      excerpt:
        "Master the art of live coding and system design with our comprehensive guide.",
      category: "Tech Guide",
      date: "Feb 20, 2024",
      icon: Zap,
      color: "text-amber-600 bg-amber-50",
    },
    {
      id: 3,
      title: "How to Build a Remote-First Company Culture",
      excerpt:
        "Best practices for maintaining engagement and productivity in distributed teams.",
      category: "Recruitment",
      date: "Feb 15, 2024",
      icon: MessageSquare,
      color: "text-green-600 bg-green-50",
    },
  ];

  return (
    <div className="font-epilogue bg-white min-h-screen pt-24 pb-10">
      <div className="container mx-auto px-4 md:px-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-[#25324B] mb-4">
            Career <span className="text-primary ">Advice</span> & Insights
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Stay ahead with the latest trends in hiring, career growth, and
            startup culture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article.id} className="group cursor-pointer">
              <div className="bg-gray-50 h-64 w-full mb-6 relative overflow-hidden">
                <div
                  className={`absolute inset-0 flex items-center justify-center`}
                >
                  <article.icon
                    className={`w-16 h-16 ${article.color.split(" ")[0]} opacity-20`}
                  />
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span
                    className={`text-[10px] font-black  px-2 py-0.5 rounded ${article.color}`}
                  >
                    {article.category}
                  </span>
                  <span className="text-[10px] text-gray-400 font-bold  tracking-widest">
                    {article.date}
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-[#25324B] group-hover:text-primary transition-colors leading-tight">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-500 font-medium leading-relaxed ">
                  {article.excerpt}
                </p>
                <div className="pt-2 flex items-center gap-2 text-primary font-black text-xs  tracking-widest group-hover:gap-4 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdviceContent;
