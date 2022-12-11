import React from 'react';
import './menu.scss';

function Menu({items}) {

  return (
    <div className='menu'>
      {items.map(i =>{
        return(
        <div>
          <div>
            <img src={i.icon} alt="Menu Company" />
          </div>
          <p>{i.text}</p>
        </div>
        )
      })}
    </div>
  )
}

export default Menu