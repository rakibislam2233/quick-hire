import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center justify-center gap-1">
      <div className="relative w-10 h-9">
        <Image
          src="/asset/logo/logo.png"
          alt="QuickHire Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      <span className="text-2xl font-extrabold text-[#25324B]">QuickHire</span>
    </Link>
  );
};

export default Logo;
