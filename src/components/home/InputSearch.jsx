import React from 'react'
import './styles/inputSearch.css'

const InputSearch = ({inputText, setInputText}) => {
  
  const handleChange = e => {
   setInputText(e.target.value)
  }
  
  return (
    <div className='input__search'>¿Que producto buscas?  
      <input className= 'input__product' value ={inputText} onChange={handleChange} type="text" />
    </div>
  )
}

export default InputSearch