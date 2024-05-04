import React, { useEffect, useState } from 'react';
import './indexDinner.css';
import ReactStars from 'react-rating-stars-component';
import Price from './Price';
import heavyitems from '../../images/gulay.png'

const HeavyItems = () => {
  
  return (
    <div className="dinneritems flex justify-between gap-20 px-6 py-10 bg-white mb-6">
        <div className='dinnerleft flex-2 ml-6'>
          <div>
            <img className='dinneritemimg' src={heavyitems} alt='dinner1'></img>
          </div>
        </div>


        <div className='dinnerright flex-1'>
        
        <label className="text-2xl font-bold">
          Heavy_1
        </label>
        <p className="">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae necessitatibus laudantium aliquid, ut harum quisquam voluptatem in, vel unde, fugit nemo. Totam porro cumque velit consequatur nihil! Id, nam dolore.
        </p>

      <div className="">
        <ReactStars
          count={5}
          value={5}
          size={20}
          activeColor="#0cbe3e"
        />
      </div>
      <div className="flex mt-4 items-center gap-6">
        <div className="">
          <Price />
        </div>
        <div className="">
          <button className="itembuybutton">Buy Now</button>
        </div>
        </div>
    </div>
    </div>
  );
};

export default HeavyItems;
