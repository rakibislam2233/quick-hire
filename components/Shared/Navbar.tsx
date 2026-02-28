"use client";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Add background when scrolled down
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#F8F9FF]" : "bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 md:px-16 py-4">
        <div className="flex items-center gap-12">
          {/* Logo */}
          <Link href="/" className="flex items-center justify-center gap-2">
            <div className="relative w-8 h-8 md:w-10 md:h-9">
              <Image
                src="/asset/logo/logo.png"
                alt="QuickHire Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl md:text-2xl font-extrabold text-[#25324B]">
              QuickHire
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
            <Link
              href="/jobs"
              className="transition-colors hover:text-primary font-epilogue"
            >
              Find Jobs
            </Link>
            <Link
              href="/companies"
              className="transition-colors hover:text-primary font-epilogue"
            >
              Browse Companies
            </Link>
          </div>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/login">
            <Button
              variant="ghost"
              className="text-primary font-bold hover:bg-transparent px-2"
            >
              Login
            </Button>
          </Link>
          <div className="w-px h-6 bg-gray-200 mx-2"></div>
          <Link href="/register">
            <Button className="bg-primary hover:bg-blue-700 text-white rounded-none h-11 px-8 font-bold uppercase text-xs tracking-widest shadow-none">
              Sign Up
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#25324B] p-1.5"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <HiMenuAlt2 className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white border-b shadow-2xl flex flex-col items-center py-10 gap-8 transition-all duration-300 origin-top
          ${mobileMenuOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"}`}
      >
        <Link
          href="/jobs"
          onClick={() => setMobileMenuOpen(false)}
          className="text-xl font-black text-[#25324B] uppercase tracking-tighter hover:text-primary transition-colors"
        >
          Find Jobs
        </Link>
        <Link
          href="/companies"
          onClick={() => setMobileMenuOpen(false)}
          className="text-xl font-black text-[#25324B] uppercase tracking-tighter hover:text-primary transition-colors"
        >
          Browse Companies
        </Link>
        <div className="w-full px-10 mt-4 flex flex-col gap-4">
          <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
            <Button
              variant="outline"
              className="w-full border-gray-100 h-14 text-[#25324B] bg-gray-50 font-black uppercase text-xs tracking-widest rounded-none shadow-none"
            >
              Log In
            </Button>
          </Link>
          <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
            <Button className="w-full bg-primary hover:bg-blue-700 text-white h-14 font-black uppercase text-xs tracking-widest rounded-none shadow-none">
              Sign Up For Free
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
