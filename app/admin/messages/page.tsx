import MessagesContent from "@/components/Pages/Admin/MessagesContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Messages | Admin Dashboard",
};

export default function MessagesPage() {
  return <MessagesContent />;
}
