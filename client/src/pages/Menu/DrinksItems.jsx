import React, { useEffect, useState } from 'react';
import drinks from '../../images/drinks.png';
import './index.css';
import ReactStars from 'react-rating-stars-component';
import Price from './Price';

const DrinksItems = () => {
  
  return (
    <div className="wholeitem flex-col bg-white px-6 py-10">
      <div className="flex justify-center">
        <img src={drinks} alt="tapsilog" className="itemimg h-64 " />
      </div>
      <div className="">
        <label className="itemlabel flex justify-center mt-6 text-3xl font-bold mb-6">
          Drinks_1
        </label>
        <p className="itemtext text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore dicta quae quidem
          doloremque aliquam odit, quis facere vitae eos, aspernatur
        </p>
      </div>
      <div className="itemstars flex justify-center ">
        <ReactStars
          count={5}
          value={5}
          size={20}
          activeColor="#0cbe3e"
        />
      </div>
      <div className="bottompart flex justify-between items-center pt-3">
        <div className="itemprice">
          <Price />
        </div>
        <div className="itembuybutton">
          <button className="p-2">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default DrinksItems;
