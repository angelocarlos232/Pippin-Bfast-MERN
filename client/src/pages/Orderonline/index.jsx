import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useNavigate } from "react-router-dom";
import './index.css';
import AllItems from "./AllItems";
import DeleteIcon from '@mui/icons-material/Delete';
import toast from "react-hot-toast";
import pizza from '../../images/pizza.png'
import tapsilog from '../../images/tapsilog.png'
import drinks from '../../images/drinks.png'
import dessert from '../../images/dessert.png'
import axios from 'axios'

export default function OrderonlinePage() {
  const [selectedTab, setSelectedTab] = useState(0); // Initialize selected tab index
  const [selectedItems, setSelectedItems] = useState([]);

  const navigate = useNavigate();

  const maximumExceed = () =>{
    if (selectedItems.length >= 5){
      toast.error("Maximum orders reached")
    } else{
      return true;
    }

  }

  const handleTabSelect = (index) => {
    setSelectedTab(index); // Update selected tab index
  };

  const addToOrder = (item) => {
    if (maximumExceed(true)){
      setSelectedItems([...selectedItems, item])
    } else{
    }

  }

  const deleteOrder = (index) => {
    const newSelectedItems = [...selectedItems];
    newSelectedItems.splice(index, 1); // Remove the item at the specified index
    setSelectedItems(newSelectedItems);

  }


  const confirmCart = async () => {
    try {
      // Send a POST request to your backend endpoint to save the selected items to the cart
      const response = await axios.post('http://localhost:8000/cart', {
        items: selectedItems // Assuming your backend expects an array of items
      });
      
      // Check if the request was successful
      if (response.status === 200) {
        toast.success('Cart confirmed and items added successfully!');
        // Clear the selected items array or perform any other necessary actions
        setSelectedItems([]);
        // Redirect the user to the cart page or any other desired page
        // navigate('/cart');
      } else {
        toast.error('Failed to confirm cart. Please try again later.');
      }
    } catch (error) {
      console.error('Error confirming cart:', error);
      toast.error('An error occurred while confirming cart. Please try again later.');
    }
  };



  return (
    <div className="order-main-container">
      <div className="order-container">
        <div className="orderpage-container">
          <Tabs
            className="flex flex-col items-center justify-start w-full"
            selectedTabClassName="selected-tab"
            selectedTabPanelClassName="relative tab-panel--selected"
            onSelect={handleTabSelect} // Handle tab selection
            selectedIndex={selectedTab} // Set selected tab index
          >

            <TabList className="categories flex flex-row justify-between w-full gap-[146px] p-[19px] md:gap-10">
              <Tab className="tab">All categories</Tab>
              <Tab className="tab">Pizza</Tab>
              <Tab className="tab">Silog</Tab>
              <Tab className="tab">Dessert</Tab>
              <Tab className="tab">Drink</Tab>
            </TabList>
            


            <div className="choices-main-container">
            <div className="choices-container">
            
          <div className="choices-left-side">
                <TabPanel className="">
                    <p className="text-3xl">Content for All categories</p>
                    <div className="choices-items">
                      <AllItems name="Tapsilog" price="$35" image={tapsilog} addToOrder={addToOrder} />
                      <AllItems name="Classic Burger" price="$10" image={tapsilog} addToOrder={addToOrder}/>
                      <AllItems name="Margherita Pizza" price="$15" image={tapsilog} addToOrder={addToOrder}/>
                      <AllItems name="Grilled Salmon" price="$25" image={tapsilog} addToOrder={addToOrder}/>
                      <AllItems name="Chicken Alfredo" price="$18" image={tapsilog} addToOrder={addToOrder}/>
                      <AllItems name="Vegetable Stir-Fry" price="$12" image={tapsilog} addToOrder={addToOrder}/>
                      <AllItems name="BBQ Ribs" price="$30" image={tapsilog} addToOrder={addToOrder}/>
                      <AllItems name="Shrimp Scampi" price="$20" image={tapsilog} addToOrder={addToOrder}/>
                      <AllItems name="Chocolate Cake" price="$8" image={tapsilog} addToOrder={addToOrder}/>
                    </div>
                  </TabPanel>
                  <TabPanel className="">
                  <p className="text-3xl">Pizza</p>
                    <div className="choices-items">
                    <AllItems name="Supreme Delight" price="$35" image={pizza} addToOrder={addToOrder} />
                    <AllItems name="Pepperoni" price="$30" image={pizza} addToOrder={addToOrder} />
                    <AllItems name="Veggie Paradise" price="$25" image={pizza} addToOrder={addToOrder} />
                    <AllItems name="BBQ Bonanza" price="$35" image={pizza} addToOrder={addToOrder} />
                    <AllItems name="Margherita" price="$30" image={pizza} addToOrder={addToOrder} />
                    <AllItems name="Hawaiian Heaven" price="$30" image={pizza} addToOrder={addToOrder} />
                    <AllItems name="Meat Lover" price="$35" image={pizza} addToOrder={addToOrder} />
                    <AllItems name="Four Cheese" price="$30" image={pizza} addToOrder={addToOrder} />
                    <AllItems name="Spicy Sizzler" price="$35" image={pizza} addToOrder={addToOrder} />
                    </div>
                  </TabPanel>
                  <TabPanel className="">
                  <p className="text-3xl">Silog</p>
                    <div className="choices-items">
                      <AllItems name="Tapsilog" price="$35" image={tapsilog} addToOrder={addToOrder} />
                      <AllItems name="Classic Burger" price="$10" image={tapsilog} addToOrder={addToOrder}/>
                      <AllItems name="Margherita Pizza" price="$15" image={tapsilog} addToOrder={addToOrder}/>
                      <AllItems name="Grilled Salmon" price="$25" image={tapsilog} addToOrder={addToOrder}/>
                      <AllItems name="Chicken Alfredo" price="$18" image={tapsilog} addToOrder={addToOrder}/>
                      <AllItems name="Vegetable Stir-Fry" price="$12" image={tapsilog} addToOrder={addToOrder}/>
                      <AllItems name="BBQ Ribs" price="$30" image={tapsilog} addToOrder={addToOrder}/>
                      <AllItems name="Shrimp Scampi" price="$20" image={tapsilog} addToOrder={addToOrder}/>
                      <AllItems name="Chocolate Cake" price="$8" image={tapsilog} addToOrder={addToOrder}/>
                    </div>
                  </TabPanel>
                  <TabPanel className="">
                  <p className="text-3xl">Dessert</p>
                    <div className="choices-items">
                    <AllItems name="Choco Cake" price="$35" image={dessert} addToOrder={addToOrder} />
                    <AllItems name="Tiramisu" price="$35" image={dessert} addToOrder={addToOrder} />
                    <AllItems name="Cheesecake" price="$30" image={dessert} addToOrder={addToOrder} />
                    <AllItems name="Red Velvet" price="$35" image={dessert} addToOrder={addToOrder} />
                    <AllItems name="Fruit Tart" price="$30" image={dessert} addToOrder={addToOrder} />
                    <AllItems name="Apple Pie" price="$30" image={dessert} addToOrder={addToOrder} />
                    <AllItems name="Banoffee" price="$35" image={dessert} addToOrder={addToOrder} />
                    <AllItems name="Brownie" price="$30" image={dessert} addToOrder={addToOrder} />
                    <AllItems name="Shortcake" price="$35" image={dessert} addToOrder={addToOrder} />
                    </div>
                  </TabPanel>
                  <TabPanel className="">
                  <p className="text-3xl">Drinks</p>
                    <div className="choices-items">
                      <AllItems name="Mint Tea" price="$3" image={drinks} addToOrder={addToOrder} />
                      <AllItems name="Iced Coffee" price="$4" image={drinks} addToOrder={addToOrder} />
                      <AllItems name="Green Tea" price="$3" image={drinks} addToOrder={addToOrder} />
                      <AllItems name="Lemonade" price="$3" image={drinks} addToOrder={addToOrder} />
                      <AllItems name="Milkshake" price="$5" image={drinks} addToOrder={addToOrder} />
                      <AllItems name="Latte" price="$4" image={drinks} addToOrder={addToOrder} />
                      <AllItems name="Smoothie" price="$5" image={drinks} addToOrder={addToOrder} />
                      <AllItems name="Soda" price="$2" image={drinks} addToOrder={addToOrder} />
                      <AllItems name="Water" price="$1" image={drinks} addToOrder={addToOrder} />

                    </div>
                  </TabPanel>
          </div>
          <div className="choices-right-side">
            <div className="order-list">
                <div className="order-list-title">
                  <h1>Order List</h1>
                </div>
                <div className="order-list-contents">
                {selectedItems.slice(0, 5).map((item, index) => (
            <div key={index} className="order-list-item">
              <div className="flex justify-between gap-3">
                <h1>{item.name}</h1>
                <button onClick={() => deleteOrder(index)}><DeleteIcon /></button>
              </div> 
              <div className="flex justify-between">
                <h2>x{item.quantity}</h2>
                <h3>{item.price}</h3>
              </div>
            </div>
          ))}
                </div>  
                <div className="go-to-cart">
                  <button onClick={confirmCart}>Confirm and Go to Cart</button>
                </div>
            </div>
            </div>
          </div>
          </div>

          </Tabs>

            
        </div>
      </div>


    </div>
  );
}
