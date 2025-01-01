import React, { useState } from 'react';
import "../css/HomePage.css";
import OrderPizza from './OrderPizza';
import "../../images/iteration-1-images/logo.svg"
import "../../images/iteration-2-images/icons/1.svg"
import "../../images/iteration-2-images/icons/2.svg"
import "../../images/iteration-2-images/icons/3.svg"
import "../../images/iteration-2-images/icons/4.svg"
import "../../images/iteration-2-images/icons/5.svg"
import "../../images/iteration-2-images/icons/6.svg"
import SuggestionCards from '../components/SuggestionCards';
import Products from '../components/Products';

function HomePage() {
  const [showOrderPizza, setShowOrderPizza] = useState(false);

  if (showOrderPizza) {
    return <OrderPizza />;
  }

  return (
    <div className="home">
      <img src="../../images/iteration-1-images/logo.svg" alt="" />
      <div className="home-text">
      <h4>KOD ACIKTIRIR PİZZA, DOYURUR</h4>
      </div>
      <button data-cy="home-button" className="home-button" onClick={() => setShowOrderPizza(true)}>
        ACIKTIM
      </button>
      <div className="header-nav-buttons">
        <nav>
          <ul><li><img src="../../images/iteration-2-images/icons/1.svg"/>YENİ! Kore</li></ul>
          <ul><li><img src="../../images/iteration-2-images/icons/2.svg"/>Pizza</li></ul>
          <ul><li><img src="../../images/iteration-2-images/icons/3.svg"/>Burger</li></ul>
          <ul><li><img src="../../images/iteration-2-images/icons/4.svg"/>Kızartmalar</li></ul>
          <ul><li><img src="../../images/iteration-2-images/icons/5.svg"/>Fast Food</li></ul>
          <ul><li><img src="../../images/iteration-2-images/icons/6.svg"/>Gazlı İçecek</li></ul>
        </nav>
      </div>
      <SuggestionCards />
      <div className="nav-header">
        <h4>en çok paketlenen menüler</h4>
        <h4>Acıktıran Kodlara Doyuran Lezzetler</h4>
        <nav>
          <ul><li><img src="../../images/iteration-2-images/icons/1.svg"/>Ramen</li></ul>
          <ul><li><img src="../../images/iteration-2-images/icons/2.svg"/>Pizza</li></ul>
          <ul><li><img src="../../images/iteration-2-images/icons/3.svg"/>Burger</li></ul>
          <ul><li><img src="../../images/iteration-2-images/icons/4.svg"/>French Fries</li></ul>
          <ul><li><img src="../../images/iteration-2-images/icons/5.svg"/>Fast Food</li></ul>
          <ul><li><img src="../../images/iteration-2-images/icons/6.svg"/>Soft drinks</li></ul>
        </nav>
      </div>
      <Products />
    </div>
  );
}

export default HomePage;
