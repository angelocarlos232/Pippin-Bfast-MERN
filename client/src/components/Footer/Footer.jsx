import React from 'react'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

const Footer = () => {
  return (
    <div className='main'>
        <div className='main-footer px-96'>
            <div className='title-footer'>Pippin's Breakfast</div>
            <div className='title-desc'>Lorem ipsum dolor sit amet 
            consectetur adipisicing elit. In, tempore. Et, culpa voluptate. 
            Nihil delectus officiis dolorem unde, iure nemo tempore asperiores atque neque rerum 
            quibusdam distinctio corrupti eum nobis.</div>
            <div className='icons flex gap-8'>
                <FacebookIcon />
                <InstagramIcon />
                <XIcon />
            </div>
        </div>
    </div>
  )
}

export default Footer
