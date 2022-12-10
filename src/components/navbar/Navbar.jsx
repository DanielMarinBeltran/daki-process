import './navbar.scss';
import React from 'react';
import genericLogo from '../../assets/imgs/genericLogo.png';
import shoppingCartLogo from '../../assets/imgs/shopping-cart.svg';
import notificationsLogo from '../../assets/imgs/notifications.svg';
import arrowDown from '../../assets/imgs/chevron.svg';
import Line from '../line/Line';
import Button from '../button/Button';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='left'>
        <img src={genericLogo} alt="Generic Company Logo Company" />
      </div>
      <div className='right'>
        <div>
          <img src={shoppingCartLogo} alt="Shopping Cart Logo Company" />
          <img src={notificationsLogo} alt="Notifications Logo Company" />
        </div>
        <Line />
        <div>
          <p>JL</p>
          <p>James Logan</p>
          <img src={arrowDown} alt="Arrow Down Profile Company" />
        </div>
        <Line />
        <div>
          <Button text='Acciones Rápidas'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar