import React, { useEffect, useState } from 'react'
import './productstyle.css'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../features/appSlice'
import { Link, useNavigate } from 'react-router-dom'
import Product from './product'


const Cart = () => {
    const { cart } = useSelector(state => state.app)

    const [totalSum, setTotalSum] = useState(0)

    useEffect(() => {
        calculateSum()
    }, [cart])


    const calculateSum = () => {
        const sumCart = cart.reduce((sum, item) => {
            sum = sum + (item.price * item.quantity)
            return sum
        }, 0)

        setTotalSum(sumCart)
    }
    return (
        <div>
            <h1>Cart</h1>
            <Link to='/'>Back to Products</Link>

            {
                cart.length === 0 ? (
                    <div>You dont have any items in your cart</div>
                ) : (
                    <div>
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

            <div style={{
                height: 20,
                padding: 8,
                backgroundColor: 'cyan',
                color: 'black',
                margin: 20,
                fontSize: 18,
                fontWeight: 'bold'
            }}>
                total price of your cart is: ${totalSum}
            </div>
        </div>
    )
}

export default Cart
