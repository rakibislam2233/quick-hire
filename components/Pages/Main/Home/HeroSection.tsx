import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Search } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative w-full h-full bg-[#f8f9ff] overflow-hidden flex items-center justify-center pt-20">
      <div className="container px-5 md:px-16 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 items-center h-full">
        {/* Background Pattern Image */}
        <Image
          src="/asset/home/hero-pattern.png"
          alt="Hero decorative pattern"
          width={860}
          height={794}
          className="absolute -top-20 -right-10 object-contain opacity-90 pointer-events-none z-0 lg:block hidden"
          priority
        />
        {/* Left Column: Text and Search */}
        <div className="flex flex-col justify-center max-w-xl relative z-10 py-8">
          <h1 className="text-5xl md:text-7xl text-[#25324B] font-semibold mb-6">
            Discover <br /> more than <br />
            <span className="text-[#26A4FF] relative inline-block mt-2">
              5000+ Jobs
              <Image
                src="/asset/home/hero-line.png"
                alt="Highlight line"
                width={500}
                height={20}
                className="absolute left-0 -bottom-12 w-[110%] max-w-none"
              />
            </span>
          </h1>

          <p className="text-slate-500 text-sm md:text-lg font-medium mb-12 mt-10 leading-relaxed max-w-md">
            Great platform for the job seeker that searching for new career
            heights and passionate about startups.
          </p>

          {/* Search Box */}
          <div className="bg-white p-2 rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col md:flex-row items-center border border-gray-100 relative z-20">
            <div className="flex items-center flex-1 px-4 py-3 md:py-0 w-full border-b md:border-b-0 md:border-r border-gray-100">
              <Search className="text-gray-400 w-5 h-5 mr-3 shrink-0" />
              <Input
                type="text"
                placeholder="Job title or keyword"
                className="border-none shadow-none focus-visible:ring-0 text-gray-700 bg-transparent p-0 placeholder:text-gray-400 text-base flex-1"
              />
            </div>
            <div className="flex items-center flex-1 px-4 py-3 md:py-0 w-full cursor-pointer group">
              <MapPin className="text-gray-400 w-5 h-5 mr-3 shrink-0 group-hover:text-primary transition-colors" />
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

        {/* Right Column: Hero Images */}
        <div className="relative hidden lg:block min-h-[600px] w-full mt-10 lg:mt-0">
          {/* Main User Image */}
          <Image
            src="/asset/home/hero-user.png"
            alt="Happy job seeker pointing at jobs"
            fill
            className="object-contain object-bottom drop-shadow-2xl z-10"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
