import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Heading, Input, Img } from "../../components";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";
import Sidebar1 from "components/Sidebar1";

export default function DashboardPage() {
  const [searchBarValue1, setSearchBarValue1] = React.useState("");
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <>
      <Helmet>
        <title>Tea Buddy</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex md:flex-col justify-center items-start w-full bg-indigo-50">
        <Sidebar1
          width="296px !important"
          collapsedWidth="80px !important"
          collapsed={collapsed}
          onClick={() => {
            setCollapsed(!collapsed);
          }}
          className="flex flex-col h-screen gap-[94px] top-0 p-[23px] sm:p-5 rounded-tl-[30px] rounded-bl-[30px] bg-teal-600 !sticky overflow-auto"
        >
          <Heading size="4xl" as="h1" className="mt-[38px] ml-[13px] md:ml-0 !text-white-A700 text-right">
            Tea Buddy
          </Heading>
          <Menu
            menuItemStyles={{
              button: {
                padding: "10px 10px 10px 15px",
                color: "#ffffffcc",
                fontWeight: 500,
                fontSize: "15px",
                gap: "23px",
                // borderRadius: "px",
                [`&:hover, &.ps-active`]: { backgroundColor: "#078282 !important" },
              },
            }}
            rootStyles={{ ["&>ul"]: { gap: "283px" } }}
            className="flex flex-col self-stretch w-full mb-[5px]"
          >
            <div className="flex flex-col pt-[23px] gap-[23px] sm:pt-5">
              <MenuItem
                icon={<Img src="images/img_align_center.svg" alt="aligncenter_one" className="h-[19px] w-[19px]" />}
              >
                Dashboard
              </MenuItem>
              <MenuItem icon={<Img src="images/img_activity.svg" alt="activity_one" className="h-[20px] w-[20px]" />}>
                Analytics
              </MenuItem>
              <MenuItem>Trough Management</MenuItem>
              <MenuItem>Tea Leaf Categorizer </MenuItem>
              <MenuItem>Tea Grade Predictor </MenuItem>
              <MenuItem
                icon={
                  <Img
                    src="images/img_irrigation_24x20.png"
                    alt="irrigation_one"
                    className="h-[20px] w-[20px] object-cover"
                  />
                }
              >
                Tea Vitality Advisor
              </MenuItem>
            </div>
            <div className="flex justify-center pt-[23px] sm:pt-5">
              <MenuItem icon={<Img src="images/img_log_out.svg" alt="logout_one" className="h-[16px] w-[16px]" />}>
                Logout
              </MenuItem>
            </div>
          </Menu>
        </Sidebar1>
        <div className="flex flex-col items-center gap-8 md:p-5 flex-1">
          <div className="self-stretch h-[599px] relative">
            <Img
              src="images/img_image_1.png"
              alt="imageone_one"
              className="justify-center h-[599px] w-full md:h-auto left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
            />
            <Input
              color="white_A700_90"
              size="lg"
              name="search"
              placeholder={`Search something.........`}
              value={searchBarValue1}
              onChange={(e) => setSearchBarValue1(e)}
              suffix={
                searchBarValue1?.length > 0 ? (
                  <CloseSVG onClick={() => setSearchBarValue1("")} height={32} width={39} />
                ) : (
                  <Img src="images/img_search.png" alt="Search" className="w-[39px] h-[32px] cursor-pointer" />
                )
              }
              className="w-[52%] gap-[35px] right-[4%] top-[8%] m-auto sm:pl-5 text-gray-500_01 font-light opacity-0.8 absolute rounded-[15px]"
            />
          </div>
          <Heading as="h1" className="self-start !text-gray-900_02 ml-[30px]">
            Tea Plant.........
          </Heading>
          <Heading as="h2" className="w-[93%] md:w-full !text-blue_gray-700">
            <span className="text-blue_gray-700 font-normal">
              Camellia sinensis is a species of evergreen shrub or small tree in the flowering plant family Theaceae.
              Its leaves, leaf buds, and stems can be used to produce tea. Common names include tea plant, tea shrub,
              and tea tree. Camellia sinensis is native to East Asia, the Indian Subcontinent, and Southeast Asia, but it is today cultivated all around the world in tropical and subtropical regions. It is an evergreen shrubor small tree that is usually trimmed to below 2 m (6.6 ft) when cultivated for its leaves. It has a strong taproot. The flowers are yellow-white, 2.5–4 cm (0.98–1.57 in) in diameter, with seven or eight petals. Flower of tea plant
            </span>
            <a href="#" className="text-blue_gray-700 font-normal underline">
              
            </a>
            <span className="text-blue_gray-700 font-normal"></span>
            <a href="#" className="text-blue_gray-700 font-normal underline">
              
            </a>
            <span className="text-blue_gray-700 font-normal"> </span>
            <a href="#" className="text-blue_gray-700 font-normal underline">
             
            </a>
            <span className="text-blue_gray-700 font-normal">
              
            </span>
            <a href="#" className="text-blue_gray-700 font-normal underline">
             
            </a>
            <span className="text-blue_gray-700 font-normal">  </span>
            <a href="#" className="text-blue_gray-700 font-normal underline">
              
            </a>
            <span className="text-blue_gray-700 font-normal">
              
            </span>
            <a href="#" className="text-blue_gray-700 font-normal underline">
              
            </a>
            <span className="text-blue_gray-700 font-normal">
              <>
                
                <br />
                
                <br />
              </>
            </span>
          </Heading>
        </div>
      </div>
    </>
  );
}
