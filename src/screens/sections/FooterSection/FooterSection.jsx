import { InstagramIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const FooterSection = () => {
  // Quick links data
  const quickLinks = [
    "Home",
    "About Us",
    "Contact Us",
    "Projects",
    "Career oppurtunities",
  ];

  // Products data
  const products = Array(7).fill("Programs 1");

  // Services data
  const services = Array(4)
    .fill("Service")
    .map((item, index) => (index === 0 ? `${item} 1` : `${item} 2`));

  // Policies data
  const policies = ["Privacy Policy", "Refund Policy", "Terms & Conditions"];

  return (
    <footer className="w-full bg-[#121212] py-24 relative">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Logo and Address */}
        <div className="flex flex-col items-start gap-[21px]">
          <img
            className="w-full h-[54px] object-cover"
            alt="Element removebg preview"
            src="https://c.animaapp.com/i4vFGrX3/img/5-3-removebg-preview--1--1@2x.png"
          />

          <div className="w-[203px]">
            <p className="font-['Poppins',Helvetica] font-medium text-[#e8ebf1] text-sm leading-6">
              K.S.R College of Enginnering Tiruchengode, Nammakkal, Tamil Nadu
            </p>
          </div>

          <div className="flex items-center gap-5">
            <div className="w-[26px] h-[26px] bg-[#00aed3] rounded-[13px] bg-[url(https://c.animaapp.com/i4vFGrX3/img/clip-path-group@2x.png)] bg-[100%_100%]" />

            <div className="w-[26px] h-[26px] bg-white rounded-[13px] relative">
              <InstagramIcon className="absolute w-6 h-6 top-px left-px" />
            </div>

            <div className="w-[26px] h-[26px] bg-[#00aed3] rounded-[13px] bg-[url(https://c.animaapp.com/i4vFGrX3/img/vector.svg)] bg-[100%_100%]" />

            <div className="w-[26px] h-[26px] bg-[#00aed3] rounded-[13px] bg-[url(https://c.animaapp.com/i4vFGrX3/img/vector-1.svg)] bg-[100%_100%]" />
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-start gap-[35px]">
          <h3 className="font-['Poppins',Helvetica] font-semibold text-white text-2xl">
            Quick&nbsp;&nbsp;links
          </h3>

          <div className="flex flex-col items-start gap-2.5 w-full">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="font-['Poppins',Helvetica] font-normal text-[#e8ebf1] text-lg hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Products */}
        <div className="flex flex-col items-start gap-[17px]">
          <h3 className="font-['Poppins',Helvetica] font-semibold text-white text-2xl">
            Products
          </h3>

          <div className="flex flex-col items-start gap-2 w-full">
            {products.map((product, index) => (
              <a
                key={index}
                href="#"
                className="font-['Poppins',Helvetica] font-normal text-[#e8ebf1] text-lg hover:text-white transition-colors"
              >
                {product}
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="flex flex-col items-start gap-[17px]">
          <h3 className="font-['Poppins',Helvetica] font-semibold text-white text-2xl">
            Services
          </h3>

          <div className="flex flex-col items-start gap-2 w-full">
            {services.map((service, index) => (
              <a
                key={index}
                href="#"
                className="font-['Poppins',Helvetica] font-normal text-[#e8ebf1] text-lg hover:text-white transition-colors"
              >
                {service}
              </a>
            ))}
          </div>
        </div>

        {/* Contact and Policies */}
        <div className="flex flex-col gap-8">
          {/* Contact Us */}
          <div className="flex flex-col items-start gap-[22px]">
            <h3 className="font-['Poppins',Helvetica] font-semibold text-white text-2xl">
              Policies
            </h3>

            <div className="flex flex-col items-start gap-2.5 w-full">
              {policies.map((policy, index) => (
                <a
                  key={index}
                  href="#"
                  className="font-footer-16px-text text-[#e8ebf1] text-[length:var(--footer-16px-text-font-size)] hover:text-white transition-colors"
                >
                  {policy}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="font-['Poppins',Helvetica] font-semibold text-white text-2xl">
              Contact Us
            </h3>
            <div className="flex flex-col gap-2">
              <p className="font-footer-16px-text text-[#e8ebf1] text-[length:var(--footer-16px-text-font-size)]">
                azhizehsolutions@gmail.com
              </p>
              <p className="font-footer-16px-text text-[#e8ebf1] text-[length:var(--footer-16px-text-font-size)]">
                +91 97506 03988
              </p>
            </div>

            <div className="flex flex-col items-center gap-5 mt-4">
              <p className="font-['Poppins',Helvetica] font-medium text-white text-lg text-center">
                Having any doubts ?
              </p>

              <Button className="w-full py-3.5 rounded-[68px] backdrop-blur-lg [background:linear-gradient(146deg,rgba(0,120,180,1)_0%,rgba(0,180,217,1)_100%)]">
                <span className="font-['Poppins',Helvetica] font-semibold text-white text-xl">
                  Contact us
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="w-full mt-16 border-t border-white">
        <div className="container mx-auto py-8">
          <p className="font-footer-16px-text text-[#8c909b] text-[length:var(--footer-16px-text-font-size)] text-center">
            © 2025 Azhizen Solution. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
