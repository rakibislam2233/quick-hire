import PrivacyContent from "@/components/Pages/Main/Privacy/PrivacyContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | QuickHire",
  description:
    "Learn how we collect, use, and protect your personal information on QuickHire.",
};

const PrivacyPage = () => {
  return <PrivacyContent />;
};

export default PrivacyPage;
