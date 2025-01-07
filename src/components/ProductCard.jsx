import React from 'react'

function ProductCard({ image, name, rating, review, price }) {
  return (
    <div className="product-card" style={{ backgroundImage: `url(${image})` }}>
      <h6>{name}</h6>
      <div className="card-details">
        <p>{rating}</p>
        <p>{review}</p>
        <p>{price}₺</p>
      </div>
    </div>
  )
}

export default ProductCard