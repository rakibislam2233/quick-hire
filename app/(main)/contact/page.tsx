"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, MessageCircle } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="font-epilogue bg-white min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="mb-10">
              <h1 className="text-4xl md:text-5xl font-black text-[#25324B] mb-6 leading-[1.1]">
                Let's start <br />
                something <span className="text-primary italic">great</span>
              </h1>
              <p className="text-gray-500 text-lg leading-relaxed">
                Our team is here to help you with anything related to QuickHire.
                Whether it's account questions or hiring needs.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 text-primary flex items-center justify-center flex-shrink-0 rounded-sm">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-[#25324B] uppercase text-xs tracking-widest mb-1">
                    Email us at
                  </h3>
                  <p className="text-gray-500 font-medium">
                    support@quickhire.xyz
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-50 text-orange-600 flex items-center justify-center flex-shrink-0 rounded-sm">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-[#25324B] uppercase text-xs tracking-widest mb-1">
                    Social Media
                  </h3>
                  <p className="text-gray-500 font-medium">
                    @quickhire_platform
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-50 text-green-600 flex items-center justify-center flex-shrink-0 rounded-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-[#25324B] uppercase text-xs tracking-widest mb-1">
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

          <div className="bg-[#F8F9FF] p-8 md:p-12 border border-gray-100 shadow-none">
            <h2 className="text-xl font-black text-[#25324B] mb-8 uppercase tracking-tighter">
              Send us a message
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    Full Name
                  </label>
                  <Input
                    placeholder="Enter your name"
                    className="bg-white h-12 rounded-none border-gray-100 focus:border-primary outline-none text-sm font-semibold"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-white h-12 rounded-none border-gray-100 focus:border-primary outline-none text-sm font-semibold"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  Subject
                </label>
                <Input
                  placeholder="How can we help?"
                  className="bg-white h-12 rounded-none border-gray-100 focus:border-primary outline-none text-sm font-semibold"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  Message
                </label>
                <Textarea
                  placeholder="Tell us more about your inquiry..."
                  className="bg-white min-h-[150px] rounded-none border-gray-100 focus:border-primary outline-none text-sm font-semibold p-4"
                />
              </div>
              <Button className="w-full bg-[#4640DE] text-white h-12 font-bold uppercase text-xs tracking-widest rounded-none shadow-none mt-4">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
