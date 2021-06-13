import './Card.css';

import React from 'react'

export default function Card({ id, name, level, desc, range, attack_type }) {
  return (
    <div className="spell-card" id={id}>
      <p className="spell-name">{name}</p>
      <p className="spell-level">{level}</p>
      <p className="spell-desc">{desc}</p>
      <p className="spell-range">{range}</p>
      <p className="spell-attack-type">{attack_type}</p>
    </div>
  )
}
