import React from 'react'
import product from '../../../Assets/product.jpeg'

const Product = () => {
  return (
    <div className='product bg-white'>
        <div className='product-img'>
            <img src={product} alt="" />
        </div>
        <div className='product-discription'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
    </div>
  )
}

export default Product