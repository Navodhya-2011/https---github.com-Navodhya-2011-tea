import React from "react";
import { Button, SelectBox, Img, Text, Input, Heading } from "../../components";
import { default as ModalProvider } from "react-modal";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function Updatetrough({ isOpen, ...props }) {
  return (
    <ModalProvider {...props} appElement={document.getElementById("root")} isOpen={isOpen} className="min-w-[291px]">
      <div className="flex flex-col justify-center w-full gap-4 p-[18px] border-gray-100 border border-solid bg-white-A700 rounded-[10px]">
        <Heading as="h1" className="mt-3 ml-[3px] md:ml-0 !text-gray-900_01">
          Update Trough
        </Heading>
        <div className="flex flex-col items-start mb-[5px] ml-3 md:ml-0">
          <Text as="p">Trough ID</Text>
          <Input
            size="md"
            shape="round"
            name="wm0001"
            placeholder={`WM0001`}
            className="self-stretch mt-[3px] sm:pr-5 font-medium"
          />
          <Text as="p" className="mt-[13px]">
            Capacity
          </Text>
          <SelectBox
            shape="round"
            indicator={<Img src="images/img_arrow_down.svg" alt="arrow_down" />}
            name="city"
            placeholder={`Small`}
            options={dropDownOptions}
            className="self-stretch mt-1.5 gap-px sm:pr-5 font-medium"
          />
          <Text as="p" className="mt-[15px]">
            Status
          </Text>
          <SelectBox
            shape="round"
            indicator={<Img src="images/img_arrow_down.svg" alt="arrow_down" />}
            name="active"
            placeholder={`Active`}
            options={dropDownOptions}
            className="self-stretch mt-1 gap-px sm:pr-5 font-medium"
          />
          <Button shape="round" className="w-full mt-[19px] ml-[169px] md:ml-0 font-bold !rounded-[10px]">
            Save
          </Button>
        </div>
      </div>
    </ModalProvider>
  );
}
