"use client";

import { Button } from "@/components/ui/button";
import { FormInput } from "@/components/ui/form-input";
import { toast } from "@/lib/toast";
import { AuthActionState, loginUser } from "@/services/auth.service";
import { Lock, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";

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
  const router = useRouter();

  // Show toast messages based on form state
  useEffect(() => {
    if (state?.success) {
      toast.success(state?.message || "Login successful!");
    } else if (state?.message && !state?.success) {
      toast.error(state?.message);
    }
  }, [state]);

  // Redirect on successful login
  useEffect(() => {
    if (state?.success && state?.data?.redirect) {
      router.push(state.data.redirect);
    }
  }, [state, router]);

  return (
    <div className="w-full max-w-lg mx-auto p-10 md:p-12 border border-gray-100 bg-white shadow-none font-epilogue">
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
        <FormInput
          id="email"
          name="email"
          type="email"
          label="Email Address"
          icon={Mail}
          defaultValue={state?.inputs?.email ?? undefined}
          placeholder="Enter your email"
          error={state?.errors?.email}
          required
        />

        <FormInput
          id="password"
          name="password"
          type="password"
          label="Password"
          icon={Lock}
          defaultValue={state?.inputs?.password ?? undefined}
          placeholder="Enter your password"
          error={state?.errors?.password}
          required
        />

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
