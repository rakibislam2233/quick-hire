"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { registerAction } from "@/services/auth.service";
import { Building2, Lock, Mail, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useActionState } from "react";

export default function RegisterForm() {
  const [state, action, isPending] = useActionState(registerAction, {});

  return (
    <div className="w-full max-w-[500px] mx-auto p-10 md:p-12 border border-gray-100 bg-white shadow-none font-epilogue">
      <div className="flex flex-col items-center">
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
        <h1 className="text-3xl font-black text-[#25324B] mb-2 tracking-tighter">
          Create <span className="text-primary">Account</span>
        </h1>
        <p className="text-sm text-gray-400 font-medium text-center">
          Join thousands of users discovering greatness.
        </p>
      </div>

      <form action={action} className="space-y-6">
        {state?.message && (
          <div
            className={`p-4 text-xs font-bold  tracking-widest rounded-none border ${
              state.success
                ? "bg-green-50 text-green-600 border-green-100"
                : "bg-red-50 text-red-600 border-red-100"
            }`}
          >
            {state.message}
          </div>
        )}

        {/* Role Selection */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-gray-700 block text-left">
            Who are you?
          </label>
          <div className="grid grid-cols-2 gap-4">
            <label className="cursor-pointer group">
              <input
                type="radio"
                name="role"
                value="candidate"
                className="peer hidden"
                defaultChecked
              />
              <div className="px-4 py-2 border border-gray-100 peer-checked:border-primary peer-checked:bg-blue-50/30 transition-all flex flex-col items-center gap-2 group-hover:border-primary/50">
                <User className="w-5 h-5 text-gray-300 peer-checked:text-primary group-hover:text-primary transition-colors" />
                <span className="text-[10px] font-black  tracking-widest text-gray-400 peer-checked:text-primary group-hover:text-primary">
                  Candidate
                </span>
              </div>
            </label>
            <label className="cursor-pointer group">
              <input
                type="radio"
                name="role"
                value="employer"
                className="peer hidden"
              />
              <div className="px-4 py-2 border border-gray-100 peer-checked:border-primary peer-checked:bg-blue-50/30 transition-all flex flex-col items-center gap-2 group-hover:border-primary/50">
                <Building2 className="w-5 h-5 text-gray-300 peer-checked:text-primary group-hover:text-primary transition-colors" />
                <span className="text-[10px] font-black  tracking-widest text-gray-400 peer-checked:text-primary group-hover:text-primary">
                  Company
                </span>
              </div>
            </label>
          </div>
          {state?.errors?.role && (
            <p className="text-[10px] font-bold text-red-500  tracking-tight mt-1">
              {state.errors.role[0]}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 block text-left">
            Full Name
          </label>
          <div className="relative group">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 w-5 h-5 group-focus-within:text-primary transition-colors" />
            <Input
              name="fullName"
              type="text"
              placeholder="Enter your name"
              className="w-full h-12 pl-12 bg-gray-50 border-gray-100 rounded-none outline-none shadow-none focus-visible:ring-0 focus-visible:border-primary focus-visible:bg-white transition-all text-sm"
            />
          </div>
          {state?.errors?.fullName && (
            <p className="text-[10px] font-bold text-red-500  tracking-tight mt-1">
              {state.errors.fullName[0]}
            </p>
          )}
        </div>

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
          <label className="text-sm font-medium text-gray-700 block text-left">
            Password
          </label>
          <div className="relative group">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 w-5 h-5 group-focus-within:text-primary transition-colors" />
            <Input
              name="password"
              type="password"
              placeholder="Create a strong password"
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
          {isPending ? "Creating Account..." : "Start Your Journey"}
        </Button>
      </form>

      <div className="mt-8 text-center sm:flex sm:items-center sm:justify-center sm:gap-2">
        <p className="text-xs text-gray-400 font-medium">
          Already have an account?
        </p>
        <Link
          href="/login"
          className="text-xs font-bold text-primary  tracking-widest hover:underline"
        >
          Log In
        </Link>
      </div>
    </div>
  );
}
