import Hero03 from "@/components/features/hero-03/hero-03";
import { withLayout } from "@/layouts/layout-manager/with-layout";

const HomePage = withLayout(function () {
  return (
    <div className="container px-4 py-8 mx-auto">
      <Hero03 />
    </div>
  );
}, "home");

export default HomePage;
