import './SpellSelect.css';

import React from 'react'

export default function SpellSelect({ spells }) {
  return (
    <select className="spells-dropdown">
      {spells.map((spell) => (
        <option value={spell.index}>{spell.name}</option>
      ))}
    </select>
  )
}
