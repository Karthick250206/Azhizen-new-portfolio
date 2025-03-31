import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "../../../../components/ui/toggle-group";

export const ServicesSection = () => {
  // Form fields data
  const formFields = [
    { id: "name", label: "Name" },
    { id: "designation", label: "Designation" },
    { id: "email", label: "E-mail" },
  ];

  return (
    <section className="relative w-full p-6 bg-[#ffffff1a] rounded-xl overflow-hidden shadow-[0px_-26px_25px_#0000000d] backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)]">
      <div className="flex flex-wrap items-center justify-between gap-8 lg:gap-[185px] mt-12">
        {/* Left content area */}
        <div className="flex flex-col w-full lg:w-[975px] items-start gap-[30px]">
          <h1 className="font-['Poppins',Helvetica] font-bold text-5xl md:text-7xl leading-tight">
            <span className="text-black">
              Think.Believe.Dream and Grow with{" "}
            </span>
            <span className="text-[#00b4d9]">Azhizen</span>
          </h1>

          <p className="max-w-[726px] font-['Poppins',Helvetica] text-[#707070] text-lg leading-[34px]">
            Join a community of over 1000 successful learners and elevate your
            skills with Azhizen Solutions. Explore expert-led training in
            MedTech, DeepTech, Edutech, GreenTech, InfoTech, AutoTech, and more.
            Unlock the perfect pathway to advance your career with us today!
          </p>

          <div className="flex items-center gap-5">
            <Button className="w-[178px] h-[58px] rounded-[68px] text-lg font-medium [background:linear-gradient(146deg,rgba(0,120,180,1)_0%,rgba(0,180,217,1)_100%)]">
              Contact us
            </Button>

            <Button className="w-[178px] h-[58px] rounded-[68px] text-lg font-medium bg-[#2a2a2a] hover:bg-[#3a3a3a]">
              Join Us
            </Button>
          </div>
        </div>

        {/* Right form area */}
        <div className="w-full lg:w-[448px]">
          <div className="relative w-full">
            {/* Toggle between Online and Offline */}
            <ToggleGroup
              type="single"
              defaultValue="online"
              className="w-full h-9 bg-slate-100 rounded-lg p-1"
            >
              <ToggleGroupItem
                value="online"
                className="w-[221px] h-7 rounded-md data-[state=on]:bg-white data-[state=on]:text-[#020817] data-[state=off]:text-slate-500 font-['Poppins',Helvetica] font-medium text-sm"
              >
                Online
              </ToggleGroupItem>
              <ToggleGroupItem
                value="offline"
                className="w-[221px] h-7 rounded-md data-[state=on]:bg-white data-[state=on]:text-[#020817] data-[state=off]:text-slate-500 font-['Poppins',Helvetica] font-medium text-sm"
              >
                Offline
              </ToggleGroupItem>
            </ToggleGroup>

            {/* Form Card */}
            <Card className="mt-3 w-full bg-white rounded-2xl overflow-hidden shadow-[0px_0px_0px_1px_#e2e8f0,0px_1px_0px_#e2e8f0,0px_2px_3px_-1px_#e2e8f0]">
              <CardContent className="flex flex-col w-full gap-2 pt-8 pb-16 px-8">
                <h2 className="font-['Poppins',Helvetica] font-bold text-xl text-neutral-800 mb-1">
                  Grow Today, Guide Tomorrow
                </h2>

                <p className="font-['Poppins',Helvetica] text-neutral-600 text-sm mb-4">
                  Enroll in Azhizen Academy now and transform into the visionary
                  pioneer of the future.
                </p>

                <div className="space-y-6 w-full">
                  {/* Map through form fields */}
                  {formFields.map((field) => (
                    <div key={field.id} className="space-y-2">
                      <Label
                        htmlFor={field.id}
                        className="font-['Poppins',Helvetica] font-medium text-sm text-[#020817]"
                      >
                        {field.label}
                      </Label>
                      <Input
                        id={field.id}
                        className="h-10 bg-gray-50 rounded-md shadow-[0px_0px_0px_1px_#e2e8f0,0px_1px_0px_#e2e8f0,0px_2px_3px_-1px_#e2e8f0]"
                      />
                    </div>
                  ))}

                  {/* Mobile field with country code */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="mobile"
                      className="font-['Poppins',Helvetica] font-medium text-sm text-[#020817]"
                    >
                      Mobile
                    </Label>
                    <div className="flex">
                      <div className="inline-flex h-10 items-center gap-1 pl-[13px] pr-[5px] py-3 bg-white rounded-l-md border border-solid border-slate-200">
                        <div className="flex w-6 h-4 items-start relative bg-[#02081733] rounded overflow-hidden">
                          <img
                            className="relative self-stretch w-6"
                            alt="Country flag"
                            src="https://c.animaapp.com/i4vFGrX3/img/component-1.svg"
                          />
                        </div>
                        <img
                          className="w-4 h-4"
                          alt="Dropdown icon"
                          src="https://c.animaapp.com/i4vFGrX3/img/component-1-1.svg"
                        />
                      </div>
                      <Input
                        id="mobile"
                        className="h-10 flex-1 bg-gray-50 rounded-r-md shadow-[0px_0px_0px_1px_#e2e8f0,0px_1px_0px_#e2e8f0,0px_2px_3px_-1px_#e2e8f0]"
                      />
                    </div>
                  </div>

                  {/* Course selection */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="course"
                      className="font-['Poppins',Helvetica] font-medium text-sm text-[#020817]"
                    >
                      Select a Online Course
                    </Label>
                    <Select>
                      <SelectTrigger
                        id="course"
                        className="h-9 bg-white border border-solid border-slate-200 font-['Poppins',Helvetica] text-sm"
                      >
                        <SelectValue placeholder="Select a Course" />
                        <ChevronDownIcon className="h-4 w-4 opacity-50" />
                      </SelectTrigger>
                    </Select>
                  </div>

                  {/* Enroll button */}
                  <Button className="w-full h-10 mt-4 rounded-md font-medium text-white text-base [background:linear-gradient(177deg,rgba(0,180,217,1)_0%,rgba(0,120,180,1)_100%)] shadow-[inset_0px_-1px_0px_#ffffff40,inset_0px_1px_0px_#ffffff40]">
                    Enroll now→
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
