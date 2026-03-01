import PricingContent from "@/components/Pages/Main/Pricing/PricingContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Plans | QuickHire",
  description:
    "Choose the best plan for your hiring needs or job search. We offer flexible pricing for everyone.",
};

const PricingPage = () => {
  return <PricingContent />;
};

export default PricingPage;
