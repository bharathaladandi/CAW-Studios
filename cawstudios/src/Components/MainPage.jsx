import React from 'react'
import { OrderPage } from './OrderPage'
import { Navbar } from './Navbar'
import '../Styles/MainPage.style.css';


export const MainPage = () => {
  return (
    <div>
      <div><Navbar /></div>
      <div className='maincontainer'>
        <div className='mainorderdiv'>
          Orders {">"} Order32457ABC 
        </div>
        <div className='maincontainersec'>
          <h3>Order 32457ABC</h3>
          <div className='mainfle'>
            <div className='btn1'>Back</div>
            <div className='btn2'>Approve order</div>
          </div>
        </div>
      </div>
      <div><OrderPage /></div>

    </div>

  )
}
