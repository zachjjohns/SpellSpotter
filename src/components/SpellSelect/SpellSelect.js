import './SpellSelect.css';
import { getSingleSpell } from '../../APIcalls';
import React, { Component } from 'react'

export default class SpellSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSpell: "",
      spellBook: [],
      error: ""
    }
  }

  handleChange = (event) => {
    this.setState({ currentSpell: event.target.value });
  }

  addSpell = async (event) => {
    event.preventDefault();
    const grabbedSpell = await getSingleSpell(this.state.currentSpell)
    for (let i = 0; i < this.state.spellBook.length; i++) {
      if (this.state.spellBook[i].index === this.state.currentSpell) {
        this.setState({ error: "You already have this spell!" })
        return
      }
    }
    this.setState({ spellBook: [...this.state.spellBook, grabbedSpell]})
  }

  render() {
    return (
    <>
      <select className="spells-dropdown" value={this.state.currentSpell} onChange={event => this.handleChange(event)}>
        <option value="" defaultValue="selected" disabled hidden>Select Your Spells</option>
        {this.props.spells.map((spell) => (
          <option value={spell.index} key={spell.index}>{spell.name}</option>
        ))}
      </select>
      <button
        className="add-spell-button"
        onClick={event => this.addSpell(event)}>Add to Spell Book
      </button>
      <h3>{this.state.error}</h3>
    </>
    )
  }
}



