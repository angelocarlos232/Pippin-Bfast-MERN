import React from 'react'
import './index.css'

const index = () => {
  return (
    <div className='main-contact-container'>
      <div className='contact-container'>
        <div className='contact-title'>
          <h1 className='text-6xl font-bold tracking-wide'>Contact Us</h1>
        </div>
        <div className='contact-description'>
        <h2 className='text-xl tracking-wide'>We greatly appreciate customer feedback. Please don't hesitate to share 
        your thoughts or inquire about anything you'd like to know.
        </h2>
        </div>


        <div className='contact-messaging-container'>
        <div className='contact-messaging'>
          <div className='contact-messaging-left'>
          <iframe
                title="Google Map"
                width="100%"
                height="440"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.8373107663133!2d121.00590411444675!3d14.597965780985078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9dd976ededf%3A0xbaaa357c5585b8c2!2sPolytechnic%20University%20of%20the%20Philippines!5e0!3m2!1sen!2sph!4v1648828127872!5m2!1sen!2sph"
                allowFullScreen
              ></iframe>
          </div>
          <div className='contact-messaging-right'>
            <input placeholder='First Name'></input>
            <input placeholder='Last Name'></input>
            <input placeholder='Email Address'></input>
            <input placeholder='Subject'></input>
            <textarea type='text' placeholder='Message'></textarea>
            <button>Submit</button>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default index
