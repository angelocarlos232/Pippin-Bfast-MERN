import React from 'react'
import './index.css'

const Prize = ({price}) => {
  return (
    <div>
        <p className='price text-xl font-extrabold'>{price}</p>
    </div>
  )
}

export default Prize
