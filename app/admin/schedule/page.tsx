import ScheduleContent from "@/components/Pages/Admin/ScheduleContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Schedule | Admin Dashboard",
};

export default function SchedulePage() {
  return <ScheduleContent />;
}
