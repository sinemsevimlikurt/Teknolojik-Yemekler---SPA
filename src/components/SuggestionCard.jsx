import React from 'react'
import OrderButton from './OrderButton'

function SuggestionCard({item}) {
    const {name, image, header} = item
  return (
    <article style={{backgroundImage: `url(${image})`}}>
        <h4>{name}</h4>
        {header &&  <p>{header}</p>}
        <OrderButton />
    </article>
  )
}

export default SuggestionCard