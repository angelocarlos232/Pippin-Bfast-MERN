import React from "react";
import { Helmet } from "react-helmet";
import { Img, Button, Heading, RatingBar, Text } from "../../components";
import Footer from "../../components/Footer";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";

export default function MenuPage() {
  return (
    <>
      
      <div className="flex flex-col items-center justify-start w-full pt-[51px] gap-[139px] md:pt-5 bg-gray-50">
        <div className="flex flex-col items-center justify-start w-full gap-[92px] md:px-5 max-w-[1112px]">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full gap-[10px]">
              <Heading size="4xl" as="h1" className="!font-opensans text-center text-[52px] font-bold">
                The Menu
              </Heading>
              <Tabs
                className="flex flex-col items-center justify-start w-full gap-[50px]"
                selectedTabClassName="!text-white-A700 bg-red-400 rounded-[16px]"
                selectedTabPanelClassName="relative tab-panel--selected"
              >
                <TabList className="flex flex-row justify-between w-full gap-[146px] p-[19px] md:gap-10">
                  <Tab className="mt-1 ml-[35px] sm:ml-5 text-white-A700 text-xl font-semibold">All catagory</Tab>
                  <Tab className="text-gray-900 text-xl font-normal">Dinner</Tab>
                  <Tab className="text-gray-900 text-xl font-normal">Lunch</Tab>
                  <Tab className="text-gray-900 text-xl font-normal">Dessert</Tab>
                  <Tab className="mr-[51px] md:mr-5 text-gray-900 text-xl font-normal">Drink</Tab>
                </TabList>
                <div className="flex flex-col items-center justify-start w-full gap-12">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full gap-10">
                      {[...Array(5)].map((_, index) => (
                        <TabPanel key={`tab-panel${index}`} className="justify-center w-full absolute">
                          <div className="flex flex-row justify-center w-full">
                            <div className="flex flex-row md:flex-col justify-start w-full gap-[35px] md:gap-5">
                              <div className="flex flex-col items-center justify-center w-[32%] md:w-full gap-[34px] p-[30px] sm:p-5 bg-white-A700 rounded-[40px]">
                                <Img
                                  src="images/img_pngitem_41084.png"
                                  alt="pngitem41084"
                                  className="w-[270px] md:h-auto mt-1.5 object-cover"
                                />
                                <div className="flex flex-col items-center justify-start w-full mb-1.5">
                                  <div className="flex flex-col items-center justify-start w-full gap-[11px]">
                                    <Heading size="xl" as="h2" className="text-center text-3xl font-semibold">
                                      Spaghetti
                                    </Heading>
                                    <Text
                                      size="s"
                                      as="p"
                                      className="!text-gray-800_02 text-center text-sm font-normal leading-[200%]"
                                    >
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget
                                      auctor aliquam, diam.{" "}
                                    </Text>
                                  </div>
                                  <RatingBar
                                    value={5}
                                    isEditable={true}
                                    color="#f54748"
                                    activeColor="#f54748"
                                    size={24}
                                    className="flex justify-between mt-[13px] rounded-[1px]"
                                  />
                                  <div className="flex flex-row justify-between items-center w-[95%] md:w-full mt-[30px]">
                                    <Heading as="h3" className="text-[25px] font-semibold">
                                      $12.05
                                    </Heading>
                                    <Button size="xl" className="sm:px-5 font-semibold min-w-[158px] rounded-lg">
                                      Order now
                                    </Button>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-center w-[32%] md:w-full gap-[30px] p-[30px] sm:p-5 bg-white-A700 rounded-[40px]">
                                <Img
                                  src="images/img_pngitem_1447549.png"
                                  alt="pngitem1447549"
                                  className="w-[270px] md:h-auto mt-1.5 object-cover"
                                />
                                <div className="flex flex-col items-center justify-start w-full mb-1.5">
                                  <div className="flex flex-col items-center justify-start w-full gap-[15px]">
                                    <Heading size="xl" as="h4" className="text-center text-3xl font-semibold">
                                      Gnocchi
                                    </Heading>
                                    <Text
                                      size="s"
                                      as="p"
                                      className="!text-gray-800_02 text-center text-sm font-normal leading-[200%]"
                                    >
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget
                                      auctor aliquam, diam.{" "}
                                    </Text>
                                  </div>
                                  <RatingBar
                                    value={5}
                                    isEditable={true}
                                    color="#f54748"
                                    activeColor="#f54748"
                                    size={24}
                                    className="flex justify-between mt-[13px] rounded-[1px]"
                                  />
                                  <div className="flex flex-row justify-between items-center w-[95%] md:w-full mt-[30px]">
                                    <Heading as="h5" className="text-[25px] font-semibold">
                                      $12.05
                                    </Heading>
                                    <Button size="xl" className="sm:px-5 font-semibold min-w-[158px] rounded-lg">
                                      Order now
                                    </Button>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-center w-[32%] md:w-full gap-[30px] p-[30px] sm:p-5 bg-white-A700 rounded-[40px]">
                                <Img
                                  src="images/img_pngegg.png"
                                  alt="pngegg_one"
                                  className="w-[270px] md:h-auto mt-1.5 object-cover"
                                />
                                <div className="flex flex-col items-center justify-start w-full mb-1.5">
                                  <div className="flex flex-col items-center justify-start w-full gap-[15px]">
                                    <Heading size="xl" as="h6" className="text-center text-3xl font-semibold">
                                      Rovioli
                                    </Heading>
                                    <Text
                                      size="s"
                                      as="p"
                                      className="!text-gray-800_02 text-center text-sm font-normal leading-[200%]"
                                    >
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget
                                      auctor aliquam, diam.{" "}
                                    </Text>
                                  </div>
                                  <RatingBar
                                    value={5}
                                    isEditable={true}
                                    color="#f54748"
                                    activeColor="#f54748"
                                    size={24}
                                    className="flex justify-between mt-[13px] rounded-[1px]"
                                  />
                                  <div className="flex flex-row justify-between items-center w-[95%] md:w-full mt-[30px]">
                                    <Heading as="h4" className="text-[25px] font-semibold">
                                      $12.05
                                    </Heading>
                                    <Button size="xl" className="sm:px-5 font-semibold min-w-[158px] rounded-lg">
                                      Order now
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </TabPanel>
                      ))}
                      <div className="flex flex-row md:flex-col w-full gap-[35px]">
                        <div className="flex flex-col items-center justify-center w-[32%] md:w-full gap-[31px] p-[30px] sm:p-5 bg-white-A700 rounded-[40px]">
                          <Img
                            src="images/img_pngwing.png"
                            alt="penne_alla"
                            className="w-[95%] md:h-auto sm:w-full mt-1.5 object-cover"
                          />
                          <div className="flex flex-col items-center justify-start w-full mb-1.5">
                            <div className="flex flex-col items-center justify-start w-full gap-3.5">
                              <Heading size="xl" as="h3" className="text-center text-3xl font-semibold">
                                Penne Alla Vodak
                              </Heading>
                              <Text
                                size="s"
                                as="p"
                                className="!text-gray-800_02 text-center text-sm font-normal leading-[200%]"
                              >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget
                                auctor aliquam, diam.{" "}
                              </Text>
                            </div>
                            <RatingBar
                              value={5}
                              isEditable={true}
                              color="#f54748"
                              activeColor="#f54748"
                              size={24}
                              className="flex justify-between mt-[13px] rounded-[1px]"
                            />
                            <div className="flex flex-row justify-between items-center w-[95%] md:w-full mt-[30px]">
                              <Heading as="h4" className="text-[25px] font-semibold">
                                $12.05
                              </Heading>
                              <Button size="xl" className="sm:px-5 font-semibold min-w-[158px] rounded-lg">
                                Order now
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-center w-[32%] md:w-full gap-[30px] p-[30px] sm:p-5 bg-white-A700 rounded-[40px]">
                          <Img
                            src="images/img_pngitem_5290903.png"
                            alt="pngitem5290903"
                            className="w-[270px] md:h-auto mt-1.5 object-cover"
                          />
                          <div className="flex flex-col items-center justify-start w-full mb-1.5">
                            <div className="flex flex-col items-center justify-start w-full gap-[15px]">
                              <Heading size="xl" as="h3" className="text-center text-3xl font-semibold">
                                Risoto
                              </Heading>
                              <Text
                                size="s"
                                as="p"
                                className="!text-gray-800_02 text-center text-sm font-normal leading-[200%]"
                              >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget
                                auctor aliquam, diam.{" "}
                              </Text>
                            </div>
                            <RatingBar
                              value={5}
                              isEditable={true}
                              color="#f54748"
                              activeColor="#f54748"
                              size={24}
                              className="flex justify-between mt-[13px] rounded-[1px]"
                            />
                            <div className="flex flex-row justify-between items-center w-[95%] md:w-full mt-[30px]">
                              <Heading as="h4" className="text-[25px] font-semibold">
                                $12.05
                              </Heading>
                              <Button size="xl" className="sm:px-5 font-semibold min-w-[158px] rounded-lg">
                                Order now
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-center w-[32%] md:w-full gap-[34px] p-[30px] sm:p-5 bg-white-A700 rounded-[40px]">
                          <Img
                            src="images/img_pngwing_270x270.png"
                            alt="pngwing_one"
                            className="w-[270px] md:h-auto mt-1.5 object-cover"
                          />
                          <div className="flex flex-col items-center justify-start w-full mb-1.5">
                            <div className="flex flex-col items-center justify-start w-full gap-[11px]">
                              <Heading size="xl" as="h3" className="text-center text-3xl font-semibold">
                                Splitza Signature
                              </Heading>
                              <Text
                                size="s"
                                as="p"
                                className="!text-gray-800_02 text-center text-sm font-normal leading-[200%]"
                              >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget
                                auctor aliquam, diam.{" "}
                              </Text>
                            </div>
                            <RatingBar
                              value={5}
                              isEditable={true}
                              color="#f54748"
                              activeColor="#f54748"
                              size={24}
                              className="flex justify-between mt-[13px] rounded-[1px]"
                            />
                            <div className="flex flex-row justify-between items-center w-[95%] md:w-full mt-[30px]">
                              <Heading as="h4" className="text-[25px] font-semibold">
                                $12.05
                              </Heading>
                              <Button size="xl" className="sm:px-5 font-semibold min-w-[158px] rounded-lg">
                                Order now
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-start items-center w-[22%] md:w-full gap-2.5">
                    <Img src="images/img_arrow_left.svg" alt="arrowleft_one" className="h-[15px] w-[15px]" />
                    <div className="flex flex-row justify-between w-[71%]">
                      <div className="flex flex-col items-center justify-start h-[35px] w-[35px]">
                        <Button
                          color="gray_900"
                          size="sm"
                          className="tracking-[-0.50px] font-inter font-semibold min-w-[35px] rounded sm:min-w-full"
                        >
                          1
                        </Button>
                      </div>
                      <div className="flex flex-row w-[48%] gap-2.5">
                        <div className="flex flex-col items-center justify-start h-[35px] w-[44%]">
                          <Button
                            color="gray_200"
                            size="sm"
                            className="tracking-[-0.50px] font-inter font-semibold min-w-[35px] rounded sm:min-w-full"
                          >
                            2
                          </Button>
                        </div>
                        <div className="flex flex-col items-center justify-start h-[35px] w-[44%]">
                          <Button
                            color="gray_200"
                            size="sm"
                            className="tracking-[-0.50px] font-inter font-semibold min-w-[35px] rounded sm:min-w-full"
                          >
                            3
                          </Button>
                        </div>
                      </div>
                      <Button color="gray_200" size="xs" className="w-[35px] rounded">
                        <Img src="images/img_bx_bx_dots_horizontal_rounded.svg" />
                      </Button>
                    </div>
                    <Img
                      src="images/img_akar_icons_chevron_left.svg"
                      alt="akaricons_one"
                      className="h-[15px] w-[15px]"
                    />
                  </div>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full" />
      </div>
    </>
  );
}
