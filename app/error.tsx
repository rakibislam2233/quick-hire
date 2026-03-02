"use client";
import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import { Button } from "@/components/ui/button";
import { RefreshCcw } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="w-full min-h-screen flex flex-col bg-[#f8f9ff]">
      <div className="flex-1 flex flex-col items-center justify-center relative overflow-hidden py-24">
        {/* Background Pattern */}
        <Image
          src="/asset/home/hero-pattern.png"
          alt="Decorative pattern"
          width={800}
          height={800}
          className="absolute -top-40 -right-20 opacity-40 pointer-events-none"
        />

        <div className="container px-5 mx-auto text-center relative z-10">
          <div className="mb-8">
            <h1 className="text-9xl md:text-[180px] font-bold text-[#FF4D4D]/10 tracking-tighter leading-none select-none">
              500
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-[#25324B] -mt-10 md:-mt-16 mb-6">
              Something <span className="text-[#FF4D4D] ">Went Wrong</span>
            </h2>
          </div>

          <p className="text-[#515B6F] font-epilogue text-lg max-w-lg mx-auto mb-10 leading-relaxed">
            An unexpected error occurred. Don&apos;t worry, our team has been
            notified. You can try refreshing the page or head back home.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={() => reset()}
              className="bg-primary text-white rounded-none h-14 px-10 text-base font-bold font-epilogue shadow-lg hover:shadow-primary/20 transition-all active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <RefreshCcw className="w-5 h-5" />
              Try Again
            </Button>
            <Link href="/">
              <Button
                variant="outline"
                className="border-[#D6DDEB] text-[#25324B] hover:bg-gray-50 rounded-none h-14 px-10 text-base font-bold font-epilogue transition-all active:scale-95 cursor-pointer"
              >
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
