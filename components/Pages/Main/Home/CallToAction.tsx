import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="w-full container px-5 md:px-16 mx-auto">
        <div className="bg-primary overflow-visible relative flex flex-col md:flex-row items-center w-full min-h-[400px] md:h-[414px]">
          {/* Left Content */}
          <div className="w-full md:w-[45%] p-10 md:p-16 text-white z-10 relative flex flex-col justify-center h-full">
            <h2 className="text-4xl md:text-5xl font-semibold font-sans mb-4 leading-[1.1]">
              Start posting <br /> jobs today
            </h2>
            <p className="text-white/90 font-epilogue text-lg font-medium mb-8 mt-2">
              Start posting jobs for only $10.
            </p>
            <Link href="/register" className="inline-block">
              <Button className="bg-white text-primary hover:bg-gray-100 font-epilogue font-semibold rounded-none px-8 py-4 h-12 text-base">
                Sign Up For Free
              </Button>
            </Link>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-[55%] h-full relative pt-[68px] pr-[70px]">
            <Image
              src="/asset/callToAction/admin-dashboard.png"
              alt="Dashboard Preview"
              width={500}
              height={400}
              className="object-contain absolute bottom-0"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
