"use client";
import React, { useEffect, useState } from "react";

interface NavbarClientContainerProps {
  children: React.ReactNode;
}

const NavbarClientContainer: React.FC<NavbarClientContainerProps> = ({
  children,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
      {children}
    </nav>
  );
};

export default NavbarClientContainer;
