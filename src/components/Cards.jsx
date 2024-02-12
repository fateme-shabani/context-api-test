import React from 'react'

const Cards = ({product}) => {
  return (
    <div>
        <h4>{product.name}</h4>
        <h4>{product.price}</h4>

    </div>
  )
}

export default Cards