import SettingsContent from "@/components/Pages/Admin/SettingsContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings | Admin Dashboard",
};

export default function SettingsPage() {
  return <SettingsContent />;
}
