import React from 'react'
import './ItemDetail.css' 

const ItemDetail = ({name, price, img}) => {
  return (
    <div className="itemContainer" >
        <img src={img} alt={name} />
        <h2>{name}</h2>
        <b>USD {price}</b>

    </div>
  )
}

export default ItemDetail