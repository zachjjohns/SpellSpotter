import './CardContainer.css';
import Card from '../Card/Card';
import React from 'react'

export default function CardContainer({ spellBook }) {
  const spellCards = spellBook.map(spell => {
    return (
      <Card
        id={spell.index}
        key={spell.index}
        name={spell.name}
        level={spell.level}
        desc={spell.desc}
        range={spell.range}
        attack_type={spell.attack_type}
      />
    )
  })

  return (
    <section>
      {spellCards}
    </section>
  )
}
