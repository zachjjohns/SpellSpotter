import './Card.css';
import React from 'react'
import PropTypes from 'prop-types';

export default function Card({ id, name, level, desc, range, casting_time, removeSpell }) {
  
  
  return (
    <div className="spell-card" id={id}>
      <p className="spell-name">{name}</p>
      <p className="spell-level">Level {level}</p>
      <div className="details-row">
        <p className="spell-range">Range: {range}</p>
        <p className="spell-castime">Cast Time: {casting_time}</p>
      </div>
      <p className="spell-desc">{desc}</p>
      <button
        className="remove-spell" 
        onClick={(event) => removeSpell(event, id)}>
        Remove Spell
      </button>
    </div>
  )
}

Card.propTypes = {
  id: PropTypes.string, 
  name: PropTypes.string, 
  level: PropTypes.number, 
  desc: PropTypes.array, 
  range: PropTypes.string, 
  casting_time: PropTypes.string, 
  removeSpell: PropTypes.func
}

