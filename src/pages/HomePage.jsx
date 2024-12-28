import React, { useState } from 'react';
import "../css/HomePage.css";
import OrderPizza from './OrderPizza';
import "../../images/iteration-1-images/logo.svg"

function HomePage() {
  const [showOrderPizza, setShowOrderPizza] = useState(false);

  if (showOrderPizza) {
    return <OrderPizza />;
  }

  return (
    <div className="home">
      <img src="../../images/iteration-1-images/logo.svg" alt="" />
      <div className="home-text">
        <p>KOD ACIKTIRIR<br />PİZZA, DOYURUR</p>
      </div>
      <button className="home-button" onClick={() => setShowOrderPizza(true)}>
        ACIKTIM
      </button>
    </div>
  );
}

export default HomePage;
