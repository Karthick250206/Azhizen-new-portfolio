import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const MainContentSection = () => {
  // Data for the "Who are we?" section points
  const whoAreWePoints = [
    "We build a vibrant space for knowledge-sharing. A community where ideas thrive and inspire.",
    "We connect learners with peers and experts. Opportunities grow through meaningful links.",
    "We offer tools for skill evolution. Support to reach ambitious career goals.",
    "Clear guidelines ensure a supportive forum. A dynamic space for creative breakthroughs.",
  ];

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-5xl font-bold text-center mb-16">
            <span className="text-[#00b4d9]">W</span>
            <span className="text-[#2a2a2a]">ho </span>
            <span className="text-[#00b4d9]">a</span>
            <span className="text-[#2a2a2a]">re </span>
            <span className="text-[#00b4d9]">w</span>
            <span className="text-[#2a2a2a]">e ?</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col space-y-8">
              {whoAreWePoints.map((point, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-3 h-[84px] bg-[#018fc2] flex-shrink-0" />
                  <p className="font-['Poppins',Helvetica] text-2xl text-[#2a2a2a] leading-[42px]">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <Card className="relative h-full">
              <CardContent className="p-0">
                <div className="relative h-full">
                  <div className="absolute w-[90%] h-[90%] top-0 right-0 rounded-[17px] [background:linear-gradient(131deg,rgba(0,180,217,1)_0%,rgba(0,120,180,1)_100%)]" />
                  <img
                    className="relative w-full h-auto object-cover rounded-[17px] mt-8 -ml-8"
                    alt="Team of professionals"
                    src="https://c.animaapp.com/i4vFGrX3/img/image-2.png"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
