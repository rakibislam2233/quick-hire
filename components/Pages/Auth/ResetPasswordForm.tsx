"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { resetPasswordAction } from "@/services/auth.service";
import Image from "next/image";
import { useActionState } from "react";

export default function ResetPasswordForm() {
  const [state, action, isPending] = useActionState(resetPasswordAction, {});

  return (
    <div className="w-full max-w-md mx-auto p-8 border border-gray-200 bg-white">
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

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 block">
            New Password
          </label>
          <Input
            name="password"
            type="password"
            placeholder="Enter new password"
            className="w-full bg-gray-50 border-gray-200 outline-none"
          />
          {state?.errors?.password && (
            <p className="text-sm text-red-500 mt-1">
              {state.errors.password[0]}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 block">
            Confirm Password
          </label>
          <Input
            name="confirmPassword"
            type="password"
            placeholder="Confirm new password"
            className="w-full bg-gray-50 border-gray-200 outline-none"
          />
          {state?.errors?.confirmPassword && (
            <p className="text-sm text-red-500 mt-1">
              {state.errors.confirmPassword[0]}
            </p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isPending}
          className="w-full bg-primary text-white rounded-none h-12 text-base font-semibold"
        >
          {isPending ? "Resetting..." : "Reset Password"}
        </Button>
      </form>
    </div>
  );
}
