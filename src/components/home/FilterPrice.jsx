import React from 'react'
import './styles/filterPrice.css'

const FilterPrice = ({setFilterByPrice}) => {

  const handleSubmit = e => {
    e.preventDefault()
    const from = +e.target.from.value
    const to = +e.target.to.value
    const obj = {
      from: from,
      to: to !== 0 ? to : Infinity
    }
    setFilterByPrice(obj)
  }

  return (
    <form className='filter__price-form' onSubmit={handleSubmit}>
      <h3>Price</h3>
      <div>
        <label className='label__price' htmlFor="from">From</label>
        <input className='input__from' type="number" id='from' />
      </div>
      <div>
        <label className='label__price' htmlFor="to">To</label>
        <input className='input__to' type="number" id='to' />
      </div>
      <button className='filter-price__btn'>Filter</button>
    </form>
  )
}

export default FilterPrice
