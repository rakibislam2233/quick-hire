"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AuthActionState, resetPassword } from "@/services/auth.service";
import { Lock } from "lucide-react";
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

export default function ResetPasswordForm() {
  const [state, action, isPending] = useActionState(resetPassword, initialState);
  const router = useRouter();

  // Show toast messages based on form state
  useEffect(() => {
    if (state?.success) {
      toast.success(state?.message || "Password reset successfully!");
    } else if (state?.message && !state?.success) {
      toast.error(state?.message);
    }
  }, [state]);

  // Redirect to login on successful password reset
  useEffect(() => {
    if (state?.success) {
      setTimeout(() => {
        router.push("/login");
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
          Reset Password
        </h1>
        <p className="text-sm text-gray-500 text-center">
          Please enter your new password below.
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
            New Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="w-full h-12 pl-12 bg-gray-50 border-gray-100 rounded-none outline-none shadow-none focus-visible:ring-0 focus-visible:border-primary focus-visible:bg-white transition-all text-sm"
            />
          </div>
          {state?.errors?.password && (
            <p className="text-sm text-red-500 mt-1">
              {state.errors.password[0]}
            </p>
          )}
        </div>

        <div className="space-y-2 text-left">
          <label className="text-sm font-medium text-gray-700 block text-left">
            Confirm Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              name="confirmPassword"
              type="password"
              placeholder="Enter your confirm password"
              className="w-full h-12 pl-12 bg-gray-50 border-gray-100 rounded-none outline-none shadow-none focus-visible:ring-0 focus-visible:border-primary focus-visible:bg-white transition-all text-sm"
            />
          </div>
          {state?.errors?.confirmPassword && (
            <p className="text-sm text-red-500 mt-1">
              {state.errors.confirmPassword[0]}
            </p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isPending}
          className="w-full bg-primary text-white rounded-none h-12 text-base font-semibold shadow-none hover:bg-primary"
        >
          {isPending ? "Resetting..." : "Reset Password"}
        </Button>
      </form>
    </div>
  );
}
