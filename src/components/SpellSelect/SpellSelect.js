import './SpellSelect.css';
import { getSingleSpell } from '../../APIcalls';
import React, { Component } from 'react'
import CardContainer from '../CardContainer/CardContainer';

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
    this.clearSelect();
    this.checkForValue();
    const grabbedSpell = await getSingleSpell(this.state.currentSpell)
    this.checkForDuplicate();
    this.setState({ spellBook: [...this.state.spellBook, grabbedSpell]})
  }

  clearSelect = () => {
    this.setState({ error: ""})
  }

  checkForValue = () => {
    if (!this.state.currentSpell) {
      this.setState({ error: "Please select a spell to add."})
    }
  }

  checkForDuplicate = () => {
    for (let i = 0; i < this.state.spellBook.length; i++) {
      if (this.state.spellBook[i].index === this.state.currentSpell) {
        this.setState({ error: "You already have this spell!" })
        return
      }
    }
  }

  render() {
    return (
    <form>
      <div className="select-container">
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
      </div>
      <div className="error-wrapper">
        <h3>{this.state.error}</h3>
      </div>
      <div className="spellbook-wrapper">
        <CardContainer spellBook={this.state.spellBook} />
      </div>
    </form>
    )
  }
}



