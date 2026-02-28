"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { forgotPasswordAction } from "@/services/auth.service";
import Image from "next/image";
import Link from "next/link";
import { useActionState } from "react";

export default function ForgotPasswordForm() {
  const [state, action, isPending] = useActionState(forgotPasswordAction, {});

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
          Enter your email and we&apos;ll send you a link to reset your
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

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 block">
            Email Address
          </label>
          <Input
            name="email"
            type="email"
            placeholder="Enter your email"
            className="w-full bg-gray-50 border-gray-200 outline-none"
          />
          {state?.errors?.email && (
            <p className="text-sm text-red-500 mt-1">{state.errors.email[0]}</p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isPending}
          className="w-full bg-primary text-white rounded-none h-12 text-base font-semibold"
        >
          {isPending ? "Sending link..." : "Send Reset Link"}
        </Button>
      </form>

      <div className="mt-6 text-center text-sm text-gray-600">
        Remembered your password?{" "}
        <Link href="/login" className="text-primary font-semibold">
          Log In
        </Link>
      </div>
    </div>
  );
}
