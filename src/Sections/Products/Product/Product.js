import React from 'react'
import product from '../../../Assets/product.jpeg'
import {BsCart2} from 'react-icons/bs'

const Product = () => {
  return (
    <div className='product bg-white'>
        <div className='product-img'>
            <img src={product} alt="" />
        </div>
        <div className='product-discription'>
           <div className='product-text'> Lorem ipsum dolor sit amet consectetur elit.</div>
           <div className='cart'><BsCart2/></div>
        </div>
    </div>
  )
}

export default Product