// import React from "react";
// import { Text, Img, Heading } from "./..";
// import { Menu, Sidebar } from "react-pro-sidebar";

// export default function Sidebar1({ ...props }) {
//   const [collapsed, setCollapsed] = React.useState(false);

//   return (
//     <Sidebar
//       {...props}
//       width="294px !important"
//       collapsedWidth="80px !important"
//       collapsed={collapsed}
//       onClick={() => {
//         setCollapsed(!collapsed);
//       }}
//     >
//       <Heading size="4xl" as="h1" className="mt-[31px] !text-white-A700 text-right mr-[30px]">
//         Tea Buddy
//       </Heading>
//       <Menu
//         // menuItemStyles={{
//         //   button: {
//         //     padding: " ",
//         //     // borderRadius: "1px",
//         //     margin: " ",
//         //     [`&:hover, &.ps-active`]: {
//         //       color: "#ffffffcc",
//         //       fontWeight: "500 !important",
//         //       backgroundColor: "#078282 !important",
//         //     },
//         //   },
//         // }}
//         rootStyles={{ ["&>ul"]: { gap: "284px" } }}
//         className="flex flex-col self-stretch w-full mb-[5px]"
//       >
//         <div className="flex flex-col pt-[23px] gap-[23px] sm:pt-5">
//           <a href="/">
//           <div className="flex self-start items-center gap-[22px] p-2.5">
//             <Img src="images/img_align_center.svg" alt="aligncenter_one" className="h-[19px] w-[19px] ml-[7px]" />
//             <Text size="lg" as="p" className="!text-white-A700_cc">
//               Dashboard
//             </Text>
//           </div>
//           </a>
//           <a href="/analytics">
//           <div className="flex self-start gap-[26px] p-2.5">
//             <Img src="images/img_activity.svg" alt="activity_one" className="h-[20px] w-[20px] ml-1.5" />
//             <Text size="lg" as="p" className="!text-white-A700_cc">
//               Analytics
//             </Text>
//           </div>
//           </a>
//           <a href="/addtrough">
//           <div className="flex self-start items-center gap-6 p-2.5">
//             <Img
//               src="images/img_requirements.png"
//               alt="requirements"
//               className="h-[18px] w-[18px] ml-1.5 object-cover"
//             />
//             <Text size="lg" as="p" className="!text-white-A700_cc">
//               Trough Management
//             </Text>
//           </div>
//           </a>
//           <div className="flex self-start items-center gap-[23px] p-2.5">
//             <Img
//               src="images/img_resolution.png"
//               alt="resolution_one"
//               className="h-[20px] w-[20px] ml-[5px] object-cover"
//             />
//             <Text size="lg" as="p" className="!text-white-A700_cc">
//               Tea Leaf Categorizer{" "}
//             </Text>
//           </div>
//           <div className="flex self-start items-center gap-[23px] p-2.5">
//             <Img src="images/img_trolley.png" alt="trolley_one" className="h-[20px] w-[20px] ml-[5px] object-cover" />
//             <Text size="lg" as="p" className="!text-white-A700_cc">
//               Tea Grade Predictor{" "}
//             </Text>
//           </div>
//           <div className="flex justify-center items-center gap-[26px] p-2 rounded-[12px] mr-[50px]">
//             <Img src="images/img_irrigation.png" alt="irrigation_one" className="h-[20px] w-[20px] object-cover" />
//             <Text size="lg" as="p" className="!text-white-A700_cc">
//               Tea Vitality Advisor
//             </Text>
//           </div>
//         </div>
//         <div className="flex justify-center pt-[23px] sm:pt-5 mr-[120px]">
//           <div className="flex items-center gap-[19px] p-2.5">
//             <Img src="images/img_log_out.svg" alt="logout_one" className="h-[16px] w-[16px] ml-[5px]" />
//             <Text size="lg" as="p" className="!text-white-A700_cc">
//               Logout
//             </Text>
//           </div>
//         </div>
//       </Menu>
//     </Sidebar>
//   );
// }
import React, { useState, useEffect } from "react";
import { Text, Img, Heading } from "./..";
import { Menu, Sidebar } from "react-pro-sidebar";
import { FaBars } from "react-icons/fa";

