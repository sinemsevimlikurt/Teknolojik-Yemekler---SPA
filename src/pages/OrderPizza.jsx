import React, { useState, useEffect } from "react";
import axios from "axios";
import { data } from "../sahteVeri.js";
import Success from "./Success.jsx";
import "../css/OrderPizza.css"
import "../../images/iteration-1-images/logo.svg" 

function OrderPizza() {
  const { name, price, description, rating } = data[5];
  const [size, setSize] = useState("Orta");
  const [dough, setDough] = useState("İnce");
  const [extras, setExtras] = useState([]);
  const [note, setNote] = useState("");
  const [piece, setPiece] = useState(1);
  const [total, setTotal] = useState(0);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isOrderSuccess, setIsOrderSuccess] = useState(false);
  const [userName, setUserName] = useState("");

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleDoughChange = (event) => {
    setDough(event.target.value);
  };

  
  const handleExtrasChange = (event) => {
    const selectedExtra = event.target.id;
  
    if (event.target.checked) {
      if (extras.length >= 10) {
        alert("En fazla 10 malzeme seçebilirsiniz.");
        event.target.checked = false;
        return; 
      }
      setExtras((prevExtras) => [...prevExtras, selectedExtra]);
    } else {
      setExtras((prevExtras) => prevExtras.filter((extra) => extra !== selectedExtra));
    }
  };
  


  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  const handlePieceChange = (action) => {
    setPiece((prevPiece) => {
      const newPiece = action === "increment" ? prevPiece + 1 : prevPiece - 1;
      return Math.max(1, newPiece);
    });
  };

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isFormValid) return;

    const orderData = {
      name,
      size,
      dough,
      extras,
      note,
      piece,
      total,
    };

    try {
      const response = await axios.post("https://reqres.in/api/pizza", orderData);
      console.log("Sipariş Özeti:", response.data);
      setIsOrderSuccess(true);
    } catch (error) {
      console.error("Sipariş başarısız:", error);
    }
  };

  useEffect(() => {
    const isValid = size && dough && piece > 0;
    setIsFormValid(isValid);
  }, [size, dough, piece]);

  useEffect(() => {
    const totalPrice = extras.length * 5 + parseFloat(price) * piece;
    setTotal(totalPrice);
  }, [extras, price, piece]);
  
    if (isOrderSuccess) {
    return <Success />;
  }

  return (
    <div>
      <header>
      <img src="../../images/iteration-1-images/logo.svg" alt="" />
        <div className="order-header-buttons">
        <button>Anasayfa  -</button>
        <button>Seçenekler  -</button>
        <button>Sipariş Oluştur</button>
        </div>
      </header>
      <main>
      <div>
        <h2>{name}</h2>
        <div className="pizza-details">
        <p style={{fontWeight: "bold"}}>{price} ₺</p>
        <p>{rating} / 5</p>
        </div>
        <p>{description}</p>
      </div>

      <form onSubmit={handleSubmit}>
      <section className="pizza-options">
        <fieldset>
          <legend>Boyut Seç</legend>
          <div>
            <input
              onChange={handleSizeChange}
              type="radio"
              name="boyut"
              value="kucuk"
              id="kucuk"
            />
            <label htmlFor="kucuk">Küçük</label>
          </div>
          <div>
            <input
              onChange={handleSizeChange}
              type="radio"
              name="boyut"
              value="orta"
              id="orta"
            />
            <label htmlFor="orta">Orta</label>
          </div>
          <div>
            <input
              onChange={handleSizeChange}
              type="radio"
              name="boyut"
              value="buyuk"
              id="buyuk"
            />
            <label htmlFor="buyuk">Büyük</label>
          </div>
        </fieldset>

        <fieldset>
          <legend>Hamur Seç</legend>
          <select onChange={handleDoughChange} name="hamur">
            <option value="ince">İnce</option>
            <option value="normal">Normal</option>
            <option value="kalin">Kalın</option>
          </select>
        </fieldset>
        </section>
        <fieldset className="checkbox">
          <legend>Ek Malzemeler (en az 4 malzeme seçmelisiniz)</legend>
          {[
            "Pepperoni",
            "Sosis",
            "Kanada Jambonu",
            "Tavuk Izgara",
            "Soğan",
            "Domates",
            "Mısır",
            "Sucuk",
            "Jalepeno",
            "Sarımsak",
            "Biber",
            "Ananas",
            "Kabak",
          ].map((malzeme) => (
            <div className="extras" key={malzeme}>
              <input onChange={handleExtrasChange} type="checkbox" id={malzeme} data-cy="checkboxes"/>
              <label htmlFor={malzeme}>{malzeme}</label>
            </div>
          ))}
        </fieldset>
         
        <fieldset>
  <legend>Adınız</legend>
  <input
    type="text"
    placeholder="Adınız... (zorunlu*)"
    value={userName}
    onChange={handleUserNameChange}
    style={{ width: "50%" }}
    data-cy="input-username"
  />
  <label
    htmlFor="note"
    style={{
      display: "block",
      marginTop: "10px",
      fontWeight: "bold",
    }}
  >
    Sipariş Notu
  </label>
  <textarea
    id="note"
    onChange={handleNoteChange}
    placeholder="Siparişe eklemek istediğiniz bir not var mı?"
    rows="5"
    cols="50"
    data-cy="textarea-order-note"
  />
</fieldset>


        <section className="order">
        <fieldset>
          <legend>Adet</legend>
          <div className="piece-button">
          <button type="button" onClick={() => handlePieceChange("decrement")}>-</button>
          <span>  {piece}  </span>
          <button type="button" onClick={() => handlePieceChange("increment")}>+</button>
          </div>
        </fieldset>
          <section className="info">
        <fieldset>
          <legend>Sipariş Toplamı</legend>
          <p>Ek Malzemeler: {extras.length * 5} ₺</p>
          <p style={{color: "red", fontWeight:"bold"}}>Toplam: {total} ₺</p>
        </fieldset>

        <button className="submit-button" type="submit" disabled={!isFormValid || extras.length < 4 || userName.length < 3} data-cy="submit-button"><p>SİPARİŞ VER</p></button>
        </section>
        </section>
      </form>
      </main>
    </div>
    
  )
}

export default OrderPizza;
