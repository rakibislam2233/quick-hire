"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, MessageCircle, User } from "lucide-react";

const ContactContent = () => {
  return (
    <div className="font-epilogue bg-white min-h-screen pt-24 pb-10">
      <div className="container mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="mb-10">
              <h1 className="text-4xl md:text-5xl font-black text-[#25324B] mb-6 leading-[1.1]">
                Let&apos;s start <br />
                something <span className="text-primary ">great</span>
              </h1>
              <p className="text-gray-500 text-lg leading-relaxed">
                Our team is here to help you with anything related to QuickHire.
                Whether it&apos;s account questions or hiring needs.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 text-primary flex items-center justify-center shrink-0 rounded-sm">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-[#25324B]  text-xs tracking-widest mb-1">
                    Email us at
                  </h3>
                  <p className="text-gray-500 font-medium">
                    support@quickhire.xyz
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 rounded-sm">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-[#25324B]  text-xs tracking-widest mb-1">
                    Social Media
                  </h3>
                  <p className="text-gray-500 font-medium">
                    @quickhire_platform
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-50 text-green-600 flex items-center justify-center shrink-0 rounded-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-[#25324B]  text-xs tracking-widest mb-1">
                    Our Office
                  </h3>
                  <p className="text-gray-500 font-medium leading-relaxed">
                    123 Innovation Street, <br />
                    Tech District, ST 54321
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#F8F9FF] p-8  border border-gray-100 shadow-none">
            <h2 className="text-xl font-black text-[#25324B] mb-8  tracking-tighter">
              Send us a message
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400  tracking-widest">
                    Full Name
                  </label>
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 w-5 h-5 group-focus-within:text-primary transition-colors" />
                    <Input
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      className="w-full h-12 pl-12 bg-white border-gray-100 rounded-none outline-none shadow-none focus-visible:ring-0 focus-visible:border-primary focus-visible:bg-white transition-all text-sm"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400  tracking-widest">
                    Email Address
                  </label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 w-5 h-5 group-focus-within:text-primary transition-colors" />
                    <Input
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      className="w-full h-12 pl-12 bg-white border-gray-100 rounded-none outline-none shadow-none focus-visible:ring-0 focus-visible:border-primary focus-visible:bg-white transition-all text-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400  tracking-widest">
                  Subject
                </label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 w-5 h-5 group-focus-within:text-primary transition-colors" />
                  <Input
                    name="subject"
                    type="text"
                    placeholder="How can we help?"
                    className="w-full h-12 pl-12 bg-white border-gray-100 rounded-none outline-none shadow-none focus-visible:ring-0 focus-visible:border-primary focus-visible:bg-white transition-all text-sm"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400  tracking-widest">
                  Message
                </label>
                <Textarea
                  placeholder="Tell us more about your inquiry..."
                  className="bg-white min-h-[150px] rounded-none border-gray-100 focus:border-primary outline-none text-sm p-4"
                />
              </div>
              <Button className="w-full bg-primary text-white h-12 font-bold  text-xs tracking-widest rounded-none shadow-none mt-4">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
