import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Search } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative w-full bg-[#f8f9ff] min-h-[calc(100vh-80px)] overflow-hidden flex items-center justify-center">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/asset/home/hero-pattern.png"
          alt=""
          fill
          className="object-cover opacity-50 pointer-events-none"
        />
      </div>

      <div className="container px-6 md:px-16 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        {/* Left Column: Text and Search */}
        <div className="flex flex-col justify-center max-w-xl">
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#1f2937] leading-[1.1] mb-6 tracking-tight">
            Discover <br /> more than <br />
            <span className="text-blue-500 relative inline-block mt-2">
              5000+ Jobs
              <Image
                src="/asset/home/hero-line.png"
                alt="Highlight line"
                width={300}
                height={20}
                className="absolute -bottom-4 left-0 w-[110%] max-w-none"
              />
            </span>
          </h1>

          <p className="text-slate-500 text-lg md:text-xl font-medium mb-12 mt-4 leading-relaxed max-w-md">
            Great platform for the job seeker that searching for new career
            heights and passionate about startups.
          </p>

          {/* Search Box */}
          <div className="bg-white p-2 rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col md:flex-row items-center border border-gray-100">
            <div className="flex items-center flex-1 px-4 py-3 md:py-0 w-full border-b md:border-b-0 md:border-r border-gray-100">
              <Search className="text-gray-400 w-5 h-5 mr-3 flex-shrink-0" />
              <Input
                type="text"
                placeholder="Job title or keyword"
                className="border-none shadow-none focus-visible:ring-0 text-gray-700 bg-transparent p-0 placeholder:text-gray-400 text-base flex-1"
              />
            </div>
            <div className="flex items-center flex-1 px-4 py-3 md:py-0 w-full cursor-pointer group">
              <MapPin className="text-gray-400 w-5 h-5 mr-3 flex-shrink-0 group-hover:text-blue-500 transition-colors" />
              <div className="flex items-center justify-between w-full">
                <span className="text-gray-700 font-medium">
                  Florence, Italy
                </span>
                <span className="text-gray-400 text-xs ml-2">v</span>
              </div>
            </div>
            <Button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-md font-semibold text-base mt-2 md:mt-0 transition-transform active:scale-95">
              Search my job
            </Button>
          </div>

          <div className="mt-8 text-sm font-medium text-gray-500">
            Popular :{" "}
            <span className="text-gray-700 font-semibold cursor-pointer hover:text-blue-600">
              UI Designer
            </span>
            ,{" "}
            <span className="text-gray-700 font-semibold cursor-pointer hover:text-blue-600">
              UX Researcher
            </span>
            ,{" "}
            <span className="text-gray-700 font-semibold cursor-pointer hover:text-blue-600">
              Android
            </span>
            ,{" "}
            <span className="text-gray-700 font-semibold cursor-pointer hover:text-blue-600">
              Admin
            </span>
          </div>
        </div>

        {/* Right Column: Hero Image */}
        <div className="relative hidden lg:block h-[600px] w-full mt-10 lg:mt-0">
          <Image
            src="/asset/home/hero-user.png"
            alt="Happy job seeker pointing at jobs"
            fill
            className="object-contain object-bottom drop-shadow-2xl"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
