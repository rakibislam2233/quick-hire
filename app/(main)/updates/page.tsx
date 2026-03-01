import UpdatesContent from "@/components/Pages/Main/Updates/UpdatesContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Platform Updates | QuickHire",
  description:
    "Stay informed about the latest features, improvements, and bug fixes on the QuickHire platform.",
};

const UpdatesPage = () => {
  return <UpdatesContent />;
};

export default UpdatesPage;
