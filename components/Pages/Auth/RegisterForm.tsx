"use client";
import { Button } from "@/components/ui/button";
import { FormInput } from "@/components/ui/form-input";
import { AuthActionState, register } from "@/services/auth.service";
import { Building2, Lock, Mail, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";
const initialState: AuthActionState = {
  success: false,
  message: "",
  errors: {},
  inputs: {},
  timestamp: 0,
};

export default function RegisterForm() {
  const [state, formAction, isPending] = useActionState(register, initialState);
  const [role, setRole] = useState<"USER" | "COMPANY">(
    state?.inputs?.role || "USER",
  );
  const router = useRouter();

  // Show toast messages based on form state
  useEffect(() => {
    if (state?.success) {
      toast.success(state?.message || "Registration successful!");
    } else if (state?.message && !state?.success) {
      toast.error(state?.message);
    }
  }, [state]);

  // Redirect to verify-email on successful registration
  useEffect(() => {
    if (state?.success && state?.data?.sessionId) {
      router.push("/verify-email");
    }
  }, [state, router]);

  return (
    <div className="w-full max-w-xl mx-auto px-8 py-8 md:px-10 md:py-9 border border-gray-100 bg-white shadow-none font-epilogue">
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

      <form action={formAction} className="space-y-6">
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
                value="USER"
                className="peer hidden"
                checked={role === "USER"}
                onChange={() => setRole("USER")}
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
                value="COMPANY"
                className="peer hidden"
                checked={role === "COMPANY"}
                onChange={() => setRole("COMPANY")}
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

        {/* Basic Information - Grid only for COMPANY */}
        <div
          className={
            role === "COMPANY"
              ? "grid grid-cols-1 md:grid-cols-2 gap-4"
              : "space-y-6"
          }
        >
          <FormInput
            id="fullName"
            name="fullName"
            label="Full Name"
            icon={User}
            defaultValue={state?.inputs?.fullName ?? undefined}
            placeholder="Enter your full name"
            error={state?.errors?.fullName}
            required
          />
          <FormInput
            id="email"
            name="email"
            type="email"
            label="Email Address"
            icon={Mail}
            defaultValue={state?.inputs?.email ?? undefined}
            placeholder="rahim@example.com"
            error={state?.errors?.email}
            required
          />
        </div>

        <FormInput
          id="password"
          name="password"
          type="password"
          label="Password"
          icon={Lock}
          defaultValue={state?.inputs?.password ?? undefined}
          placeholder="Create a password"
          error={state?.errors?.password}
          required
        />

        {/* Company Information Grid */}
        {role === "COMPANY" && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormInput
                id="companyName"
                name="companyName"
                label="Company Name"
                defaultValue={state?.inputs?.companyName ?? undefined}
                placeholder="Your company's name"
                error={state?.errors?.companyName}
                required
              />
              <FormInput
                id="companyIndustry"
                name="companyIndustry"
                label="Industry"
                defaultValue={state?.inputs?.companyIndustry ?? undefined}
                placeholder="e.g. Software, Finance"
                error={state?.errors?.companyIndustry}
                required
              />
            </div>
            <FormInput
              id="companyLocation"
              name="companyLocation"
              label="Location"
              defaultValue={state?.inputs?.companyLocation ?? undefined}
              placeholder="e.g. New York, NY"
              error={state?.errors?.companyLocation}
              required
            />
          </div>
        )}

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
