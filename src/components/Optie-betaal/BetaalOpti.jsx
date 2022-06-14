<<<<<<< HEAD:food-app/src/components/Optie-betaal/BetaalOpti.jsx
import React from 'react'
import bancard from '../assets/img/foto/bancontact.png'
import mastercard from '../assets/img/foto/mastercard.png'
import paypal from '../assets/img/foto/paypal.jpg'
import visa from '../assets/img/foto/visa.png'
function BetaalOpti() {
  return (
    
    <div className='betaal'>
      <ul className='betaal-list'>
        <li className='betaal-lis'>
          <img src={visa} alt="" />
          <input type="radio" name="" id="" value=""/>
        </li>
        <li>
          <img src={mastercard} alt="" />
          <input type="radio" name="" id="" value=""/>
        </li>
        <li>
          <img src={bancard} alt="" />
          <input type="radio" name="" id="" value=""/>
        </li>
        <li>
          <img src={paypal} alt="" />
          <input type="radio" name="" id="" value=""/>
        </li>
      </ul>
      <div className='betaal-form'>

      </div>
    </div>
  )
}

=======
import React from 'react'
import bancard from '../assets/img/foto/bancontact.png'
import mastercard from '../assets/img/foto/mastercard.png'
import paypal from '../assets/img/foto/paypal.jpg'
import visa from '../assets/img/foto/visa.png'
function BetaalOpti() {
  return (
    
    <div className='betaal'>
      <ul className='betaal-list'>
        <li className='betaal-lis'>
          <img src={visa} alt="" />
          <input type="radio" name="" id="" value=""/>
        </li>
        <li>
          <img src={mastercard} alt="" />
          <input type="radio" name="" id="" value=""/>
        </li>
        <li>
          <img src={bancard} alt="" />
          <input type="radio" name="" id="" value=""/>
        </li>
        <li>
          <img src={paypal} alt="" />
          <input type="radio" name="" id="" value=""/>
        </li>
      </ul>
    </div>
  )
}

>>>>>>> ba2029d322e4ceb0622457fb6bbf66b1a7788b5f:src/components/Optie-betaal/BetaalOpti.jsx
export  {BetaalOpti} ;