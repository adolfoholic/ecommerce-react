import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardProduct from '../home/CardProduct'

const SimilarProducts = ({product}) => {

  const [categories, setCategories] = useState()
  const [idCategory, setIdCategory] = useState()
  const [SimilarProducts, setSimilarProducts] = useState()

  useEffect(() => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/products/categories'
    axios.get(URL)
        .then(res => setCategories(res.data.data.categories))
        .catch(err => console.log(err))    
  },[])

  useEffect(() => {
    if(categories && product){
      const cb = category => category.name === product.category
      setIdCategory(categories.filter(cb)[0].id)
    }
  },[categories, product])
  

  useEffect(() => {
    if(idCategory){
      const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products?category=${idCategory}`
      axios.get(URL)
        .then(res => setSimilarProducts(res.data.data.products))
        .catch(err => console.log(err))
    }
   
  },[idCategory])

  console.log(product, SimilarProducts)

  return (
    <div>
      <h2>Discover Similar products</h2>
      <div>
        {
          SimilarProducts?.map(prod => {
            if(product.id !== prod.id){
                return <CardProduct key={prod.id} product={prod}/>
            }
          })
        }
      </div>
    </div>
  )
}

export default SimilarProducts