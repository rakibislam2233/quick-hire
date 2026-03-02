"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AuthActionState, verifyOtp } from "@/services/auth.service";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";

const initialState: AuthActionState = {
  success: false,
  message: "",
  errors: {},
  inputs: {},
  timestamp: 0,
};

export default function VerifyOtpForm() {
  const [state, action, isPending] = useActionState(verifyOtp, initialState);
  const router = useRouter();

  // Show toast messages based on form state
  useEffect(() => {
    if (state?.success) {
      toast.success(state?.message || "OTP verified successfully!");
    } else if (state?.message && !state?.success) {
      toast.error(state?.message);
    }
  }, [state]);

  // Redirect on successful verification
  useEffect(() => {
    if (state?.success && state?.data?.redirect) {
      router.push(state.data.redirect);
    }
  }, [state, router]);

  return (
    <div className="w-full max-w-lg mx-auto p-8 border border-gray-200 bg-white shadow-none font-epilogue">
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
          Verify Your OTP
        </h1>
        <p className="text-sm text-gray-500 text-center">
          Enter the 4-digit code sent to your email.
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

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 block text-left">
            One-Time Password
          </label>
          <div className="relative flex justify-center items-center">
            <Input
              name="otp"
              type="text"
              placeholder="e.g. 1234"
              maxLength={6}
              className="w-full h-12 bg-gray-50 border-gray-100 rounded-none outline-none shadow-none focus-visible:ring-0 focus-visible:border-primary focus-visible:bg-white transition-all text-sm text-center tracking-wider"
            />
          </div>
          {state?.errors?.otp && (
            <p className="text-sm text-red-500 mt-1 text-center">
              {state.errors.otp[0]}
            </p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isPending}
          className="w-full bg-primary text-white rounded-none h-12 text-base font-semibold shadow-none hover:bg-primary"
        >
          {isPending ? "Verifying..." : "Verify OTP"}
        </Button>
      </form>
    </div>
  );
}
