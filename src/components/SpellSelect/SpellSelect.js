import './SpellSelect.css';

import React, { Component } from 'react'

export default class SpellSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSpell: ""
    }
  }

  render() {
    return (
    <select className="spells-dropdown">
      {this.props.spells.map((spell) => (
        <option value={spell.index}>{spell.name}</option>
      ))}
    </select>
    )
  }
}



