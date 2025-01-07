import React from 'react';
import "../css/HomePage.css";
import "../../images/iteration-1-images/logo.svg"
import "../../images/iteration-2-images/icons/1.svg"
import "../../images/iteration-2-images/icons/2.svg"
import "../../images/iteration-2-images/icons/3.svg"
import "../../images/iteration-2-images/icons/4.svg"
import "../../images/iteration-2-images/icons/5.svg"
import "../../images/iteration-2-images/icons/6.svg"
import SuggestionCards from '../components/SuggestionCards';
import Products from '../components/Products';
import { useHistory } from 'react-router-dom';

function HomePage() {
  const history = useHistory()

  const navigateToOrder = () => {
    history.push("/order")
  }

  return (
    <div className="homepage">
      <div className="home">
        <img src="../../images/iteration-1-images/logo.svg" alt="" />
        <div className="home-text">
          <h4>KOD ACIKTIRIR PİZZA, DOYURUR</h4>
        </div>
        <button data-cy="home-button" className="home-button" onClick={navigateToOrder}>
          ACIKTIM
        </button>
      </div>
      <div className="header-nav-buttons">
        <nav>
          <ul>
            <li><img src="../../images/iteration-2-images/icons/1.svg" /><p>YENİ! Kore</p></li>
            <li><img src="../../images/iteration-2-images/icons/2.svg" /><p>Pizza</p></li>
            <li><img src="../../images/iteration-2-images/icons/3.svg" /><p>Burger</p></li>
            <li><img src="../../images/iteration-2-images/icons/4.svg" /><p>Kızartmalar</p></li>
            <li><img src="../../images/iteration-2-images/icons/5.svg" /><p>Fast Food</p></li>
            <li><img src="../../images/iteration-2-images/icons/6.svg" /><p>Gazlı İçecek</p></li>
          </ul>
        </nav>
      </div>
      <SuggestionCards />
      <div className="nav-header">
        <h4>en çok paketlenen menüler</h4>
        <h4>Acıktıran Kodlara Doyuran Lezzetler</h4>
        <nav className='nav-menu'>
          <ul><li><img src="../../images/iteration-2-images/icons/1.svg" /><p>Ramen</p></li></ul>
          <ul><li><img src="../../images/iteration-2-images/icons/2.svg" /><p>Pizza</p></li></ul>
          <ul><li><img src="../../images/iteration-2-images/icons/3.svg" /><p>Burger</p></li></ul>
          <ul><li><img src="../../images/iteration-2-images/icons/4.svg" /><p>French Fries</p></li></ul>
          <ul><li><img src="../../images/iteration-2-images/icons/5.svg" /><p>Fast Food</p></li></ul>
          <ul><li><img src="../../images/iteration-2-images/icons/6.svg" /><p>Soft drinks</p></li></ul>
        </nav>
      </div>
      <Products />
    </div>
  );
}

export default HomePage;
