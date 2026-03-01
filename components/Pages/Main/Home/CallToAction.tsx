import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="w-full bg-white py-10 md:py-16 ">
      <div className="w-full container px-5 md:px-16 mx-auto">
        <div className="bg-primary overflow-hidden relative flex flex-col md:flex-row items-center w-full h-full px-0 pt-16 md:pt-24 pb-24 md:pb-0 border border-none">
          {/* Top-Left White Triangle — CSS border trick */}
          <div
            className="absolute top-0 left-0 z-0"
            style={{
              width: 0,
              height: 0,
              borderStyle: "solid",
              borderWidth: "92px 162px 0 0",
              borderColor: "white transparent transparent transparent",
              transform: "translate(-1px, -1px)", 
            }}
          />

          {/* Bottom-Right White Triangle */}
          <div
            className="absolute bottom-0 right-0 z-0"
            style={{
              width: 0,
              height: 0,
              borderStyle: "solid",
              borderWidth: "0 0 92px 162px",
              borderColor: "transparent transparent white transparent",
              transform: "translate(1px, 1px)",
            }}
          />
          {/* Left Content — Mobile: centered | Desktop: left aligned */}
          <div className="w-full md:w-[40%] text-white z-10 relative flex flex-col items-center md:items-start justify-center h-full space-y-4 md:space-y-6 text-center md:text-left px-16">
            <h2 className="text-4xl md:text-5xl font-semibold font-sans leading-[1.15]">
              Start posting <br className="hidden md:block" /> jobs today
            </h2>
            <p className="text-white/90 font-epilogue text-base md:text-lg font-medium">
              Start posting jobs for only $10.
            </p>
            <Link href="/register" className="w-full md:w-auto inline-block">
              <Button className="w-full md:w-auto bg-white text-primary hover:bg-gray-100 font-epilogue font-semibold rounded-none px-8 py-4 h-12 text-base border-0">
                Sign Up For Free
              </Button>
            </Link>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-[60%] h-[346px] relative z-10">
            <Image
              src="/asset/callToAction/admin-dashboard.png"
              alt="Dashboard Preview"
              fill
              className="object-contain absolute top-[20px] md:top-0 right-0 md:bottom-0 md:right-5"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
