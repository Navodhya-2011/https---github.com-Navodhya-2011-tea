import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Heading } from "../../components";
import Sidebar1 from "../../components/Sidebar1";

export default function AnalyticsOnePage() {
  return (
    <>
      <Helmet>
        <title>Tea Buddy</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex md:flex-col items-start w-full gap-[35px] bg-indigo-50">
        <Sidebar1 className="flex flex-col self-end w-[296px] h-screen gap-[97px] top-0 p-6 sm:p-5 rounded-tl-[30px] rounded-bl-[30px] bg-teal-600 !sticky overflow-auto" />
        <div className="flex flex-col items-center gap-[41px] md:p-5 flex-1">
          <Heading size="lg" as="h1" className="!text-green-800 text-right">
            Tea Vitality Advisor
          </Heading>
          <div className="self-stretch p-[39px] sm:p-5 bg-white-A700_99 shadow-xs">
            <div className="flex md:flex-col items-start gap-[17px] my-1.5">
              <div className="flex flex-col items-end w-[26%] md:w-full mt-[72px] gap-[23px]">
                <Img
                  src="images/img_image_3.png"
                  alt="imagethree_one"
                  className="self-stretch h-[166px] w-full md:h-auto object-cover"
                />
                <Text size="xs" as="p" className="mr-[60px] md:mr-0 !text-black-900 text-center">
                  Image of th tea plant
                </Text>
              </div>
              <div className="h-[659px] bg-white-A700_99 shadow-xs flex-1" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
