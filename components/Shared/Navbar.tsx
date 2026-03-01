"use client";

import { useEffect, useState } from "react";
import AuthButtons from "./Navbar/AuthButtons";
import Logo from "./Navbar/Logo";
import MobileMenu from "./Navbar/MobileMenu";
import NavLinks from "./Navbar/NavLinks";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
      className={`fixed top-0 w-full z-100 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F8F9FF] border-b border-gray-100"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-5 md:px-16 py-4">
        <div className="flex items-center gap-12">
          {/* Logo */}
          <Logo />

          {/* Desktop Links */}
          <NavLinks />
        </div>

        {/* Desktop Auth Buttons */}
        <AuthButtons />

        {/* Mobile Menu & Drawer */}
        <MobileMenu />
      </div>
    </nav>
  );
};

export default Navbar;
