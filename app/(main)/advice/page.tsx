import AdviceContent from "@/components/Pages/Main/Advice/AdviceContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career Advice & Insights | QuickHire",
  description:
    "Expert career advice, resume tips, and interview guides to help you land your dream job.",
};

const AdvicePage = () => {
  return <AdviceContent />;
};

export default AdvicePage;
