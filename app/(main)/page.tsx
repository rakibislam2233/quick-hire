import CallToAction from "@/components/Pages/Main/Home/CallToAction";
import Companies from "@/components/Pages/Main/Home/Companies";
import ExploreCategories from "@/components/Pages/Main/Home/ExploreCategories";
import FeaturedJobs from "@/components/Pages/Main/Home/FeaturedJobs";
import HeroSection from "@/components/Pages/Main/Home/HeroSection";
import LatestJobs from "@/components/Pages/Main/Home/LatestJobs";

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
