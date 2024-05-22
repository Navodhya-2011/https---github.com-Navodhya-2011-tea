import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Input, Img, Heading } from "../../components";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";

export default function AnalyticsTwoPage() {
  const [searchBarValue, setSearchBarValue] = React.useState("");
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <>
      <Helmet>
        <title>Tea Buddy</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex md:flex-col items-start w-full gap-[33px] bg-indigo-50">
        <Sidebar
          width="296px !important"
          collapsedWidth="80px !important"
          collapsed={collapsed}
          onClick={() => {
            setCollapsed(!collapsed);
          }}
          className="flex flex-col h-screen gap-[97px] top-0 p-[15px] rounded-tl-[30px] rounded-bl-[30px] bg-teal-600 !sticky overflow-auto"
        >
          <Heading size="4xl" as="h1" className="self-center mt-10 !text-white-A700 text-right">
            Tea Buddy
          </Heading>
          <Menu
            menuItemStyles={{
              button: {
                padding: "10px 10px 10px 25px",
                color: "#ffffffcc",
                fontWeight: 500,
                fontSize: "15px",
                gap: "26px",
                borderRadius: "12px",
                [`&:hover, &.ps-active`]: { backgroundColor: "#078282 !important" },
              },
            }}
            rootStyles={{ ["&>ul"]: { gap: "276px" } }}
            className="flex flex-col self-stretch w-full mb-[5px]"
          >
            <div className="flex flex-col pt-[25px] gap-[25px] sm:pt-5">
              <MenuItem
                icon={<Img src="images/img_align_center.svg" alt="aligncenter_one" className="h-[19px] w-[19px]" />}
              >
                Dashboard
              </MenuItem>
              <MenuItem icon={<Img src="images/img_activity.svg" alt="activity_one" className="h-[20px] w-[20px]" />}>
                Analytics
              </MenuItem>
              <MenuItem
                icon={
                  <Img
                    src="images/img_requirements.png"
                    alt="requirements"
                    className="h-[18px] w-[18px] object-cover"
                  />
                }
              >
                Trough Management
              </MenuItem>
              <MenuItem
                icon={
                  <Img
                    src="images/img_resolution.png"
                    alt="resolution_one"
                    className="h-[20px] w-[20px] object-cover"
                  />
                }
              >
                Tea Leaf Categorizer{" "}
              </MenuItem>
              <MenuItem
                icon={<Img src="images/img_trolley.png" alt="trolley_one" className="h-[20px] w-[20px] object-cover" />}
              >
                Tea Grade Predictor{" "}
              </MenuItem>
              <MenuItem
                icon={
                  <Img
                    src="images/img_irrigation.png"
                    alt="irrigation_one"
                    className="h-[20px] w-[20px] object-cover"
                  />
                }
              >
                Tea Vitality Advisor
              </MenuItem>
            </div>
            <div className="flex justify-center pt-[25px] sm:pt-5">
              <MenuItem icon={<Img src="images/img_log_out.svg" alt="logout_one" className="h-[16px] w-[16px]" />}>
                Logout
              </MenuItem>
            </div>
          </Menu>
        </Sidebar>
        <div className="flex flex-col items-center mt-[59px] gap-[52px] md:p-5 sm:gap-[26px] flex-1">
          <Heading size="3xl" as="h1" className="text-right">
            Analytics{" "}
          </Heading>
          <Input
            color="white_A700_90"
            size="xs"
            name="search"
            placeholder={`search for a keyword`}
            value={searchBarValue}
            onChange={(e) => setSearchBarValue(e)}
            suffix={
              searchBarValue?.length > 0 ? (
                <CloseSVG onClick={() => setSearchBarValue("")} height={30} width={30} />
              ) : (
                <Img src="images/img_search.png" alt="Search" className="w-[30px] h-[30px] cursor-pointer" />
              )
            }
            className="self-stretch gap-[35px] sm:pl-5 text-blue_gray-700 font-bold opacity-0.8 rounded-[15px]"
          />
        </div>
      </div>
    </>
  );
}
