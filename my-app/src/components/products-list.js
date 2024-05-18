import React, {useState, useEffect} from 'react'
import { getProducts } from '../features/appSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Product from './product'


const ProductList = () => {

    const {products} = useSelector((state) => state.app)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
    }, [])
  return (
    <div>
      ProductList
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
      }}>

        <div onClick={() => navigate('/cart')}> go to cart</div>

          {products?.map((item) => {
            return (
                <Product item={item}/>
            )
          })}
      </div>
    </div>
  )
}

export default ProductList
