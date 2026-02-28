import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function VerifyEmailPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-md mx-auto p-8 border border-gray-200 bg-white text-center">
        <div className="flex flex-col items-center mb-6">
          <div className="relative h-10 w-10 mb-4">
            <Image
              src="/asset/logo/logo.png"
              alt="QuickHire Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Check Your Email
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            We&apos;ve sent a verification link to your email address. Please
            check your inbox and click the link to verify your account.
          </p>
        </div>

        <div className="space-y-4">
          <Link href="/login" className="block">
            <Button className="w-full bg-primary text-white rounded-none h-12 text-base font-semibold">
              Log In
            </Button>
          </Link>
          <div className="text-sm text-gray-600 mt-6">
            Didn&apos;t receive the email?{" "}
            <Link href="#" className="text-primary font-semibold">
              Resend Link
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
