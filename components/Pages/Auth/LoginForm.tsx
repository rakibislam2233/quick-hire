"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { loginUser } from "@/services/auth.service";
import { Lock, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useActionState } from "react";
import { AuthActionState } from "@/services/auth.service";

const initialState: AuthActionState = {
  success: false,
  message: "",
  errors: {},
  inputs: {},
  timestamp: 0,
};
export default function LoginForm() {
  const [state, formAction, isPending] = useActionState(
    loginUser,
    initialState,
  );

  return (
    <div className="w-full max-w-[450px] mx-auto p-10 md:p-12 border border-gray-100 bg-white shadow-none font-epilogue">
      <div className="flex flex-col items-center mb-10">
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
        <h1 className="text-3xl font-black text-[#25324B] mb-2  tracking-tighter">
          Welcome <span className="text-primary ">Back</span>
        </h1>
        <p className="text-sm text-gray-400 font-medium text-center">
          Login to access your personalized dashboard & jobs.
        </p>
      </div>

      <form action={formAction} className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 block text-left">
            Email Address
          </label>
          <div className="relative group">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 w-5 h-5 group-focus-within:text-primary transition-colors" />
            <Input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full h-12 pl-12 bg-gray-50 border-gray-100 rounded-none outline-none shadow-none focus-visible:ring-0 focus-visible:border-primary focus-visible:bg-white transition-all text-sm"
            />
          </div>
          {state?.errors?.email && (
            <p className="text-[10px] font-bold text-red-500  tracking-tight mt-1">
              {state.errors.email[0]}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center mb-1">
            <label className="text-sm font-medium text-gray-700 block text-left">
              Password
            </label>
            <Link
              href="/forgot-password"
              className="text-[10px] font-bold text-primary  tracking-widest hover:underline"
            >
              Forgot?
            </Link>
          </div>
          <div className="relative group">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 w-5 h-5 group-focus-within:text-primary transition-colors" />
            <Input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="w-full h-12 pl-12 bg-gray-50 border-gray-100 rounded-none outline-none shadow-none focus-visible:ring-0 focus-visible:border-primary focus-visible:bg-white transition-all text-sm"
            />
          </div>
          {state?.errors?.password && (
            <p className="text-[10px] font-bold text-red-500  tracking-tight mt-1">
              {state.errors.password[0]}
            </p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isPending}
          className="w-full bg-primary text-white rounded-none h-12 text-xs font-bold  tracking-widest shadow-none hover:bg-blue-700 transition-all active:scale-[0.98] mt-4 cursor-pointer"
        >
          {isPending ? "Authenticating..." : "Login to Account"}
        </Button>
      </form>

      <div className="mt-8 text-center sm:flex sm:items-center sm:justify-center sm:gap-2">
        <p className="text-xs text-gray-400 font-medium">
          Don&apos;t have an account?
        </p>
        <Link
          href="/register"
          className="text-xs font-bold text-primary  tracking-widest hover:underline"
        >
          Create Account
        </Link>
      </div>
    </div>
  );
}
