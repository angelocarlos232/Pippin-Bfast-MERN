
import { Img, Button, Heading, RatingBar, Text } from "../../components";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";
import './index.css'
import Items from "./Items";
import { useState } from "react";
import styled from 'styled-components'
import SecondItem from "./Items_2";
import ThirdItem from "./Items_3";
import { useRef } from "react";
import LightItems from "./LightItems";
import HeavyItems from "./HeavyItems";
import DessertItems from "./DessertItems";
import DrinksItems from "./DrinksItems";



const ratingChanged = (newRating) => {
  console.log(newRating);
};

const CardsContainer = styled.div`
  display: ${props => props.show ? 'block' : 'none'};
`;





const PrevButton = styled.button`
  background: white;
  padding: 10px;
  font-weight: 500;
  border-radius: 10px;
  ${props => props.disabled && `
    opacity: 0.5;
    cursor: not-allowed;
  `}
  
`;
const NextButton = styled.button`
  background: white;
  padding: 10px;
  font-weight: 500;
  border-radius: 10px;
`;



 
export default function MenuPage() {

  const zRef = useRef(null);



  const NextPage = ({ nextPage, prevPage }) => {
    return (
      <div className="flex justify-center gap-5">
        <PrevButton onClick={prevPage} disabled={page === 0}> Back </PrevButton>
        <PrevButton onClick={nextPage} disabled={page === 2}> Next </PrevButton>
      </div>
    );
  };
  const [page, setPage] = useState(0);

  const nextPage = () => {
    if(page<3){
      setPage(page + 1);
      console.log(page);
      zRef.current.scrollIntoView({ behavior: "smooth" }); // Scroll to the "z" div
    }
       console.log("error")
  }

  const prevPage = () => {
    if (page>0){
      setPage(page - 1);
      console.log(page);
      zRef.current.scrollIntoView({ behavior: "smooth" }); // Scroll to the "z" div
    }
    else {
      console.log("error")
    }
  }



  return (

    <>
      <div className="flex flex-col items-center justify-start w-full gap-[139px] md: bg-gray-50">
        <div ref={zRef} className="z flex flex-col items-center justify-start w-full gap-[50px] mt-16 md:px-5 max-w-[1112px]">
              <Heading size="4xl" as="h1" className="titlepage !font-opensans text-center text-[52px] font-bold">
                The Menu
              </Heading>
              <Tabs
                className="flex flex-col items-center justify-start w-full"
                selectedTabClassName="selected-tab"
                selectedTabPanelClassName="relative tab-panel--selected"
              >
                <TabList className="categories flex flex-row justify-between w-full gap-[146px] p-[19px] md:gap-10">
                  <Tab className="tab">All categories</Tab>
                  <Tab className="tab">Light</Tab>
                  <Tab className="tab">Heavy</Tab>
                  <Tab className="tab">Dessert</Tab>
                  <Tab className="tab">Drink</Tab>
                </TabList>

          
                <TabPanel value={0}>
                  <CardsContainer show = {page===0}>
                  <div className="cardscontainer">
                  <div className="cards grid grid-cols-3 gap-8 p-6 ">
                      <div><Items /></div>
                      <div><Items /></div>
                      <div><Items /></div>
                      <div><Items /></div>
                      <div><Items /></div>
                      <div><Items /></div>
                      <div><Items /></div>
                      <div><Items /></div>
                      <div><Items /></div>
                  </div>
                  </div>
                  </CardsContainer>
                  <CardsContainer show = {page===1}>
                  <div className="cardscontainer">
                  <div className="cards grid grid-cols-3 gap-8 p-6 ">
                      <div><SecondItem/></div>
                      <div><SecondItem/></div>
                      <div><SecondItem/></div>
                      <div><SecondItem/></div>
                      <div><SecondItem/></div>
                      <div><SecondItem/></div>
                      <div><SecondItem/></div>
                      <div><SecondItem/></div>
                      <div><SecondItem/></div>
                  </div>
                  </div>
                  </CardsContainer>
                  <CardsContainer show = {page===2}>
                  <div className="cardscontainer">
                  <div className="cards grid grid-cols-3 gap-8 p-6 ">
                      <div><ThirdItem /></div>
                      <div><ThirdItem /></div>
                      <div><ThirdItem /></div>
                      <div><ThirdItem /></div>
                      <div><ThirdItem /></div>
                      <div><ThirdItem /></div>
                      <div><ThirdItem /></div>
                      <div><ThirdItem /></div>
                      <div><ThirdItem /></div>
                  </div>
                  </div>
                  </CardsContainer>
                  
                  <div className="flex justify-center gap-5">
                    <NextPage nextPage={nextPage} prevPage={prevPage} />
              
                  </div>
                </TabPanel>

                <TabPanel value={1}>
                    <div className="">
                      <div className="flex-col gap-6">
                        <LightItems className="mb-36"/>
                        <LightItems />
                        <LightItems />
                        <LightItems />
                        <LightItems />
                        <LightItems />
                      </div>
                    </div>
                </TabPanel>

                <TabPanel value={2}>
                    <div className="">
                      <div className="flex-col gap-6">
                        <HeavyItems />
                        <HeavyItems />
                        <HeavyItems />
                        <HeavyItems />
                        <HeavyItems />
                        <HeavyItems />
                      </div>
                    </div>
                </TabPanel>

                <TabPanel value={3}>
                    <div className="">
                      <div className="flex-col gap-6">
                        <DessertItems />
                        <DessertItems />
                        <DessertItems />
                        <DessertItems />
                        <DessertItems />
                        <DessertItems />
                      </div>
                    </div>
                </TabPanel>

                <TabPanel value={4}>
                <div className="cardscontainer">
                  <div className="cards grid grid-cols-3 gap-8 p-6 ">
                        <DrinksItems />
                        <DrinksItems />
                        <DrinksItems />
                        <DrinksItems />
                        <DrinksItems />
                        <DrinksItems />
                      </div>
                    </div>
                </TabPanel>
              </Tabs>

              
            </div>
      </div>
    </>
  );
}
