import React from "react";
import { Text, Img, Heading } from "./..";
import { Menu, Sidebar } from "react-pro-sidebar";

export default function Sidebar11({ ...props }) {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <Sidebar
      {...props}
      width="294px !important"
      collapsedWidth="80px !important"
      collapsed={collapsed}
      onClick={() => {
        setCollapsed(!collapsed);
      }}
    >
      <Heading size="4xl" as="h1" className="mt-[43px] ml-3.5 md:ml-0 !text-white-A700 text-right">
        Tea Buddy
      </Heading>
      <Menu
        menuItemStyles={{
          button: {
            padding: " ",
            borderRadius: "12px",
            margin: " ",
            [`&:hover, &.ps-active`]: {
              color: "#ffffffcc",
              fontWeight: "500 !important",
              backgroundColor: "#078282 !important",
            },
          },
        }}
        rootStyles={{ ["&>ul"]: { gap: "243px" } }}
        className="flex flex-col self-stretch w-full mb-[5px]"
      >
        <div className="flex flex-col pt-6 gap-6 sm:pt-5">
          <div className="flex self-start items-center gap-[22px] p-2.5">
            <Img src="images/img_align_center.svg" alt="aligncenter_one" className="h-[19px] w-[19px] ml-4" />
            <Text size="lg" as="p" className="!text-white-A700_cc">
              Dashboard
            </Text>
          </div>
          <div className="flex self-start gap-[26px] p-2.5">
            <Img src="images/img_activity.svg" alt="activity_one" className="h-[20px] w-[20px] ml-[15px]" />
            <Text size="lg" as="p" className="!text-white-A700_cc">
              Analytics
            </Text>
          </div>
          <div className="flex self-end justify-end items-center gap-[27px] p-2.5 rounded-[12px]">
            <Img src="images/img_requirements.png" alt="requirements" className="h-[18px] w-[18px] object-cover" />
            <Text size="lg" as="p" className="mr-0.5 !text-white-A700_cc">
              Trough Management
            </Text>
          </div>
          <div className="flex self-end justify-end items-center gap-[23px] p-2.5">
            <Img src="images/img_resolution.png" alt="resolution_one" className="h-[20px] w-[20px] object-cover" />
            <Text size="lg" as="p" className="mr-[5px] !text-white-A700_cc">
              Tea Leaf Categorizer{" "}
            </Text>
          </div>
          <div className="flex justify-center items-center gap-[23px] p-2.5">
            <Img src="images/img_trolley.png" alt="trolley_one" className="h-[20px] w-[20px] object-cover" />
            <Text size="lg" as="p" className="!text-white-A700_cc">
              Tea Grade Predictor{" "}
            </Text>
          </div>
          <div className="flex justify-center items-center gap-[23px] p-2">
            <Img src="images/img_irrigation.png" alt="irrigation_one" className="h-[20px] w-[20px] object-cover" />
            <Text size="lg" as="p" className="!text-white-A700_cc">
              Tea Vitality Advisor
            </Text>
          </div>
        </div>
        <div className="flex justify-center pt-6 sm:pt-5">
          <div className="flex items-center gap-[19px] p-2.5">
            <Img src="images/img_log_out.svg" alt="logout_one" className="h-[16px] w-[16px] ml-[7px]" />
            <Text size="lg" as="p" className="!text-white-A700_cc">
              Logout
            </Text>
          </div>
        </div>
      </Menu>
    </Sidebar>
  );
}
