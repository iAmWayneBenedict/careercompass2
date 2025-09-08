import Hero03 from "@/components/hero-03/hero-03";
import { withLayout } from "@/layouts/layout-manager";

const HomePage = withLayout(function () {
  return (
    <div className="container mx-auto px-4 py-8">
      <Hero03 />
    </div>
  );
}, "home");

export default HomePage;
