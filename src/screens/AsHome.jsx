import React from "react";
import { AboutUsSection } from "./sections/AboutUsSection/AboutUsSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { FoundersSection } from "./sections/FoundersSection/FoundersSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { NavigationBarSection } from "./sections/NavigationBarSection/NavigationBarSection";
import { ServicesSection } from "./sections/ServicesSection";

export const AsHome = () => {
  return (
    <div className="bg-white flex flex-col items-center w-full">
      <div className="bg-white w-full max-w-[1920px] relative">
        {/* Navigation Bar */}
        <NavigationBarSection />

        {/* Main content area with background gradient */}
        <div className="relative w-full">
          {/* Decorative gradient blob */}
          <div className="absolute w-[862px] h-[862px] top-0 right-0 rounded-[591.69px] blur-[35.5px] [background:linear-gradient(135deg,rgba(1,127,184,1)_0%,rgba(1,171,211,1)_100%)] opacity-25" />

          {/* Services Section */}
          <ServicesSection />

          {/* About Us Section */}
          <AboutUsSection />

          {/* Main Content Section */}
          <MainContentSection />

          {/* Founders Section */}
          <FoundersSection />
        </div>

        {/* Footer */}
        <FooterSection />
      </div>
    </div>
  );
};
