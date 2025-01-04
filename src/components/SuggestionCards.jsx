import React from 'react'
import { mainCard, suggestionCardsData } from '../sahteVeri'
import SuggestionCard from './SuggestionCard'

function SuggestionCards() {
  return (
    <div>
        <div className="main-suggestioncard">
           <SuggestionCard item={mainCard}/>
        </div>
        <div className="side-suggestioncard">
           {suggestionCardsData.map((item) => (
            <SuggestionCard item={item} key={item.id}/>
           ))}
        </div>
    </div>
  )
}

export default SuggestionCards