import React, {useState} from 'react'
import './productstyle.css'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../features/appSlice'
import { Link, useNavigate } from 'react-router-dom'
import Product from './product'


const Cart = () => {
const {cart} = useSelector(state => state.app)
  return (
    <div>
        <h1>Cart</h1>
        <Link to='/'>Back to Products</Link>
        {
            cart.map((item) => {
                return (
                  <Product item={item} page="cart" />
                )
            })
        }
    </div>
  )
}

export default Cart
