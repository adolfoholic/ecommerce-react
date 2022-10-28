import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAllProducts, getProductsByCategory } from '../../store/slices/products.slice'
import './styles/filterCategory.css'

const FilterCategory = () => {

  const [categories, setCategories] = useState()

  useEffect (() => {
    const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/products/categories"
    axios.get(URL)
        .then(res => setCategories(res.data.data.categories))
        .catch(err => console.log(err))
  },[])

  const dispatch = useDispatch()

  const handleFetchCategory = id => {
    if(id){
      //Peticion de filtro por categoria
      dispatch(getProductsByCategory(id))
    }else{
      //Peticion de todos los productos
      dispatch(getAllProducts())
    }
  }

  return (
    <article className='filter__category-article'>
        <h3>Category</h3>
        <ul>
            <li onClick={() => handleFetchCategory()} style={{cursor: 'pointer'}}>All Products</li>
            {
            categories?.map(category => (
                <li onClick={() => handleFetchCategory(category.id)} style={{cursor: 'pointer'}} key={category.id}>
                    {category.name}
                </li>
            ))
            }
        </ul>
    </article>
  )
}

export default FilterCategory