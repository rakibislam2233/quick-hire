import { Button } from "@/components/ui/button";
import Link from "next/link";

const AuthButtons = () => {
  return (
    <div className="hidden md:flex items-center gap-4">
      <Link href="/login">
        <Button
          variant="ghost"
          className="text-primary font-semibold hover:bg-transparent cursor-pointer"
        >
          Login
        </Button>
      </Link>
      <Link href="/register">
        <Button className="bg-primary text-white rounded-none h-12 px-8 cursor-pointer">
          Sign Up
        </Button>
      </Link>
    </div>
  );
};

export default AuthButtons;
