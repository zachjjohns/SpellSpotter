import './Card.css';

import React from 'react'

export default function Card({ id, name, level, desc, range, casting_time }) {
  return (
    <div className="spell-card" id={id}>
      <p className="spell-name">{name}</p>
      <div className="details-row">
        <p className="spell-level">Level {level}</p>
        <p className="spell-range">Range: {range}</p>
        <p className="spell-castime">Cast Time: {casting_time}</p>
      </div>
      <p className="spell-desc">{desc}</p>
    </div>
  )
}
