import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Approve, Missing, MissingUrgent, Quantity } from '../Redux/Product.actions';
import "../Styles/OrderPage.style.css";


export const OrderPage = () => {

  const dispatch = useDispatch();

  const products = useSelector((state) => state.products);

  const handleApprove = (id) => {
    dispatch(Approve(id));
  };

  const handleMissing = (id) => {
    dispatch(Missing(id));
  };

  const handleMissingUrgent = (id) => {
    dispatch(MissingUrgent(id));
  };

  const handleQuantity = (id, newQuantity) => {
    dispatch(Quantity(id, newQuantity));
  };

  const total = products.reduce((sum, product) => sum + product.price * product.quantity, 0);


  const BackgroundColor = (status) => {
    switch (status) {
      case 'Approved':
        return '#9ae6b4';
      case 'Missing':
        return '#feb2b2';
      case 'Missing Urgent':
        return 'rgb(255, 20, 20)';
      default:
        return 'transparent';
    }
  };
  return (
    <div>
      {/* <h2>Order Page</h2> */}
      <table className='maintable'>
        <thead className='tablehead'>
          <tr className='tabletr'>
            <th >Image</th>
            <th>Product Name</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className='tablebody'>
          {products.map((product) => (
            <tr key={product.id}>
              <td className='tableimage'>
                <img src={product.image} alt={product.name} />
              </td>
              <td>{product.name}</td>
              <td>{product.brand}</td>
              <td>${product.price}</td>
              <td>
                <select className='tablespan'
                  value={product.quantity}
                  onChange={(e) => handleQuantity(product.id, parseInt(e.target.value, 10))}
                >
                  {[1, 2, 3, 4, 5].map((quantity) => (
                    <option key={quantity} value={quantity}>
                      {quantity}
                    </option>
                  ))}
                </select>
              </td>
              <td>${product.price * product.quantity}</td>
              <td className='tablestatus'>
                <p style={{ backgroundColor: BackgroundColor(product.status), }}>{product.status}</p></td>
              <td>
                <div className='tablespanaction'>
                  <span className='tablespan' onClick={() => handleApprove(product.id)}>
                    ✔
                  </span>{' '}
                  <span className='tablespan' onClick={() => handleMissing(product.id)}>
                    ✖
                  </span>{' '}
                  <span className='tablespan' onClick={() => handleMissingUrgent(product.id)}>
                    missingUrgent
                  </span>{' '}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='maintotal'><h3>Total Amount: {total}</h3></div>
    </div>
  )
}
