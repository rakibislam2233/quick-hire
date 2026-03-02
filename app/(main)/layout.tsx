import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full min-h-screen">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default MainLayout;
