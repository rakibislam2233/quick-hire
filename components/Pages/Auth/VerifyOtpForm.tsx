"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { verifyOtpAction } from "@/services/auth.service";
import Image from "next/image";
import { useActionState } from "react";

export default function VerifyOtpForm() {
  const [state, action, isPending] = useActionState(verifyOtpAction, {});

  return (
    <div className="w-full max-w-md mx-auto p-8 border border-gray-200 bg-white shadow-none">
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
          <label className="text-sm font-medium text-gray-700 block text-center">
            One-Time Password
          </label>
          <Input
            name="otp"
            type="text"
            placeholder="e.g. 1234"
            maxLength={4}
            className="w-full text-center tracking-widest text-xl bg-gray-50 border-gray-200 outline-none shadow-none focus-visible:ring-0 focus-visible:border-primary"
          />
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
