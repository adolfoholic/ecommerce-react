import React from 'react'
import { useDispatch } from 'react-redux'
import { ascendingProducts, descendingProducts } from '../../store/slices/products.slice'
import './styles/orderByPrice.css'

const OrderByPrice = () => {

    const dispatch = useDispatch()

    const handleAscending = () => {
        dispatch(ascendingProducts())
    }

    const handleDescending = () => {
        dispatch(descendingProducts())
    }

  return (

    
    <div className='div__order-price'>
        <h3>Order</h3>
        <button onClick={handleAscending} className ="order__btn">Ascending ⏫</button>
        <button onClick={handleDescending} className ="order__btn">Descending ⏬</button>
    </div>
  )
}

export default OrderByPrice