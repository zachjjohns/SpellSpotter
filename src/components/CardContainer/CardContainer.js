import './CardContainer.css';
import Card from '../Card/Card';
import React from 'react';
import PropTypes from 'prop-types';

export default function CardContainer({ spellBook, removeSpell }) {
  const spellCards = spellBook.map(spell => {
    return (
      <Card
        id={spell.index}
        key={spell.index}
        name={spell.name}
        level={spell.level}
        desc={spell.desc}
        range={spell.range}
        casting_time={spell.casting_time}
        removeSpell={removeSpell}
      />
    )
  })

  return (
    <section className="spellbook-container">
      {spellCards}
    </section>
  )
}

CardContainer.propTypes = {
  spellBook: PropTypes.array,
  removeSpell: PropTypes.func
}