import React from 'react'
import ProductCard from './ProductCard'
import image1 from "../../images/iteration-2-images/pictures/food-1.png"
import image2 from "../../images/iteration-2-images/pictures/food-2.png"
import image3 from "../../images/iteration-2-images/pictures/food-3.png"
import "../css/Products.css"
function Products() {
  return (
    <div className="products">
      <ProductCard image={image1} name={"Terminal Pizza"} rating={4.8} review={200} price={60} />
      <ProductCard image={image2} name={"Position Absolute Acı Pizza"} rating={4.9} review={928} price={85} />
      <ProductCard image={image3} name={"useEffect Tavuklu Burger"} rating={4.8} review={435} price={75} />
    </div>
  )
}

export default Products