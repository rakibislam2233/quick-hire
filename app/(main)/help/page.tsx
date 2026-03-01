import HelpContent from "@/components/Pages/Main/Help/HelpContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help Center | QuickHire",
  description:
    "Find answers to common questions, guides, and articles to help you use the QuickHire platform.",
};

const HelpCenterPage = () => {
  return <HelpContent />;
};

export default HelpCenterPage;
