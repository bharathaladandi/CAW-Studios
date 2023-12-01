import React from 'react'
import { OrderPage } from './OrderPage'
import { Navbar } from './Navbar'

export const MainPage = () => {
  return (
    <div>
      <div><Navbar /></div>
        <h1>MainPage</h1>
        <OrderPage />
    </div>
    
  )
}
