import ContactContent from "@/components/Pages/Main/Contact/ContactContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | QuickHire",
  description:
    "Have questions or need help? Reach out to the QuickHire team. We're here to assist you.",
};

const ContactPage = () => {
  return <ContactContent />;
};

export default ContactPage;
