import React from 'react'
import OrderButton from './OrderButton'
import '../css/SuggestionCards.css'

function SuggestionCard({ item }) {
  const { name, image, header } = item
  return (
    <article style={{ backgroundImage: `url(${image})` }}>
      <div className='card-texts'>
        {header && <p>{header}</p>}
        <h4>{name}</h4>
        <OrderButton />
      </div>
    </article>
  )
}

export default SuggestionCard