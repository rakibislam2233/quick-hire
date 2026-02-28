"use client";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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
        isScrolled
          ? "bg-white/90 backdrop-blur-md"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4 md:px-16">
        <div className="flex items-center gap-12">
          {/* Logo */}
          <Link href="/" className="flex items-center justify-center gap-2">
            <div className="relative h-10 w-10">
              <Image
                src="/asset/logo/logo.png"
                alt="QuickHire Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-2xl font-extrabold text-primary">
              QuickHire
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
            <Link href="/jobs" className="transition-colors">
              Find Jobs
            </Link>
            <Link href="/companies" className="transition-colors">
              Browse Companies
            </Link>
          </div>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/login">
            <Button
              variant="ghost"
              className="text-primary font-semibold hover:bg-blue-50"
            >
              Login
            </Button>
          </Link>
          <Link href="/register">
            <Button className="bg-primary text-white rounded-none px-6 h-10">
              Sign Up
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-md p-1"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b shadow-lg flex flex-col items-center py-6 gap-6">
          <Link
            href="/jobs"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-medium text-gray-700 hover:text-primary"
          >
            Find Jobs
          </Link>
          <Link
            href="/companies"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-medium text-gray-700 hover:text-primary"
          >
            Browse Companies
          </Link>
          <div className="w-full px-8 mt-2 flex flex-col gap-3">
            <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
              <Button
                variant="outline"
                className="w-full border-blue-600 text-primary hover:bg-blue-50 font-semibold"
              >
                Login
              </Button>
            </Link>
            <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
