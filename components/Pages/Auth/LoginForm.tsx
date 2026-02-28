"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { loginAction } from "@/services/auth.service";
import Image from "next/image";
import Link from "next/link";
import { useActionState } from "react";

export default function LoginForm() {
  const [state, action, isPending] = useActionState(loginAction, {});

  return (
    <div className="w-full max-w-md mx-auto p-8 border border-gray-200 bg-white shadow-none">
      <div className="flex flex-col items-center mb-8">
        <div className="relative h-10 w-10 mb-4">
          <Image
            src="/asset/logo/logo.png"
            alt="QuickHire Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back</h1>
        <p className="text-sm text-gray-500 text-center">
          Log in to your account to continue
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
            Email Address
          </label>
          <Input
            name="email"
            type="email"
            placeholder="Enter your email"
            className="w-full bg-gray-50 border-gray-200 outline-none shadow-none focus-visible:ring-0 focus-visible:border-primary"
          />
          {state?.errors?.email && (
            <p className="text-sm text-red-500 mt-1">{state.errors.email[0]}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 flex justify-between">
            Password
            <Link
              href="/forgot-password"
              className="text-primary text-xs no-underline"
            >
              Forgot Password?
            </Link>
          </label>
          <Input
            name="password"
            type="password"
            placeholder="Enter your password"
            className="w-full bg-gray-50 border-gray-200 outline-none shadow-none focus-visible:ring-0 focus-visible:border-primary"
          />
          {state?.errors?.password && (
            <p className="text-sm text-red-500 mt-1">
              {state.errors.password[0]}
            </p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isPending}
          className="w-full bg-primary text-white rounded-none h-12 text-base font-semibold shadow-none hover:bg-primary"
        >
          {isPending ? "Logging in..." : "Login"}
        </Button>
      </form>

      <div className="mt-6 text-center text-sm text-gray-600">
        Don&apos;t have an account?{" "}
        <Link
          href="/register"
          className="text-primary font-semibold no-underline"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}
