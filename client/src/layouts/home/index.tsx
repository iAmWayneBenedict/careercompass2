import React from "react";
import HomeFooter from "./footer";
import HomeHeader from "./header";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <HomeHeader />
      {children}
      <HomeFooter />
    </div>
  );
};

export default HomeLayout;
