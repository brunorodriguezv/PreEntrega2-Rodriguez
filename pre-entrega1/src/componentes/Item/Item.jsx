import React from 'react'
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({id, name, price, img}) => {
  return (
    <div className='productCard'>
        <div className='cardImgCont'>
          <img src={img} alt={name} />
        </div>
        <h2>{name}</h2>
        <b>USD {price}</b>
        <Link to={`/item/${id}`} className='cardBtnCont'>

          <div className='cardBtn'>
              <button>Ver más</button>
          </div>
        
        </Link>
        
    </div>
  )
}

export default Item