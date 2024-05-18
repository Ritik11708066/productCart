import React, {useState} from 'react'
import './productstyle.css'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../features/appSlice'

const Product = ({ item, page='default' }) => {

    const [addedToCart, setAddedToCart] = useState(false)
    const {products, cart} = useSelector(state => state.app)
    console.log('adding into cart',cart)
    const dispatch = useDispatch()

    const getQuantity = () => {
        return cart.find(it => it.id === item.id).quantity

    }

    const handleProduct = () => {
        dispatch(addToCart(item))
        setAddedToCart(true)
    }

    const handleRemoveProduct = () => {
        if(getQuantity() === 1){
            setAddedToCart(false)
        }
        dispatch(removeFromCart(item))
    }

    return (
        <div 
        className="card"
        style={{flexDirection: 'row'}} 
        >
        <div>
            <img src={item?.thumbnail} alt='product image' className='card-image' />
        </div>
        <div>
            <h2 className="card-title">{item?.title}</h2>
            <p className="card-description">{item?.description}</p>
            <div className="card-footer">
                <span className="card-price">${item?.price}/unit</span>
                {
                    page === 'default' ? (
                        <div>
 {
                    addedToCart ? (
                        <div>
                            <div onClick={handleRemoveProduct}>-</div>
                            <div>{getQuantity()}</div>
                            <div onClick={handleProduct}>+</div>
                        </div>
                    ) : (
                        <button onClick={handleProduct} className="card-button">Add to Cart</button>
                    )
            
                }
                        </div>
                    ) : (
                        <div>
                             <div onClick={handleRemoveProduct}>-</div>
                            <div>{getQuantity()}</div>
                            <div onClick={handleProduct}>+</div>
                        </div>
                    )
                }
            </div>
        </div>
    </div>
    )
}

export default Product
