import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Search } from "lucide-react";
import Image from "next/image";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const HeroSection = () => {
  return (
    <section className="relative w-full h-full bg-[#f8f9ff] overflow-hidden flex items-center justify-center pt-20">
      <div className="container px-5 md:px-16 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 items-center h-full">
        {/* Dektop Search Box */}
        <div
          className="w-full hidden lg:flex lg:max-w-[852px] lg:h-[89px] bg-white p-4  flex-col lg:flex-row gap-6 lg:gap-8 items-center border border-gray-100 z-20 relative lg:absolute lg:left-16 lg:bottom-[120px] mt-8 lg:mt-0"
          style={{
            boxShadow: `
              0px 2.71px 4.4px 0px rgba(192, 192, 192, 0.0271),
              0px 6.86px 11.12px 0px rgba(192, 192, 192, 0.0381),
              0px 14px 22.68px 0px rgba(192, 192, 192, 0.0476),
              0px 28.84px 46.72px 0px rgba(192, 192, 192, 0.0599),
              0px 79px 128px 0px rgba(192, 192, 192, 0.09)
            `,
          }}
        >
          <div className="flex items-center flex-1 px-4 py-2.5 w-full border-b lg:border-b-0 lg:border-r border-[#D6DDEB] font-epilogue">
            <Search className="text-gray-400 w-5 h-5 mr-3 shrink-0" />
            <Input
              type="text"
              placeholder="Job title or keyword"
              className="border-none shadow-none focus-visible:ring-0 text-gray-700 bg-transparent p-0 placeholder:text-gray-400 text-base flex-1"
            />
          </div>
          <div className="flex items-center flex-1 px-4 py-2.5 w-full cursor-pointer group border-b lg:border-b-0 border-[#D6DDEB] font-epilogue">
            <MapPin className="text-gray-400 w-5 h-5 mr-3 shrink-0" />
            <Input
              type="text"
              placeholder="Florence, Italy"
              className=" border-none shadow-none focus-visible:ring-0 text-gray-700 bg-transparent p-0 placeholder:text-gray-400 text-base flex-1"
            />
            <MdOutlineKeyboardArrowDown className="text-gray-400 size-6 shrink-0" />
          </div>
          <Button className="w-full lg:w-[209px] lg:h-[57px] rounded-none bg-primary text-white px-8 py-6 text-base mt-2 lg:mt-0 transition-transform cursor-pointer font-epilogue">
            Search my job
          </Button>
        </div>
        {/* Background Pattern Image */}
        <Image
          src="/asset/home/hero-pattern.png"
          alt="Hero decorative pattern"
          width={860}
          height={794}
          className="absolute bottom-0 -right-10 lg:top-0  object-contain opacity-90 pointer-events-none z-0"
          priority
        />

        {/* Left Column: Text and Search */}
        <div className="flex flex-col justify-center max-w-xl relative z-10 pt-10 pb-10 lg:pb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#25324B] font-bold mb-6 leading-tight">
            Discover <br className="hidden sm:block" /> more than{" "}
            <br className="hidden sm:block" />
            <span className="text-[#26A4FF] relative inline-block mt-2">
              5000+ Jobs
              <Image
                src="/asset/home/hero-line.png"
                alt="Highlight line"
                width={500}
                height={20}
                className="absolute left-0 -bottom-8 sm:-bottom-12 w-[110%] max-w-none"
              />
            </span>
          </h1>

          <p className="text-[#515B6F] font-epilogue text-sm md:text-lg mb-8 lg:mb-12 mt-6 lg:mt-10 leading-relaxed">
            Great platform for the job seeker that searching for new career
            heights and passionate about startups.
          </p>
          {/* Mobile Searchbox */}
          <div
            className="w-full lg:hidden  bg-white p-6 lg:p-4 flex flex-col lg:flex-row gap-4 lg:gap-8 items-center border border-gray-100 z-20"
            style={{
              boxShadow: `
              0px 2.71px 4.4px 0px rgba(192, 192, 192, 0.0271),
              0px 6.86px 11.12px 0px rgba(192, 192, 192, 0.0381),
              0px 14px 22.68px 0px rgba(192, 192, 192, 0.0476),
              0px 28.84px 46.72px 0px rgba(192, 192, 192, 0.0599),
              0px 79px 128px 0px rgba(192, 192, 192, 0.09)
            `,
            }}
          >
            <div className="flex items-center flex-1 lg:px-4 py-2 w-full border-b lg:border-b-0 lg:border-r border-[#D6DDEB] font-epilogue">
              <Search className="text-gray-400 w-5 h-5 mr-3 shrink-0" />
              <Input
                type="text"
                placeholder="Job title or keyword"
                className="border-none shadow-none focus-visible:ring-0 text-gray-700 bg-transparent p-0 placeholder:text-gray-400 text-base flex-1"
              />
            </div>
            <div className="flex items-center flex-1 lg:px-4 py-2 w-full cursor-pointer group border-b lg:border-b-0 border-[#D6DDEB] font-epilogue">
              <MapPin className="text-gray-400 w-5 h-5 mr-3 shrink-0" />
              <Input
                type="text"
                placeholder="Florence, Italy"
                className=" border-none shadow-none focus-visible:ring-0 text-gray-700 bg-transparent p-0 placeholder:text-gray-400 text-base flex-1"
              />
              <MdOutlineKeyboardArrowDown className="text-gray-400 size-6 shrink-0" />
            </div>
            <Button className="w-full lg:w-[209px] lg:h-[57px] rounded-none bg-primary hover:bg-[#3b36c0] text-white px-8 py-6 text-base mt-2 lg:mt-0 transition-all cursor-pointer font-bold font-epilogue">
              Search my job
            </Button>
          </div>
          <div className="mt-8 md:mt-20 text-sm font-medium text-gray-500">
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
            className="object-contain object-bottom drop-shadow-2xl z-10 ml-0 xl:ml-16 mt-0 xl:mt-10"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
