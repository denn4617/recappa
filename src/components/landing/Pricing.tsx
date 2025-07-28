// src/components/landing/Pricing.tsx
"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

const plans = {
  monthly: [
    {
      name: "Pro",
      price: "$19/mo",
      description: "For professionals and small teams",
      features: [
        "Unlimited transcriptions",
        "Advanced summaries & action items",
        "Export to PDF & Notion",
      ],
      cta: "Upgrade to Pro",
      highlight: false,
    },
    {
      name: "Free Trial",
      price: "$0",
      description: "Get started with limited access",
      features: [
        "Transcribe up to 2 meetings",
        "Basic summarization",
        "Export to text",
      ],
      cta: "Start for Free",
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored for organizations",
      features: [
        "Team analytics & insights",
        "SSO + Admin controls",
        "Priority support",
      ],
      cta: "Contact Sales",
      highlight: false,
    },
  ],
  annual: [
    {
      name: "Pro",
      price: "$180/yr",
      description: "2 months free with annual plan",
      features: [
        "Unlimited transcriptions",
        "Advanced summaries & action items",
        "Export to PDF & Notion",
      ],
      cta: "Upgrade to Pro",
      highlight: false,
    },
    {
      name: "Free Trial",
      price: "$0",
      description: "Get started with limited access",
      features: [
        "Transcribe up to 2 meetings",
        "Basic summarization",
        "Export to text",
      ],
      cta: "Start for Free",
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored for organizations",
      features: [
        "Team analytics & insights",
        "SSO + Admin controls",
        "Priority support",
      ],
      cta: "Contact Sales",
      highlight: false,
    },
  ],
};

export default function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  return (
    <section
      id="pricing"
      className="w-full py-28 px-4 sm:px-6 lg:px-8 text-white"
    >
      <div className="max-w-6xl mx-auto text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold">Pricing</h2>
        <p className="text-gray-400 text-base max-w-2xl mx-auto">
          Whether you're just getting started or need advanced collaboration
          features, Recappa scales with your team. Choose the plan that fits you
          best.
        </p>

        {/* Billing toggle */}
        <div className="flex justify-center mt-6">
          <div className="inline-flex border border-gray-700 rounded-lg overflow-hidden text-sm font-medium">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-4 py-2 transition ${
                billing === "monthly"
                  ? "bg-violet-600 text-white"
                  : "bg-gray-800 text-gray-300"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("annual")}
              className={`px-4 py-2 transition ${
                billing === "annual"
                  ? "bg-violet-600 text-white"
                  : "bg-gray-800 text-gray-300"
              }`}
            >
              Annual
            </button>
          </div>
        </div>

        <div className="mt-16 flex flex-col lg:flex-row gap-8 justify-center">
          {plans[billing].map((plan, index) => (
            <div
              key={plan.name}
              className={`flex flex-col justify-between rounded-xl p-6 shadow-sm transition bg-gray-900 border border-gray-700 w-full max-w-sm ${
                plan.highlight ? "border-violet-500 lg:scale-105" : ""
              }`}
              style={{ minHeight: plan.highlight ? "520px" : "480px" }}
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-3xl font-bold mb-1">{plan.price}</p>
                <p className="text-sm text-gray-400 mb-6">{plan.description}</p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm"
                    >
                      <CheckCircle className="w-4 h-4 text-violet-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="#cta"
                className={`inline-block text-center px-5 py-2 rounded-md text-sm font-medium transition ${
                  plan.highlight
                    ? "bg-violet-600 hover:bg-violet-700 text-white"
                    : "bg-gray-700 hover:bg-gray-600 text-white"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-500 mt-12">
          Need a custom solution or have questions?{" "}
          <Link href="#cta" className="text-violet-400 hover:underline">
            Contact us
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
