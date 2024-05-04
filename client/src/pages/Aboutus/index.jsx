import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Text, Img, Button } from "../../components";
import './index.css'
import chef from '../../images/about-us/chef.png'
import chef_cooking from '../../images/about-us/chef-cooking.jpg'
import maps from '../../images/about-us/maps.png'

export default function AboutusPage() {
  return (
    <>
     <div className="main-container">


<div className="whole-container">
  <div className="">
    <div className="grid grid-cols-2 gap-12">
      <div className="about-first-part-right">
        <img src={chef} alt="chef"></img>
      </div>
      <div className="about-first-part-left">
        <div className="about-first-part">
          <h1 className="text-6xl font-bold">About our</h1>
          <h2 className="text-6xl font-bold"><span className="text-green-600">Restaurant</span></h2> 
          <h3 className="text-xl mt-6 leading-8 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit enim blanditiis sequi iusto impedit voluptas optio repellat laborum
           soluta. Quo dolore quia animi eaque ipsa, explicabo in voluptates dignissimos minima.</h3>
           <div className="first-part-left-buttons">
          <div><button className="button-1">Visit Us</button></div>
        </div>
        </div>
      </div>
      <div>

      </div>
    </div>   



    <div className="grid grid-cols-2 gap-12">
      <div className="about-first-part-left">
        <div className="about-first-part">
          <h3 className="text-xl mt-6 leading-8 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit enim blanditiis sequi iusto impedit voluptas optio repellat laborum
           soluta. Quo dolore quia animi eaque ipsa, explicabo in voluptates dignissimos minima. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis rerum, iure iusto sequi quibusdam deleniti totam 
           odit harum? Esse autem molestias impedit officiis nobis delectus, inventore pariatur! Repellat, voluptate cumque?</h3>

        </div>
      </div>
      <div className="about-second-part-right">
        <img src={chef_cooking} alt="chef"></img>
      </div>
      <div>

      </div>
    </div>
    <div className="about-third-part flex justify-center mt-20">
      <div className="flex flex-col justify-center items-center">
        <p className="text-6xl font-bold space tracking-wider mb-6">Find us in the Metro</p>
        <img src={maps} alt="map"></img>
      </div>

    </div>
  </div>
  </div>
  </div>
    </>
  );
}
