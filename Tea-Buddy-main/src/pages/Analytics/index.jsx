import React from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Img, Heading } from "../../components";
import Sidebar1 from "../../components/Sidebar1";

export default function AnalyticsPage() {
  return (
    <>
      <Helmet>
        <title>Tea Buddy</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex md:flex-col items-start w-full gap-[43px] bg-indigo-50">
        <Sidebar1 className="flex flex-col self-end w-[296px] h-screen gap-[97px] top-0 p-6 sm:p-5 rounded-tl-[30px] rounded-bl-[30px] bg-teal-600 !sticky overflow-auto" />
        <div className="flex flex-col gap-[46px] md:p-5 flex-1">
          <Heading size="lg" as="h1" className="mr-[1275px] mt-[20px] md:ml-0 !text-green-800 text-right">
            Tea Vitality Advisor
          </Heading>
          <div className="flex flex-col gap-[57px]">
            <div className="flex justify-center p-[15px] bg-white-A700_99 shadow-xs flex-1">
              <div className="flex md:flex-col justify-center items-center w-full mt-1 mb-[3px] gap-5">
                <div className="flex flex-col gap-[19px] flex-1">
                  <Img src="images/img_image_3.png" alt="image" className="h-[166px] object-cover" />
                  <div className="flex justify-center p-1 bg-white-A700_99 shadow-xs">
                    <Text size="s" as="p" className="w-[92%] mt-4 !text-black-900 text-center !font-thin">
                      Scientific study of tea production began about 1890.In the late 20th century, international demand
                      for organic tea increased
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[30px] flex-1">
                  <div className="bg-white-A700_99 shadow-xs">
                    <Text size="xs" as="p" className="mt-2 !text-black-900 text-center">
                      Although procedures in all countries are related, appropriate details must be determined for each
                      area. Since 1900, advancements in tea cultivation have dramatically increased the average yield
                      per hectare.
                    </Text>
                  </div>
                  <Img src="images/img_image_4.png" alt="image_one" className="object-cover" />
                </div>
                <div className="flex flex-col items-end w-[49%] md:w-full gap-[26px]">
                  <div className="flex sm:flex-col self-stretch justify-end items-start mr-2.5 gap-5 md:mr-0">
                    <Img
                      src="images/img_image_5.png"
                      alt="image_two"
                      className="w-[55%] sm:w-full sm:h-auto object-cover"
                    />
                    <div className="flex justify-end w-[45%] sm:w-full mt-[22px] p-[5px] bg-white-A700_99 shadow-xs">
                      <Text size="xs" as="p" className="w-[96%] mt-[3px] mb-[23px] !text-black-900 text-center">
                        <span className="text-black-900">
                          Most tea-producing countries maintain scientific research stations to study every aspect of
                          the subject, including seed production, clonal selection (for the 
                        </span>
                        <a href="#" className="text-black-900 underline">
                          propagation
                        </a>
                        <span className="text-black-900"> of single leaf </span>
                        <a href="#" className="text-black-900 underline">
                          cuttings
                        </a>
                        <span className="text-black-900">
                          ), tea nursery management, transplanting, development of the bush and subsequent pruning and
                          plucking, soil management and fertilizer use, and the ultimate replanting of the stand.
                        </span>
                      </Text>
                    </div>
                  </div>
                  <Button color="teal_600_c6" size="md" shape="round" className="sm:px-5 font-medium min-w-[426px]">
                    Capture or Upload the tea plant and get advice
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex justify-end p-4 bg-white-A700_99 shadow-xs flex-1">
              <div className="flex md:flex-col justify-end items-center w-full mt-[5px] mb-1">
                <div className="flex flex-col self-start gap-[30px] flex-1">
                  <Img src="images/img_image_6.png" alt="imagesix_one" className="h-[147px] object-cover" />
                  <div className="flex justify-center p-[3px] bg-white-A700_99 shadow-xs">
                    <Text size="s" as="p" className="w-[91%] mt-[18px] !text-black-900 text-center !font-thin">
                      Scientific study of tea production began about 1890.In the late 20th century, international demand
                      for organic tea increased
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col ml-4 gap-[27px] md:ml-0 flex-1">
                  <div className="flex justify-end py-1 bg-white-A700_99 shadow-xs">
                    <Text size="xs" as="p" className="w-[97%] mt-[3px] !text-black-900 text-center">
                      Although procedures in all countries are related, appropriate details must be determined for each
                      area. Since 1900, advancements in tea cultivation have dramatically increased the average yield
                      per hectare.
                    </Text>
                  </div>
                  <Img src="images/img_image_7.png" alt="imageseven_one" className="h-[156px] object-cover" />
                </div>
                <div className="flex flex-col items-end w-[50%] md:w-full ml-[23px] gap-[33px] md:ml-0">
                  <div className="flex sm:flex-col self-stretch justify-end items-start mr-[15px] gap-[29px] md:mr-0">
                    <Img
                      src="images/img_image_8.png"
                      alt="imageeight_one"
                      className="w-[53%] sm:w-full sm:h-auto object-cover"
                    />
                    <div className="flex justify-center w-[47%] sm:w-full mt-[11px] p-1.5 bg-white-A700_99 shadow-xs">
                      <Text size="xs" as="p" className="w-[97%] mb-6 !text-black-900 text-center">
                        <span className="text-black-900">
                          Most tea-producing countries maintain scientific research stations to study every aspect of
                          the subject, including seed production, clonal selection (for the 
                        </span>
                        <a href="#" className="text-black-900 underline">
                          propagation
                        </a>
                        <span className="text-black-900"> of single leaf </span>
                        <a href="#" className="text-black-900 underline">
                          cuttings
                        </a>
                        <span className="text-black-900">
                          ), tea nursery management, transplanting, development of the bush and subsequent pruning and
                          plucking, soil management and fertilizer use, and the ultimate replanting of the stand.
                        </span>
                      </Text>
                    </div>
                  </div>
                  <Button color="teal_600_d3" size="md" shape="round" className="sm:px-5 font-medium min-w-[426px]">
                    Capture or Upload the tes leaf and get advice
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
