import React, { useState } from 'react';
import Tapsilog from '../../images/tapsilog.png';
import './index.css';
import ReactStars from 'react-rating-stars-component';
import Price from '../Menu/Price';
import { toast } from 'react-hot-toast';

const AllItems = ({ name, price, image, addToOrder }) => {
  const [quantity, setQuantity] = useState(0);
  const [addedToOrder, setAddedToOrder] = useState(false); // Track whether the item has been added to the order or not

  const clickaddHandler = () => {
    if (quantity >= 10) {
      toast.error("Maximum limit has been reached");
    } else {
      setQuantity(quantity + 1);
    }
  };

  const clickminusHandler = () => {
    if (quantity <= 0) {
      toast.error("Can't be less than zero");
    } else {
      setQuantity(quantity - 1);
    }
  };

  const addItemToOrder = () => {
    const item = {
      name: name,
      price: price,
      image: image,
      quantity: quantity
    };
    if (quantity<=0){
      toast.error("Quantity must exceed 1")
    } else{
      setAddedToOrder(true); // Mark the item as added to the order
      addToOrder(item);
      setQuantity(0);
    }
  };

  



  return (
    <div className={`item-order flex-col bg-white px-4 py-6 w-48`}>
      <div className="flex justify-center w-26">
        <img src={image} alt="tapsilog" className="itemimg" />
      </div>
      <div className="">
        <label className="itemlabel">{name}</label>
        <div className="itemstars flex justify-center">
          <ReactStars count={5} value={5} size={20} activeColor="#0cbe3e" />
        </div>
        <p className="itemtext text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore dicta</p>
      </div>
      <div className="flex justify-center mt-3">
        <Price price={price} />
      </div>
      <div className="bottompart flex items-center pt-3">
        <div className="flex">
          <div className="button-adder flex justify-center gap-6 w-full border-x-black">
            <div className="button-container flex gap-6 bg-slate-50 ">
              <button onClick={clickminusHandler} className="button-minus">-</button>
              <p className="text-2xl">{quantity}</p>
              <button onClick={clickaddHandler} className="button-plus">+</button>
            </div>
            <button className='add-button' onClick={addItemToOrder}>Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllItems;
