import CallToAction from "@/components/Pages/Main/Home/CallToAction";
import Companies from "@/components/Pages/Main/Home/Companies";
import ExploreCategories from "@/components/Pages/Main/Home/ExploreCategories";
import FeaturedJobs from "@/components/Pages/Main/Home/FeaturedJobs";
import HeroSection from "@/components/Pages/Main/Home/HeroSection";
import LatestJobs from "@/components/Pages/Main/Home/LatestJobs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "QuickHire | Find Your Dream Job",
  description:
    "QuickHire is the best platform for job seekers and employers to connect. Find your next career opportunity today.",
};

const HomePage = () => {
  return (
    <section>
      <HeroSection />
      <Companies />
      <ExploreCategories />
      <CallToAction />
      <FeaturedJobs />
      <LatestJobs />
    </section>
  );
};

export default HomePage;
