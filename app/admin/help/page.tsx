import HelpCenterContent from "@/components/Pages/Admin/HelpCenterContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help Center | Admin Dashboard",
};

export default function HelpCenterPage() {
  return <HelpCenterContent />;
}
