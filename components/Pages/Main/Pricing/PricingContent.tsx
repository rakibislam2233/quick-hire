"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingContent = () => {
  const plans = [
    {
      name: "Basic",
      price: "$0",
      description: "Ideal for individual job seekers or small startups.",
      features: [
        "Up to 5 job applications/mo",
        "Limited company profile view",
        "Basic job alerts",
        "Community support",
      ],
      buttonText: "Start for Free",
      isPremium: false,
    },
    {
      name: "Professional",
      price: "$29",
      description: "Best for growing companies and active recruiters.",
      features: [
        "Unlimited job postings",
        "Advanced candidate filtering",
        "Featured job listings",
        "Priority 24/7 support",
        "Custom branding",
        "Analytics dashboard",
      ],
      buttonText: "Get Started Pro",
      isPremium: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Scalable solutions for large hiring organizations.",
      features: [
        "Multiple representative accounts",
        "API integration",
        "Dedicated account manager",
        "Custom legal terms",
        "Onboarding assistance",
      ],
      buttonText: "Contact Sales",
      isPremium: false,
    },
  ];

  return (
    <div className="font-epilogue bg-white min-h-screen pt-24 pb-10">
      <div className="container mx-auto px-4 md:px-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-[#25324B] mb-4">
            Simple, Transparent <span className="text-primary ">Pricing</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Choose the plan that fits your needs. Whether you&apos;re a job
            seeker or an employer, we have a solution for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 border ${
                plan.isPremium
                  ? "border-primary ring-1 ring-primary"
                  : "border-gray-100"
              }  group hover:shadow-xl transition-all duration-300 flex flex-col`}
            >
              {plan.isPremium && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black  tracking-widest px-4 py-1.5 rounded-full">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-extrabold text-[#25324B] mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-400 font-medium mb-6">
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-[#25324B]">
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="text-gray-400 font-semibold">/mo</span>
                  )}
                </div>
              </div>

              <div className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="mt-1 w-4 h-4 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 text-green-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-600 leading-tight">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                className={`w-full h-12 font-bold  text-xs tracking-widest rounded-none shadow-none transition-transform group-hover:-translate-y-1 ${
                  plan.isPremium
                    ? "bg-primary text-white"
                    : "bg-white text-primary border border-[#E9EBFD] hover:bg-gray-50"
                }`}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-400 text-sm font-medium">
            Have questions?{" "}
            <a
              href="/contact"
              className="text-primary font-bold hover:underline"
            >
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingContent;
