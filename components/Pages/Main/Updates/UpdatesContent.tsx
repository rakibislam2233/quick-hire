"use client";

import { Badge } from "@/components/ui/badge";

const UpdatesContent = () => {
  const updates = [
    {
      version: "v2.1.0",
      date: "Feb 28, 2024",
      type: "Major",
      changes: [
        {
          title: "Revolutionary AI Matching Engine",
          description:
            "Implemented a new vector-based search algorithm that matches candidates to jobs with 40% higher accuracy.",
        },
        {
          title: "Dark Mode Support",
          description:
            "A complete UI overhaul for the dashboard, now supporting native dark mode across all views.",
        },
      ],
    },
    {
      version: "v2.0.4",
      date: "Feb 12, 2024",
      type: "Minor",
      changes: [
        {
          title: "Real-time Chat Optimizations",
          description:
            "Reduced latency in message delivery by 200ms and improved mobile socket stability.",
        },
      ],
    },
  ];

  return (
    <div className="font-epilogue bg-white min-h-screen pt-24 pb-10">
      <div className="container mx-auto px-4 md:px-16">
        <div className="mb-20">
          <h1 className="text-4xl font-black text-[#25324B] mb-4  tracking-tighter">
            Platform <span className="text-primary ">Updates</span>
          </h1>
          <p className="text-gray-500 text-lg">
            See what&apos;s new on QuickHire and how we&apos;re improving your
            experience.
          </p>
        </div>

        <div className="space-y-16">
          {updates.map((update) => (
            <div key={update.version} className="relative">
              <div className="hidden lg:block absolute left-[120px] top-0 bottom-0 w-px bg-gray-100"></div>

              <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <h2 className="text-2xl font-black text-[#25324B]">
                      {update.version}
                    </h2>
                    <Badge className="bg-blue-50 text-primary border-none text-[8px] font-black uppercase tracking-widest px-2">
                      {update.type}
                    </Badge>
                  </div>
                  <p className="text-xs text-gray-400 font-bold  tracking-widest uppercase">
                    Released on {update.date}
                  </p>
                </div>

                <div className="space-y-10">
                  {update.changes.map((change) => (
                    <div key={change.title} className="group">
                      <h3 className="text-xl font-extrabold text-[#25324B] mb-3 group-hover:text-primary transition-colors">
                        {change.title}
                      </h3>
                      <p className="text-gray-500 leading-relaxed font-medium">
                        {change.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-[#25324B] p-10 md:p-20 text-center text-white">
          <h2 className="text-3xl font-black mb-6">Want to stay updated?</h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            Subscribe to our newsletter to receive weekly digests of the newest
            features and company news.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-14 bg-white/5 border border-white/10 px-6 rounded-none flex-1 outline-none focus:border-primary"
            />
            <button className="bg-primary h-14 px-10 font-bold  text-[10px] tracking-widest uppercase hover:bg-blue-700 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatesContent;
