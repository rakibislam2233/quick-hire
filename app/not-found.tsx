"use client";
import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

const NotFound = () => {
  return (
    <main className="w-full min-h-screen flex flex-col bg-[#f8f9ff]">
      <div className="flex-1 flex flex-col items-center justify-center relative overflow-hidden font-epilogue py-24">
        {/* Background Pattern */}
        <Image
          src="/asset/home/hero-pattern.png"
          alt="Decorative pattern"
          width={800}
          height={800}
          className="absolute top-0 right-0 opacity-40 pointer-events-none"
        />

        <div className="container px-5 mx-auto text-center relative z-10">
          <div className="mb-8">
            <h1 className="text-9xl md:text-[180px] font-bold text-primary/10 tracking-tighter leading-none select-none">
              404
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-[#25324B] -mt-10 md:-mt-16 mb-6">
              Page <span className="text-primary">Not Found</span>
            </h2>
          </div>

          <p className="text-[#515B6F] font-epilogue text-lg max-w-lg mx-auto mb-10 leading-relaxed">
            Oops! The page you&apos;re looking for doesn&apos;t exist or has
            been moved. Let&apos;s get you back on track to find your dream job.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/">
              <Button className="bg-primary text-white rounded-none h-14 px-10 text-base font-bold font-epilogue shadow-lg hover:shadow-primary/20 transition-all active:scale-95 cursor-pointer">
                Back to Home
              </Button>
            </Link>
            <Link href="/jobs">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5 rounded-none h-14 px-10 text-base font-bold font-epilogue transition-all active:scale-95 cursor-pointer"
              >
                Browse Jobs
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
