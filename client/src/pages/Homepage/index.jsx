import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Button, Img, RatingBar } from "../../components";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";
import ReactStars from 'react-rating-stars-component';
import './index.css'
import { Avatar } from '@mui/material';
import firstpartimage from '../../images/light.png'
import Menu from '../Menu/index'

export default function HomepagePage() {
  return (
    <>
    <div className="main-container">


    <div className="whole-container">
      <div className="homepage-container">
        <div className="first-part grid grid-cols-2 gap-36">
          <div className="first-part-left">
            <div className="justify-start">
              <h1 className="text-6xl font-bold">Premium Bistro</h1>
              <h2 className="text-6xl font-bold">in the <span className="text-green-600">Metro.</span></h2> 
              <h3 className="text-xl mt-6 leading-8">Providing best all-categories dish and drinks <br /> all throughout Metro Manila.</h3>
            </div>
            <div className="first-part-left-buttons">
              <div><button className="button-1">Order Now</button></div>
              <div><button className="button-2">About us</button></div>      
            </div>
          </div>
          <div className="first-part-right">
            <img src={firstpartimage} alt="img"></img>
          </div>
        </div>   
      </div>
      </div>

      <div className="second-whole-container">
      <div className="second-homepage-container bg-green-200">
        <div className="second-part grid grid-cols-2 gap-40">
          <div className="second-part-right">
            <img src={firstpartimage} alt="img"></img>
          </div>
          <div className="second-part-left">
            <div className="justify-start">
              <h1 className="text-6xl font-bold">Our</h1>
              <h2 className="text-6xl font-bold">Finest <span className="text-green-600">Dish.</span></h2> 
              <h3 className="text-xl mt-6 leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam molestiae minus enim eligendi necessitatibus nisi maxime beatae minima ipsa numquam, aliquam magni quibusdam vitae voluptate reiciendis nulla ipsam obcaecati maiores?</h3>
            </div>
            <div className="first-part-left-buttons">
              <div><button className="button-1">Try it now!</button></div>
            </div>
          </div>
        </div>   
      </div>
      </div>

      <div className="pb-20 bg-slate-50">
        <Menu />
      </div>

      

      <div className="whole-container mb-0">
        <div className="third-part">
          <div className="review-text">
            <h1>What our customers say</h1>
          </div>
          <div className="review-card">
            <div className="review-contents">
              <p><span className="text-5xl font-bold">L</span>orem ipsum dolor sit amet consectetur adipisicing elit. Possimus ea numquam voluptatibus id, qui aspernatur soluta nihil 
                facilis, neque maxime totam, sit autem dolor. Ea, dolorem. Nulla laudantium libero dolor?</p>
                <div className="flex justify-center">
                <ReactStars
                  count={5}
                  value={5}
                  size={30}
                  activeColor="#0cbe3e"
                />
                </div>
              <div className="flex justify-center gap-3 mt-2-">
                <Avatar>A</Avatar>
                <p className="font-bold">Aragorn II<br /> <span className="text-sm font-normal">Legendary Chef</span></p>
              </div>
              

            </div>
          </div>
        </div>  
      </div>

      <div className="whole-container mb-0">
        <div className="fourth-homepage-container">
          <div className="map-part">
            <div className="map-part-text">
               <h1> Visit us! We are open 24/7.. </h1>
               <div className="map-part-button"><button>View in Maps</button></div>
            </div>
          </div>
        
        </div>


      </div>



            
    </div>
      
    </>
  );
}
