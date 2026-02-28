import ProfileContent from "@/components/Pages/Admin/ProfileContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company Profile | Admin Dashboard",
};

export default function ProfilePage() {
  return <ProfileContent />;
}
