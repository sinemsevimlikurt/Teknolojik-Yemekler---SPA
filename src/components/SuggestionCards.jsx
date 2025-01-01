import React from 'react'
import { mainCard, suggestionCards } from '../sahteVeri'
import SuggestionCard from './SuggestionCard'

function SuggestionCards() {
  return (
    <div>
        <div className="main-suggestioncard">
           <SuggestionCard item={mainCard}/>
        </div>
        <div className="side-suggestioncard">
           {suggestionCards.map((item) => (
            <SuggestionCard item={item} key={item.id}/>
           ))}
        </div>
    </div>
  )
}

export default SuggestionCards