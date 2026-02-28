import Companies from "@/components/Pages/Main/Home/Companies";
import ExploreCategories from "@/components/Pages/Main/Home/ExploreCategories";
import HeroSection from "@/components/Pages/Main/Home/HeroSection";

const HomePage = () => {
  return (
    <section>
      <HeroSection />
      <Companies />
      <ExploreCategories />
    </section>
  );
};

export default HomePage;
