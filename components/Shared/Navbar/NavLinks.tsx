import Link from "next/link";

const NavLinks = () => {
  return (
    <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
      <Link
        href="/jobs"
        className="transition-colors font-epilogue hover:text-primary"
      >
        Find Jobs
      </Link>
      <Link
        href="/companies"
        className="transition-colors font-epilogue hover:text-primary"
      >
        Browse Companies
      </Link>
    </div>
  );
};

export default NavLinks;
