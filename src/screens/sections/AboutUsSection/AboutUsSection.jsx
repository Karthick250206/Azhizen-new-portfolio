import React from "react";
import { Card, CardContent } from "../components/ui/card";

export const AboutUsSection = () => {
  // Service data for mapping
  const services = [
    {
      id: 1,
      title: "Custom Hardware Design",
      description:
        "We deliver advanced hardware prototyping with custom PCB design. Tailored solutions for embedded systems and IoT innovation.",
      image: "https://c.animaapp.com/i4vFGrX3/img/image-3@2x.png",
      imageFirst: true,
    },
    {
      id: 2,
      title: "Rapid Prototyping",
      description:
        "Our team accelerates development with swift prototyping. From concept to functional hardware in record time.",
      image: "https://c.animaapp.com/i4vFGrX3/img/image-5@2x.png",
      imageFirst: false,
    },
    {
      id: 3,
      title: "AI/ML & Firmware Integration",
      description:
        "We integrate AI/ML capabilities and firmware updates. Smart, adaptable systems built for the future.",
      image: "https://c.animaapp.com/i4vFGrX3/img/image-6@2x.png",
      imageFirst: true,
    },
    {
      id: 4,
      title: "Testing & Compliance",
      description:
        "Experts ensure functional testing and system calibration. Every solution meets rigorous industry standards.",
      image: "https://c.animaapp.com/i4vFGrX3/img/image-7@2x.png",
      imageFirst: false,
    },
  ];

  return (
    <section className="w-full bg-[#00b4d9] py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col items-start gap-[50px]">
          <div className="w-full">
            <h2 className="font-['Poppins',Helvetica] font-bold text-white text-[50px] text-center tracking-[0] leading-normal">
              SERVICES WE PROVIDE
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full">
            {services.map((service) => (
              <Card
                key={service.id}
                className="bg-transparent border-none shadow-none"
              >
                <CardContent className="flex flex-col gap-5 p-0">
                  {service.imageFirst ? (
                    <>
                      <img
                        className="w-full h-[467px] object-cover"
                        alt={service.title}
                        src={service.image}
                      />
                      <div className="flex flex-col gap-5">
                        <h3 className="font-['Poppins',Helvetica] font-medium text-white text-2xl tracking-[0.48px] leading-normal">
                          {service.title}
                        </h3>
                        <p className="font-['Poppins',Helvetica] font-normal text-white text-lg tracking-[0.48px] leading-normal">
                          {service.description}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex flex-col gap-5">
                        <h3 className="font-['Poppins',Helvetica] font-medium text-white text-2xl tracking-[0.48px] leading-normal">
                          {service.title}
                        </h3>
                        <p className="font-['Poppins',Helvetica] font-normal text-white text-lg tracking-[0.48px] leading-normal">
                          {service.description}
                        </p>
                      </div>
                      <img
                        className="w-full h-[467px] object-cover"
                        alt={service.title}
                        src={service.image}
                      />
                    </>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
