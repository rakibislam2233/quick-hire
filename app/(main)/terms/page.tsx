import TermsContent from "@/components/Pages/Main/Terms/TermsContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | QuickHire",
  description:
    "Read the terms and conditions for using the QuickHire platform.",
};

const TermsPage = () => {
  return <TermsContent />;
};

export default TermsPage;