export default function Sidebar1({ ...props }) {
  const [collapsed, setCollapsed] = useState(window.innerWidth < 768);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setCollapsed(mobile);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="relative h-full">
      {isMobile && (
        <button
          onClick={handleToggle}
          className="mobile-toggle absolute top-2 left-2 bg-transparent border-none text-white mt-5 ml-2"
        >
          <FaBars size={24} />
        </button>
      )}
      <Sidebar
        {...props}
        width={isMobile ? "80px" : "294px"}
        collapsed={collapsed}
        collapsedWidth="0px"
        onClick={(e) => {
          if (isMobile) e.stopPropagation(); // Prevent sidebar from toggling on internal clicks
        }}
        className={`sidebar custom-sidebar ${isMobile && collapsed ? "collapsed" : ""}`}
        style={{ height: "100vh" }} // Ensure the sidebar takes full viewport height
      >
        <Heading size="4xl" as="h1" className="mt-[31px] !text-white-A700 text-right mr-[40px]">
          Tea Buddy
        </Heading>
        <Menu
          rootStyles={{ ["&>ul"]: { gap: "284px" } }}
          className="flex flex-col self-stretch w-full mb-[5px]"
        >
          <div className="flex flex-col pt-[23px] gap-[23px] sm:pt-5">
            <a href="/">
              <div className="flex self-start items-center gap-[22px] p-2.5">
                <Img src="images/img_align_center.svg" alt="aligncenter_one" className="h-[19px] w-[19px] ml-[7px]" />
                <Text size="lg" as="p" className="!text-white-A700_cc">
                  Dashboard
                </Text>
              </div>
            </a>
            <a href="/analytics">
              <div className="flex self-start gap-[26px] p-2.5">
                <Img src="images/img_activity.svg" alt="activity_one" className="h-[20px] w-[20px] ml-1.5" />
                <Text size="lg" as="p" className="!text-white-A700_cc">
                  Analytics
                </Text>
              </div>
            </a>
            <a href="/addtrough">
              <div className="flex self-start items-center gap-6 p-2.5">
                <Img
                  src="images/img_requirements.png"
                  alt="requirements"
                  className="h-[18px] w-[18px] ml-1.5 object-cover"
                />
                <Text size="lg" as="p" className="!text-white-A700_cc">
                  Trough Management
                </Text>
              </div>
            </a>
            <div className="flex self-start items-center gap-[23px] p-2.5">
              <Img
                src="images/img_resolution.png"
                alt="resolution_one"
                className="h-[20px] w-[20px] ml-[5px] object-cover"
              />
              <Text size="lg" as="p" className="!text-white-A700_cc">
                Tea Leaf Categorizer{" "}
              </Text>
            </div>
            <a href="/teagradepredictor">
              <div className="flex self-start items-center gap-[23px] p-2.5">
                <Img src="images/img_trolley.png" alt="trolley_one" className="h-[20px] w-[20px] ml-[5px] object-cover" />
                <Text size="lg" as="p" className="!text-white-A700_cc">
                  Tea Grade Predictor{" "}
                </Text>
              </div>
            </a>
            <div className="flex justify-center items-center gap-[26px] p-2 rounded-[12px] mr-[90px]">
              <Img src="images/img_irrigation.png" alt="irrigation_one" className="h-[20px] w-[20px] object-cover" />
              <Text size="lg" as="p" className="!text-white-A700_cc">
                Tea Vitality Advisor
              </Text>
            </div>
          </div>
          <div className="flex justify-center pt-[23px] sm:pt-5 mr-[120px]">
            <div className="flex items-center gap-[19px] p-2.5">
              <Img src="images/img_log_out.svg" alt="logout_one" className="h-[16px] w-[16px] ml-[5px]" />
              <Text size="lg" as="p" className="!text-white-A700_cc">
                Logout
              </Text>
            </div>
          </div>
        </Menu>
      </Sidebar>
      <style jsx>{`
        .sidebar {
          transition: width 0.3s ease;
        }
        .custom-sidebar {
          background-color: #078264;
          height: 100vh; // Ensure the sidebar takes full viewport height
        }
        .mobile-toggle {
          background: none;
          border: none;
          color: white;
        }
        @media (max-width: 768px) {
          .sidebar.collapsed {
            width: 0px;
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
