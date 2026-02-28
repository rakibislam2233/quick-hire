import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#202430] text-white pt-16 pb-8 font-epilogue">
      <div className="container px-6 md:px-16 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Logo & Info */}
          <div className="lg:col-span-4 flex flex-col items-start gap-6 pr-0 md:pr-4">
            <Link href="/" className="flex items-center justify-center gap-2">
              <div className="relative w-9 h-8">
                <Image
                  src="/asset/logo/logo.png"
                  alt="QuickHire Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter">
                QuickHire
              </span>
            </Link>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-sm mt-0 md:mt-2 font-medium">
              Great platform for the job seeker that passionate about startups.
              Find your dream job easier.
            </p>
          </div>

          {/* Links: About */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-black mb-6 uppercase tracking-widest text-[#F8F9FF]">
              About
            </h4>
            <ul className="flex flex-col gap-4 text-gray-400 text-sm md:text-base font-medium">
              <li>
                <Link
                  href="/companies"
                  className="hover:text-primary hover:translate-x-1 inline-block transition-all"
                >
                  Companies
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="hover:text-primary hover:translate-x-1 inline-block transition-all"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-primary hover:translate-x-1 inline-block transition-all"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="/advice"
                  className="hover:text-primary hover:translate-x-1 inline-block transition-all"
                >
                  Advice
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-primary hover:translate-x-1 inline-block transition-all"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Links: Resources */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-black mb-6 uppercase tracking-widest text-[#F8F9FF]">
              Resources
            </h4>
            <ul className="flex flex-col gap-4 text-gray-400 text-sm md:text-base font-medium">
              <li>
                <Link
                  href="/help"
                  className="hover:text-primary hover:translate-x-1 inline-block transition-all"
                >
                  Help Docs
                </Link>
              </li>
              <li>
                <Link
                  href="/guide"
                  className="hover:text-primary hover:translate-x-1 inline-block transition-all"
                >
                  Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/updates"
                  className="hover:text-primary hover:translate-x-1 inline-block transition-all"
                >
                  Updates
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary hover:translate-x-1 inline-block transition-all"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4">
            <h4 className="text-lg font-black mb-6 uppercase tracking-widest text-[#F8F9FF]">
              Stay Updated
            </h4>
            <p className="text-gray-400 text-sm md:text-base mb-6 max-w-sm leading-relaxed font-medium">
              The latest job news, articles, sent to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
              <Input
                type="email"
                placeholder="Email Address"
                className="bg-white/5 border-white/10 text-white rounded-none h-12 focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-0 flex-1 shadow-none"
              />
              <Button className="bg-primary hover:bg-blue-700 text-white rounded-none h-12 px-8 font-black uppercase text-xs tracking-widest w-full sm:w-auto shadow-none">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/5 mb-8 mt-12"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-gray-500 text-xs font-bold uppercase tracking-widest">
          <p>2024 © QuickHire. Built with passion for talent.</p>
          <div className="flex items-center gap-3">
            <Link
              href="#"
              className="w-9 h-9 border border-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-gray-400 hover:border-primary"
            >
              <Facebook className="w-4 h-4" />
            </Link>
            <Link
              href="#"
              className="w-9 h-9 border border-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-gray-400 hover:border-primary"
            >
              <Instagram className="w-4 h-4" />
            </Link>
            <Link
              href="#"
              className="w-9 h-9 border border-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-gray-400 hover:border-primary"
            >
              <Linkedin className="w-4 h-4" />
            </Link>
            <Link
              href="#"
              className="w-9 h-9 border border-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-gray-400 hover:border-primary"
            >
              <Twitter className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
