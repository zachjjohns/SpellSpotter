import './SpellSelect.css';
import { getSingleSpell } from '../../APIcalls';
import React, { Component } from 'react'

export default class SpellSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSpell: "",
      spellBook: []
    }
  }

  handleChange = (event) => {
    this.setState({ currentSpell: event.target.value });
  }

  addSpell = async (event) => {
    event.preventDefault();
    const grabbedSpell = await getSingleSpell(this.state.currentSpell)
    this.setState({ spellBook: [...this.state.spellBook, grabbedSpell]})
    console.log(this.state.spellBook)
  }

  render() {
    return (
    <>
      <select className="spells-dropdown" value={this.state.currentSpell} onChange={event => this.handleChange(event)}>
        {this.props.spells.map((spell) => (
          <option value={spell.index} key={spell.index}>{spell.name}</option>
        ))}
      </select>
      <button
        className="add-spell-button"
        onClick={event => this.addSpell(event)}>Add to Spell Book</button>
    </>
    )
  }
}



