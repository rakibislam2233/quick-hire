"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileText, Link as LinkIcon, Mail, User } from "lucide-react";
import { useActionState } from "react";

// Mock application action
const applyAction = async (_: unknown, __: FormData) => {
  // Simulate delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { success: true, message: "Application submitted successfully!" };
};

export default function ApplyForm() {
  const [state, action, isPending] = useActionState(applyAction, null);

  return (
    <div className="bg-white border border-gray-100 p-8 shadow-none">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <FileText className="w-6 h-6 text-primary" />
        Apply Now
      </h3>

      <form action={action} className="space-y-6">
        {state?.message && (
          <div className="p-4 bg-green-50 text-green-600 rounded text-sm mb-6">
            {state.message}
          </div>
        )}

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 block text-left">
            Full Name
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              name="name"
              placeholder="Enter your full name"
              required
              className="w-full pl-10 bg-gray-50 border-gray-200 outline-none shadow-none focus-visible:ring-0 focus-visible:border-primary rounded-none h-11"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 block text-left">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              className="w-full pl-10 bg-gray-50 border-gray-200 outline-none shadow-none focus-visible:ring-0 focus-visible:border-primary rounded-none h-11"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 block text-left">
            Resume Link (URL)
          </label>
          <div className="relative">
            <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              name="resumeLink"
              type="url"
              placeholder="https://your-resume.pdf"
              required
              className="w-full pl-10 bg-gray-50 border-gray-200 outline-none shadow-none focus-visible:ring-0 focus-visible:border-primary rounded-none h-11"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 block text-left">
            Cover Note
          </label>
          <textarea
            name="coverNote"
            rows={4}
            placeholder="Tell us why you are a good fit..."
            required
            className="w-full p-3 bg-gray-50 border border-gray-200 outline-none shadow-none focus:border-primary transition-colors rounded-none resize-none text-sm"
          />
        </div>

        <Button
          type="submit"
          disabled={isPending}
          className="w-full bg-primary text-white rounded-none h-12 text-base font-semibold shadow-none hover:bg-primary"
        >
          {isPending ? "Submitting..." : "Submit Application"}
        </Button>
      </form>
    </div>
  );
}
