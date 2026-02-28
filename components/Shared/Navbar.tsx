import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 md:px-16 border-b bg-white border-none">
      <div className="flex items-center gap-12">
        <Link href="/" className="flex items-center gap-2">
          {/* If the exact logo asset is missing or has a different name, we can fallback to an Image tag referencing the assumed path */}
          <div className="relative h-8 w-32">
            <Image
              src="/asset/logo/logo.png"
              alt="QuickHire Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="/jobs" className="hover:text-blue-600 transition-colors">
            Find Jobs
          </Link>
          <Link
            href="/companies"
            className="hover:text-blue-600 transition-colors"
          >
            Browse Companies
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Link href="/login">
          <Button
            variant="ghost"
            className="text-blue-600 font-semibold hover:bg-blue-50"
          >
            Login
          </Button>
        </Link>
        <Link href="/register">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-6">
            Sign Up
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
