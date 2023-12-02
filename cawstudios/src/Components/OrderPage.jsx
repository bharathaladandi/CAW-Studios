import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Approve, Missing, MissingUrgent } from '../Redux/Product.actions';

export const OrderPage = () => {

  const dispatch = useDispatch();

  const products = useSelector((state) => state.products);


  const handleApprove = (id) => {
    dispatch(Approve(id));
  };

  const handleMarkMissing = (id) => {
    dispatch(Missing(id));
  };

  const handleMarkMissingUrgent = (id) => {
    dispatch(MissingUrgent(id));
  };

  return (
    <div>
      <h1>OrderPage</h1>
      <div>
        <div>
          {products.map((product) => (
            <div key={product.id}>
              <img src={product.image} alt={product.name} />
              <div>{product.name}</div>
              <div>{product.brand}</div>
              <div>{product.price}</div>
              <div>{product.status}</div>
              <div>
                <span onClick={() => handleApprove(product.id)} style={{ cursor: 'pointer' }}>
                  ✔
                </span>{' '}
                <span onClick={() => handleMarkMissing(product.id)} style={{ cursor: 'pointer' }}>
                  ✖
                </span>{' '}
                <span onClick={() => handleMarkMissingUrgent(product.id)} style={{ cursor: 'pointer' }}>
                  missingUrgent
                </span>{' '}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
