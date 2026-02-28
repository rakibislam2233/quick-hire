import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="w-full container px-6 md:px-16 mx-auto">
        <div className="bg-primary overflow-hidden relative flex flex-col md:flex-row items-center w-full min-h-[400px]">
          {/* Left Content */}
          <div className="w-full md:w-[50%] p-10 md:p-16 text-white z-10 relative flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 leading-[1.1]">
              Start posting <br />
              <span className="italic">jobs today</span>
            </h2>
            <p className="text-blue-100 font-epilogue text-base md:text-lg font-medium mb-10 mt-2">
              Start posting jobs for only $10.{" "}
              <br className="hidden md:block" />
              Join the future of recruitment.
            </p>
            <Link href="/register" className="inline-block">
              <Button className="bg-white text-primary hover:bg-gray-100 font-black uppercase text-xs tracking-widest rounded-none px-10 h-14 shadow-none border-none">
                Sign Up For Free
              </Button>
            </Link>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-[50%] h-[250px] md:h-full relative overflow-visible">
            <div className="absolute bottom-0 right-0 md:-right-10 w-[120%] h-[120%] md:h-[400px] pointer-events-none">
              <Image
                src="/asset/callToAction/admin-dashboard.png"
                alt="Dashboard Preview"
                fill
                className="object-contain object-right-bottom drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
