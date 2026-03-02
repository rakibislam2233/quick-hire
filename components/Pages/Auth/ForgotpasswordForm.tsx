"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { AuthActionState, forgotPassword } from "@/services/auth.service";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";

const initialState: AuthActionState = {
  success: false,
  message: "",
  errors: {},
  inputs: {},
  timestamp: 0,
};

export default function ForgotPasswordForm() {
  const [state, action, isPending] = useActionState(forgotPassword, initialState);
  const router = useRouter();

  // Show toast messages based on form state
  useEffect(() => {
    if (state?.success) {
      toast.success(state?.message || "Reset password otp sent to your email!");
    } else if (state?.message && !state?.success) {
      toast.error(state?.message);
    }
  }, [state]);

  // Redirect to verify-otp on successful forgot password
  useEffect(() => {
    if (state?.success) {
      setTimeout(() => {
        router.push("/verify-otp");
      }, 2000); // Wait 2 seconds before redirecting
    }
  }, [state, router]);

  return (
    <div className="w-full max-w-md mx-auto p-8 border border-gray-200 bg-white shadow-none font-epilogue">
      <div className="flex flex-col items-center mb-6">
        <Link href="/" className="flex items-center justify-center gap-1 mb-6">
          <div className="relative w-10 h-9">
            <Image
              src="/asset/logo/logo.png"
              alt="QuickHire Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-2xl font-extrabold text-[#25324B]">
            QuickHire
          </span>
        </Link>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Forgot Password
        </h1>
        <p className="text-sm text-gray-500 text-center">
          Enter your email and we&apos;ll send you an OTP to reset your
          password.
        </p>
      </div>

      <form action={action} className="space-y-6">
        {state?.message && (
          <div
            className={`p-3 text-sm rounded ${state.success ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"}`}
          >
            {state.message}
          </div>
        )}

        <div className="space-y-2 text-left">
          <label className="text-sm font-medium text-gray-700 block text-left">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full h-12 pl-12 bg-gray-50 font-epilogue border-gray-100 rounded-none outline-none shadow-none focus-visible:ring-0 focus-visible:border-primary focus-visible:bg-white transition-all text-sm"
            />
          </div>
          {state?.errors?.email && (
            <p className="text-sm text-red-500 mt-1">{state.errors.email[0]}</p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isPending}
          className="w-full bg-primary text-white rounded-none h-12 text-base font-semibold shadow-none hover:bg-primary"
        >
          {isPending ? "Sending OTP..." : "Send OTP"}
        </Button>
      </form>

      <div className="mt-6 text-center text-sm text-gray-600">
        Remembered your password?{" "}
        <Link href="/login" className="text-primary font-semibold no-underline">
          Log In
        </Link>
      </div>
    </div>
  );
}
