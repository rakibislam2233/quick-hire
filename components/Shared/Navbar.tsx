import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
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
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#F8F9FF] border-b border-gray-100"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-5 md:px-16 py-4">
          <div className="flex items-center gap-12">
            {/* Logo */}
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
              <span className="text-2xl font-extrabold text-[#25324B]">
                QuickHire
              </span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
              <Link
                href="/jobs"
                className="transition-colors font-epilogue hover:text-primary"
              >
                Find Jobs
              </Link>
              <Link
                href="/companies"
                className="transition-colors font-epilogue hover:text-primary"
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
                className="text-primary font-semibold hover:bg-transparent cursor-pointer"
              >
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button className="bg-primary text-white rounded-none h-12 px-8 cursor-pointer">
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="text-gray-700 border border-[#D6DDEB] rounded-full p-2"
              aria-label="Toggle navigation menu"
            >
              <HiMenuAlt2 className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer (Sidebar Style) */}
      {/* Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-60 md:hidden transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar aside */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-70 w-72 bg-[#F8F9FF] flex flex-col h-screen transition-transform duration-300 ease-in-out md:hidden font-epilogue border-r border-gray-100",
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="p-6 flex items-center justify-between border-b border-gray-50">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-1"
          >
            <div className="relative size-10">
              <Image
                src="/asset/logo/logo.png"
                alt="QuickHire Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl font-extrabold text-[#25324B]">
              QuickHire
            </span>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-gray-400 hover:text-primary transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 px-4 py-8 space-y-2">
          <div className="px-4 mb-4">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              Main Menu
            </span>
          </div>
          <Link
            href="/jobs"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-4 py-4 text-base font-bold text-gray-600 hover:text-primary hover:bg-white transition-all rounded-lg"
          >
            Find Jobs
          </Link>
          <Link
            href="/companies"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-4 py-4 text-base font-bold text-gray-600 hover:text-primary hover:bg-white transition-all rounded-lg"
          >
            Browse Companies
          </Link>
        </nav>

        <div className="p-6 space-y-3 mt-auto border-t border-gray-50 bg-white/50">
          <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
            <Button
              variant="outline"
              className="w-full h-12 border-primary text-primary hover:bg-primary/5 font-bold rounded-none"
            >
              Login
            </Button>
          </Link>
          <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
            <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-bold rounded-none shadow-lg shadow-primary/20">
              Sign Up
            </Button>
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
