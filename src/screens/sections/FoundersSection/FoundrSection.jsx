import React from "react";

export const FoundersSection = () => {
  // Founder data for mapping
  const founderImages = [
    {
      id: 1,
      src: "https://c.animaapp.com/i4vFGrX3/img/image-9.png",
      alt: "Founder image",
    },
    {
      id: 2,
      src: "https://c.animaapp.com/i4vFGrX3/img/image-8.png",
      alt: "Founder image",
    },
    {
      id: 3,
      src: "https://c.animaapp.com/i4vFGrX3/img/image-10.png",
      alt: "Founder image",
    },
  ];

  return (
    <section className="w-full py-24 bg-white">
      <div className="container mx-auto px-4 max-w-[1720px]">
        <div className="flex flex-col items-center gap-[90px]">
          <div className="flex flex-col items-center gap-5 w-full">
            <div className="flex flex-col items-center gap-2.5 w-full">
              <h2 className="text-[50px] font-bold text-black text-center [font-family:'Poppins',Helvetica] leading-[normal]">
                OUR FOUNDERS
              </h2>

              <p className="max-w-[1450px] text-[#2a2a2a] [font-family:'Poppins',Helvetica] font-normal text-2xl text-center leading-10">
                Empowering Founders, Driving Innovation
                <br />
                At Azhizen, we go beyond short-term solutions—we cultivate
                lasting success. As a startup committed to innovation and
                growth, we empower founders with strategic insights,
                cutting-edge technology, and tailored support. Our goal is to
                help entrepreneurs navigate challenges, scale their ventures,
                and shape the future with confidence. This isn&apos;t just a
                business—it&apos;s a movement toward sustainable transformation.
              </p>
            </div>

            <div className="relative w-full max-w-[1640px] h-[600px]">
              {/* Responsive image layout with proper positioning */}
              <div className="flex justify-center gap-5 h-full">
                {founderImages.map((image, index) => (
                  <div
                    key={image.id}
                    className={`relative ${
                      index === 1
                        ? "w-[600px] h-[600px]"
                        : "w-[500px] h-[500px] self-center"
                    }`}
                  >
                    <img
                      className="w-full h-full object-cover"
                      alt={image.alt}
                      src={image.src}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
