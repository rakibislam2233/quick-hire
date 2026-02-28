import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="container px-5 md:px-16 mx-auto">
        <div className="bg-primary rounded-none md:rounded-r-full overflow-hidden relative flex flex-col md:flex-row items-center min-h-[400px]">
          {/* Left Content */}
          <div className="w-full md:w-1/2 p-10 md:p-16 text-white z-10 relative">
            <h2 className="text-4xl md:text-5xl font-bold font-sans mb-4 leading-tight">
              Start posting <br /> jobs today
            </h2>
            <p className="text-blue-100 font-epilogue text-lg font-medium mb-8">
              Start posting jobs for only $10.
            </p>
            <Link href="/register">
              <Button className="bg-white text-primary hover:bg-gray-100 font-epilogue font-bold rounded-none px-8 py-6 h-auto text-base">
                Sign Up For Free
              </Button>
            </Link>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-[55%] relative h-[250px] md:h-full md:absolute md:right-0 md:top-0">
            <Image
              src="/asset/home/Rectangle 2732.png"
              alt="Dashboard Preview"
              fill
              className="object-cover md:object-contain object-left md:object-right-top drop-shadow-2xl translate-y-8 md:translate-y-0"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
