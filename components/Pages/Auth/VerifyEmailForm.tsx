"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/lib/toast";
import { AuthActionState, verifyOtp } from "@/services/auth.service";
import Image from "next/image";
import Link from "next/link";
import { useActionState, useEffect } from "react";

const initialState: AuthActionState = {
  success: false,
  message: "",
  errors: {},
  inputs: {},
  timestamp: 0,
};

export default function VerifyEmailForm() {
  const [state, action, isPending] = useActionState(verifyOtp, initialState);

  // Show toast messages based on form state
  useEffect(() => {
    if (state?.success) {
      toast.success(state?.message || "Email verified successfully!");
    } else if (state?.message && !state?.success) {
      toast.error(state?.message);
    }
  }, [state]);

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
          Verify Your Email
        </h1>
        <p className="text-sm text-gray-500 text-center">
          Enter the verification code sent to your email.
        </p>
      </div>

      <form action={action} className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 block text-left">
              Verification Code
            </label>
            <div className="relative flex justify-center items-center">
              <Input
                name="code"
                type="text"
                placeholder="e.g. 1234"
                maxLength={6}
                className="w-full h-12 bg-gray-50 border-gray-100 rounded-none outline-none shadow-none focus-visible:ring-0 focus-visible:border-primary focus-visible:bg-white transition-all text-sm text-center tracking-wider"
              />
            </div>
            {state?.errors?.code && (
              <p className="text-sm text-red-500 mt-1 text-center">
                {state.errors.code[0]}
              </p>
            )}
          </div>
        </div>

        <Button
          type="submit"
          disabled={isPending}
          className="w-full cursor-pointer bg-primary text-white rounded-none h-12 text-base font-semibold shadow-none hover:bg-primary"
        >
          {isPending ? "Verifying..." : "Verify Email"}
        </Button>
      </form>
    </div>
  );
}
