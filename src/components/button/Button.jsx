import React from 'react'
import './button.scss';
import arrowRight from '../../assets/imgs/chevron_right.svg'

function Button({type, text}) {
  return (
    <button className='button' type={type}>
      <p>{text}</p>
      <img src={arrowRight} alt="Arrow Right Company" />
    </button>
  )
}

export default Button