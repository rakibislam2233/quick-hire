import GuideContent from "@/components/Pages/Main/Guide/GuideContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Guide | QuickHire",
  description:
    "Learn how to use QuickHire effectively to find jobs or hire the best talent with our comprehensive guide.",
};

const GuidePage = () => {
  return <GuideContent />;
};

export default GuidePage;
