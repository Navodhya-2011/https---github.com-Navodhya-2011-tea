import React from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, Text, Button, SelectBox, Switch, Input } from "../../components";
import { ReactTable } from "../../components/ReactTable";
import Sidebar11 from "../../components/Sidebar11";
import { createColumnHelper } from "@tanstack/react-table";
import Sidebar1 from "components/Sidebar1";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const table1Data = [
  { troughid: "WM0001", capacity: "Small", status: "Active" },
  { troughid: "WM0002", capacity: "Medium", status: "Inactive" },
  { troughid: "WM0003", capacity: "Large", status: "Removed" },
];

export default function UpdateThroughPage() {
  const table1Columns = React.useMemo(() => {
    const table1ColumnHelper = createColumnHelper();
    return [
      table1ColumnHelper.accessor("troughid", {
        cell: (info) => (
          <Text as="p" className="!text-black-900 tracking-[0.14px]">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="pt-[5px] px-px !text-gray-700 tracking-[0.14px]">
            Trough ID
          </Text>
        ),
        meta: { width: "142px" },
      }),
      table1ColumnHelper.accessor("capacity", {
        cell: (info) => (
          <Text as="p" className="!text-black-900 tracking-[0.14px]">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="py-0.5 !text-gray-700 tracking-[0.14px]">
            Capacity
          </Text>
        ),
        meta: { width: "131px" },
      }),
      table1ColumnHelper.accessor("status", {
        cell: (info) => (
          <div className="flex justify-between items-end gap-5">
            <div className="flex justify-center items-center w-[47%] mt-[42px] mb-[18px] gap-[9px]">
              <div className="self-end h-[11px] w-[11px] bg-green-A400 rounded-[5px]" />
              <Text as="p" className="!text-black-900 tracking-[0.14px]">
                {info?.getValue?.()}
              </Text>
            </div>
            <Img src="images/img_edit_1.png" alt="editone_one" className="w-[15px] mb-[15px] object-cover" />
          </div>
        ),
        header: (info) => (
          <Text as="p" className="pb-[5px] pl-[11px] !text-gray-700 tracking-[0.14px]">
            Status
          </Text>
        ),
        meta: { width: "147px" },
      }),
    ];
  }, []);

  return (
    <>
      <Helmet>
        <title>Tea Buddy</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex md:flex-col justify-center items-start w-full gap-[45px] overflow-auto bg-indigo-50">
        <Sidebar1 className="flex flex-col w-[296px] h-screen gap-[122px] top-0 p-[22px] sm:p-5 rounded-tl-[30px] rounded-bl-[30px] bg-teal-600 !sticky overflow-auto" />
        <div className="flex justify-center w-[88%] md:w-full md:p-5">
          <div className="flex flex-col w-full gap-7">
            <Heading size="3xl" as="h1" className="text-left mt-[30px]">
              Trough Management{" "}
            </Heading>
            <div className="h-[784px] relative">
              <Img
                src="images/img_arrow_down.svg"
                alt="arrowdown_one"
                className="h-[14px] w-[14px] right-[12%] top-[2%] m-auto absolute"
              />
              <div className="flex flex-col justify-end w-[26%] gap-[17px] right-[12%] top-0 p-[18px] m-auto border-gray-200_01 border border-solid bg-white-A700_e5 absolute rounded-[10px]">
                <Heading as="h2" className="mt-[23px] ml-[3px] md:ml-0 !text-gray-900_01">
                  Add Actual Details
                </Heading>
                <div className="mb-[15px] ml-3 md:ml-0">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-col self-stretch gap-1">
                      <Text as="p">Date</Text>
                      <div className="flex justify-between items-end gap-5 p-[5px] bg-white-A700 shadow-xs rounded-[10px]">
                        <Text size="xl" as="p" className="mb-0.5 ml-5 md:ml-0 !text-gray-500">
                          DD/MM/YYYY
                        </Text>
                        <Img
                          src="images/img_calendar.png"
                          alt="calendar_one"
                          className="w-[25px] mt-[5px] mr-[11px] md:mr-0 object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col self-stretch mt-4 gap-[3px]">
                      <Text as="p">Received Leaves Quantity</Text>
                      <Input shape="round" name="edittext" className="sm:pr-5" />
                    </div>
                    <div className="flex flex-col self-stretch mt-[17px] gap-1">
                      <Text as="p">Rainfall</Text>
                      <div className="h-[40px] bg-white-A700 shadow-xs rounded-[10px]" />
                    </div>
                    <div className="flex self-start items-center mt-4 gap-[17px]">
                      <Text as="p" className="self-end">
                        Holiday
                      </Text>
                      <Switch shape="square" className="self-start border-gray-400 border border-solid" />
                    </div>
                    <Button shape="round" className="self-end mt-2.5 font-bold min-w-[74px] !rounded-[10px]">
                      Save
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col items-center w-[88%] gap-[23px] bottom-0 left-0 m-auto absolute">
                <div className="flex w-full p-[13px] bg-white-A700">
                  <div className="flex flex-col items-end w-[89%] md:w-full mt-[46px] mb-[17px]">
                    <div className="flex sm:flex-col self-stretch justify-end items-start">
                      <Heading size="s" as="h3" className="mt-[7px]">
                        Quantity
                      </Heading>
                      <div className="h-[241px] sm:w-full flex-1 relative sm:flex-none">
                        <Img
                          src="images/img_group.svg"
                          alt="image"
                          className="h-[213px] top-[3%] right-0 left-0 m-auto absolute"
                        />
                        <div className="flex w-[90%] h-full left-0 bottom-0 top-0 my-auto absolute">
                          <div className="flex flex-col w-full gap-[21px]">
                            <div className="flex w-[5%] md:w-full">
                              <Text size="s" as="p" className="!text-gray-800 text-right">
                                150
                              </Text>
                            </div>
                            <div className="flex w-[4%] md:w-full">
                              <Text size="s" as="p" className="!text-gray-800 text-right">
                                125
                              </Text>
                            </div>
                            <div className="flex w-[5%] md:w-full">
                              <Text size="s" as="p" className="!text-gray-800 text-right">
                                100
                              </Text>
                            </div>
                            <Text size="s" as="p" className="ml-[5px] md:ml-0 !text-gray-800 text-right">
                              75
                            </Text>
                            <Text size="s" as="p" className="h-[13px] ml-1 md:ml-0 !text-gray-800 text-right">
                              50
                            </Text>
                            <Text size="s" as="p" className="ml-[5px] md:ml-0 !text-gray-800 text-right">
                              25
                            </Text>
                            <div className="flex justify-between ml-[9px] gap-5 md:ml-0">
                              <div className="flex flex-col w-[2%] mb-3">
                                <Text size="s" as="p" className="!text-gray-800 text-right">
                                  0
                                </Text>
                              </div>
                              <div className="flex flex-col w-[2%]">
                                <Text size="s" as="p" className="!text-gray-800 text-center">
                                  2
                                </Text>
                              </div>
                              <div className="flex flex-col w-[2%]">
                                <Text size="s" as="p" className="!text-gray-800 text-center">
                                  4
                                </Text>
                              </div>
                              <div className="flex flex-col w-[2%]">
                                <Text size="s" as="p" className="!text-gray-800 text-center">
                                  6
                                </Text>
                              </div>
                              <div className="flex flex-col w-[2%]">
                                <Text size="s" as="p" className="!text-gray-800 text-center">
                                  8
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Heading size="s" as="h4" className="mt-[-2px] mr-[7px] md:mr-0 z-[1]">
                      Date
                    </Heading>
                  </div>
                </div>
                <div className="flex flex-col items-center w-full gap-[35px] p-[19px] border-gray-200_02 border-2 border-solid bg-white-A700 rounded-[20px]">
                  <div className="flex flex-col items-center w-[89%] md:w-full mt-[9px]">
                    <Heading as="h5" className="self-start !text-gray-900_01">
                      Trough Details
                    </Heading>
                    <ReactTable
                      size="xs"
                      bodyProps={{ className: "" }}
                      headerProps={{ className: "sm:flex-wrap" }}
                      rowDataProps={{ className: "sm:flex-col" }}
                      className="w-[421px] mt-[-35px]"
                      columns={table1Columns}
                      data={table1Data}
                    />
                    <div className="self-stretch h-px mt-[63px] z-[1] bg-gray-200_03" />
                  </div>
                  <Button color="gray_300" size="xs" className="self-end w-[31px] rounded-[15px]">
                    <Img src="images/img_group_25.png" />
                  </Button>
                </div>
              </div>
              <div className="flex justify-end w-[88%] h-max pl-14 pr-[81px] left-0 bottom-0 top-0 py-[81px] my-auto md:p-5 border-gray-200_02 border-2 border-solid bg-white-A700_bf absolute rounded-[20px]">
                <div className="flex flex-col justify-end w-[31%] md:w-full mt-[308px] mr-16 gap-4 p-[18px] md:mr-0 border-gray-100 border border-solid bg-white-A700 shadow-xs rounded-[10px]">
                  <Heading as="h6" className="mt-[25px] ml-[3px] md:ml-0 !text-gray-900_01">
                    Add New Trough
                  </Heading>
                  <div className="flex flex-col items-start mb-[15px] ml-3 md:ml-0">
                    <Text as="p">Capacity</Text>
                    <SelectBox
                      size="sm"
                      shape="square"
                      name="city"
                      options={dropDownOptions}
                      className="self-stretch mt-[3px]"
                    />
                    <Text as="p" className="mt-[19px]">
                      Status
                    </Text>
                    <SelectBox
                      size="sm"
                      shape="square"
                      name="dropdown"
                      options={dropDownOptions}
                      className="self-stretch mt-1"
                    />
                    <Button shape="round" className="w-full mt-[19px] ml-[px] md:ml-0 font-bold !rounded-[10px]">
                      Save
                    </Button>
                  </div>
                </div>
              </div>
              <div className="h-[412px] w-full top-0 right-0 left-0 m-auto absolute">
                <Text size="lg" as="p" className="left-[22%] top-[22%] m-auto !text-white-A700_cc absolute">
                  Troughs
                </Text>
                <div className="w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                  <div className="flex md:flex-col justify-between items-center gap-5">
                    <div className="h-[412px] w-[63%] relative">
                      <div className="justify-center h-[412px] w-full left-0 bottom-0 right-0 top-0 m-auto border-gray-200_01 border border-solid bg-white-A700_e5 absolute rounded-[10px]" />
                      <div className="flex flex-col items-end w-[37%] gap-[26px] right-[2%] top-[5%] m-auto absolute">
                        <div className="flex justify-end items-center w-[35%] md:w-full gap-[3px]">
                          <Heading size="xs" as="p" className="!text-gray-600">
                            Aug 25-Sept 25
                          </Heading>
                          <div className="flex flex-col self-start w-[14%]">
                            <div className="flex flex-col">
                              <Img
                                src="images/img_arrow_down.svg"
                                alt="arrowdown_three"
                                className="h-[14px] md:w-[14px]"
                              />
                              <Img
                                src="images/img_arrow_down.svg"
                                alt="arrowdown_five"
                                className="h-[14px] md:w-[14px] mt-[-14px]"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch p-[25px] sm:p-5 bg-light_blue-50 rounded-[10px]">
                          <div className="flex flex-col mb-3.5">
                            <div className="flex items-end mr-[15px] md:mr-0">
                              <Heading size="xl" as="h4" className="mt-[5px]">
                                75
                              </Heading>
                              <Heading size="xl" as="h4" className="h-[33px] ml-1">
                                KG
                              </Heading>
                              <Text size="2xl" as="p" className="mb-2.5 ml-[3px] !font-manrope">
                                *
                              </Text>
                              <Heading size="xl" as="h4" className="ml-4">
                                7
                              </Heading>
                              <Text as="p" className="mb-[5px] ml-[23px] !font-manrope">
                                Large Troughs
                              </Text>
                            </div>
                            <div className="flex justify-center items-end">
                              <Heading size="xl" as="h4" className="mt-1">
                                50
                              </Heading>
                              <Heading size="xl" as="h4" className="h-[33px]">
                                KG
                              </Heading>
                              <Text size="2xl" as="p" className="mb-[9px] ml-[3px] !font-manrope">
                                *
                              </Text>
                              <Heading size="xl" as="h4" className="ml-1.5">
                                10
                              </Heading>
                              <Text as="p" className="mb-[5px] ml-[19px] !font-manrope">
                                Medium Troughs
                              </Text>
                            </div>
                            <div className="flex items-end mr-[17px] md:mr-0">
                              <Heading size="xl" as="h4" className="mt-1">
                                25
                              </Heading>
                              <Heading size="xl" as="h4" className="h-[33px]">
                                KG
                              </Heading>
                              <Text size="2xl" as="p" className="mb-[9px] ml-[3px] !font-manrope">
                                *
                              </Text>
                              <Heading size="xl" as="h4" className="ml-3.5">
                                2
                              </Heading>
                              <Text as="p" className="mb-[5px] ml-[23px] !font-manrope">
                                Small Troughs
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-end gap-7 p-[33px] sm:p-5 bg-red-100 rounded-[10px]">
                          <Heading size="xl" as="h4" className="self-end mt-[3px]">
                            Dispatch
                          </Heading>
                          <Heading size="xl" as="h4" className="self-end mr-[3px]">
                            450Kg
                          </Heading>
                        </div>
                      </div>
                      <div className="flex flex-col items-end w-[11%] bottom-[17%] left-[6%] m-auto absolute">
                        <div className="flex self-stretch justify-end items-center gap-[5px]">
                          <div className="h-[10px] w-[10px] bg-light_blue-50 rounded-[50%]" />
                          <Text as="p" className="!font-manrope">
                            Main Stock
                          </Text>
                        </div>
                        <div className="flex justify-end mt-2 gap-1">
                          <Heading as="h6">254</Heading>
                          <Heading as="h6" className="h-[25px]">
                            KG
                          </Heading>
                        </div>
                        <div className="flex self-stretch items-start mt-[37px] mr-[13px] gap-[5px] md:mr-0">
                          <div className="h-[10px] w-[10px] mt-[3px] bg-orange-50 rounded-[50%]" />
                          <Text as="p" className="!font-manrope">
                            Dispatch
                          </Text>
                        </div>
                        <div className="flex justify-end mt-1.5 gap-1">
                          <Heading as="h6">3000</Heading>
                          <Heading as="h6" className="h-[25px]">
                            KG
                          </Heading>
                        </div>
                        <div className="flex self-stretch items-center mt-9 mr-[39px] gap-[5px] md:mr-0">
                          <div className="h-[10px] w-[10px] bg-light_green-A100 rounded-[50%]" />
                          <Text as="p" className="!font-manrope">
                            Total
                          </Text>
                        </div>
                        <div className="flex justify-end mt-2 gap-1">
                          <Heading as="h6">3254</Heading>
                          <Heading as="h6" className="h-[25px]">
                            KG
                          </Heading>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-end w-[30%] bottom-1/4 left-[27%] p-[29px] m-auto sm:p-5 bg-light_green-A100 absolute rounded-[50%]">
                        <Heading size="2xl" as="h2" className="mt-11 mb-[35px]">
                          3254KG
                        </Heading>
                      </div>
                      <div className="h-[234px] w-[234px] bottom-[18%] left-[24%] m-auto border-black-900 border border-solid absolute rounded-[50%]" />
                      <Heading as="h6" className="left-[3%] top-[10%] m-auto !text-gray-900_01 absolute">
                        Predicted Leaf Quantity{" "}
                      </Heading>
                    </div>
                    <Img src="images/img_requirements.png" alt="requirements" className="w-[18px] object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
