import './SpellSelect.css';

import React, { Component } from 'react'

export default class SpellSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSpell: ""
    }
  }

  handleChange = (event) => {
    this.setState({ currentSpell: event.target.value });
  }

  render() {
    return (
    <select className="spells-dropdown" value={this.state.currentSpell} onChange={this.handleChange}>
      {this.props.spells.map((spell) => (
        <option value={spell.index} key={spell.index}>{spell.name}</option>
      ))}
    </select>
    )
  }
}



