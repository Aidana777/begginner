import React, { useState } from 'react'
import { PRODUCTS } from '../../products'
import { Product } from "./Product";
import MyInput from '../../components/input/MyInput'
import './shop.css'
const Shop = () => {
  const [value, setValue] = useState('');

  const fillterProduct = PRODUCTS.filter(prod => {
    return prod.productName.toLowerCase().includes(value.toLowerCase())
  })

  return (
    <div>
      <MyInput type="text" onChange={(event) => setValue(event.target.value)} />
      <div className="shopTitle">
        <h2>Shop</h2>
      </div>
      <div className="products">
        {''}
        {fillterProduct.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  )
}

export default Shop