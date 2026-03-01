"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MoreHorizontal, Search, Send } from "lucide-react";
import Image from "next/image";

const MessagesContent = () => {
  const conversations = [
    {
      id: 1,
      name: "Maria Garcia",
      message: "Hello, I'm interested in the role...",
      time: "10:30 AM",
      unread: true,
      avatar: "/asset/logo/logo.png",
    },
    {
      id: 2,
      name: "James Wilson",
      message: "Thank you for the opportunity!",
      time: "9:15 AM",
      unread: false,
      avatar: "/asset/logo/logo.png",
    },
    {
      id: 3,
      name: "Linda Chen",
      message: "When can we schedule the interview?",
      time: "Yesterday",
      unread: false,
      avatar: "/asset/logo/logo.png",
    },
  ];

  return (
    <div className="h-[calc(100vh-140px)] flex bg-white border border-gray-100 font-epilogue overflow-hidden shadow-none">
      {/* Sidebar - Conversations List */}
      <div className="w-80 border-r border-gray-100 flex flex-col h-full">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-[#25324B] mb-4">Messages</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search messages"
              className="pl-10 rounded-none border-gray-200 focus-visible:ring-0 focus-visible:border-primary shadow-none"
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {conversations.map((conv) => (
            <div
              key={conv.id}
              className={`p-6 flex gap-4 cursor-pointer hover:bg-gray-50 transition-colors border-b border-gray-50 ${conv.unread ? "bg-blue-50/30" : ""}`}
            >
              <div className="relative h-12 w-12 shrink-0">
                <Image
                  src={conv.avatar}
                  alt={conv.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="text-sm font-bold text-[#25324B] truncate">
                    {conv.name}
                  </h4>
                  <span className="text-[10px] text-gray-400 font-bold ">
                    {conv.time}
                  </span>
                </div>
                <p className="text-xs text-gray-500 truncate font-medium">
                  {conv.message}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col h-full">
        {/* Chat Header */}
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative h-10 w-10">
              <Image
                src="/asset/logo/logo.png"
                alt="Maria Garcia"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#25324B]">Maria Garcia</h4>
              <p className="text-[10px] text-green-500 font-bold ">
                Online Now
              </p>
            </div>
          </div>
          <button className="text-gray-400 hover:text-primary">
            <MoreHorizontal className="w-6 h-6" />
          </button>
        </div>

        {/* Messages List */}
        <div className="flex-1 p-8 overflow-y-auto space-y-6">
          <div className="flex gap-4 max-w-[70%]">
            <div className="relative h-8 w-8 shrink-0 mt-auto">
              <Image
                src="/asset/logo/logo.png"
                alt="Maria Garcia"
                fill
                className="object-contain"
              />
            </div>
            <div className="bg-[#F8F9FF] p-4 text-sm text-[#25324B] font-medium leading-relaxed">
              Hello! I saw the job listing for the Senior UI/UX Designer role
              and I&apos;m very interested. Could you tell me more about the
              team structure?
            </div>
          </div>

          <div className="flex flex-row-reverse gap-4 max-w-[70%] ml-auto">
            <div className="bg-primary p-4 text-sm text-white font-medium shadow-none leading-relaxed">
              Hi Maria! Thanks for reaching out. Our design team currently
              consists of 4 designers and 2 researchers. We work closely with
              the engineering team using a squad-based model.
            </div>
          </div>
        </div>

        {/* Chat Input */}
        <div className="p-6 border-t border-gray-100">
          <div className="flex gap-4">
            <Input
              placeholder="Type a message..."
              className="flex-1 rounded-none border-gray-200 focus-visible:ring-0 focus-visible:border-primary shadow-none h-12"
            />
            <Button className="bg-primary text-white rounded-none w-12 h-12 p-0 shadow-none">
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesContent;
