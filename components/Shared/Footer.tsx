import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#202430] text-white pt-16 pb-8 font-epilogue">
      <div className="container px-5 md:px-16 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Logo & Info */}
          <div className="lg:col-span-4 flex flex-col items-start gap-6 pr-4">
            <Link href="/" className="flex items-center justify-center gap-1">
              <div className="relative w-10 h-9">
                <Image
                  src="/asset/logo/logo.png"
                  alt="QuickHire Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-2xl font-extrabold text-white">
                QuickHire
              </span>
            </Link>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-sm mt-2">
              Great platform for the job seeker that passionate about startups.
              Find your dream job easier.
            </p>
          </div>

          {/* Links: About */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-6 font-epilogue text-white">
              About
            </h4>
            <ul className="flex flex-col gap-4 text-gray-400 text-sm md:text-base">
              <li>
                <Link
                  href="/companies"
                  className="hover:text-white transition-colors"
                >
                  Companies
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="hover:text-white transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-white transition-colors"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="/advice"
                  className="hover:text-white transition-colors"
                >
                  Advice
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Links: Resources */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-6 font-epilogue text-white">
              Resources
            </h4>
            <ul className="flex flex-col gap-4 text-gray-400 text-sm md:text-base">
              <li>
                <Link
                  href="/help"
                  className="hover:text-white transition-colors"
                >
                  Help Docs
                </Link>
              </li>
              <li>
                <Link
                  href="/guide"
                  className="hover:text-white transition-colors"
                >
                  Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/updates"
                  className="hover:text-white transition-colors"
                >
                  Updates
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4">
            <h4 className="text-lg font-semibold mb-6 font-epilogue text-white">
              Get job notifications
            </h4>
            <p className="text-gray-400 text-sm md:text-base mb-6 max-w-sm leading-relaxed">
              The latest job news, articles, sent to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 w-full">
              <Input
                type="email"
                placeholder="Email Address"
                className="bg-white text-gray-900 border-none rounded-none h-12 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-0 focus-visible:ring-offset-transparent flex-1"
              />
              <Button className="bg-primary cursor-pointer text-white rounded-none h-12 px-8 font-semibold w-full sm:w-auto">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gray-800 mb-8 mt-12"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-gray-400 text-sm font-medium">
          <p>{new Date().getFullYear()} © QuickHire. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="w-8 h-8 rounded-full bg-gray-800/80 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-white"
            >
              <Facebook className="w-4 h-4" />
            </Link>
            <Link
              href="#"
              className="w-8 h-8 rounded-full bg-gray-800/80 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-white"
            >
              <Instagram className="w-4 h-4" />
            </Link>
            <Link
              href="#"
              className="w-8 h-8 rounded-full bg-gray-800/80 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-white"
            >
              <Linkedin className="w-4 h-4" />
            </Link>
            <Link
              href="#"
              className="w-8 h-8 rounded-full bg-gray-800/80 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-white"
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
