import React from 'react'
import { useDispatch, useSelector } from 'react-redux';


export const OrderPage = () => {

  const products = useSelector((state) => state.products);

  return (
    <div>
      <h1>OrderPage</h1>
      <div>
                <div>
                    {products.map((product) => (
                        <div>
                          <img src={product.image} alt={product.name} />
                          <div>{product.name}</div>
                          <div>{product.brand}</div>
                          <div>{product.price}</div>
                        </div>
                        
                    ))}
                </div>
            </div>
    </div>
  )
}
