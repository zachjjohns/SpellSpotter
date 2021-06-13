import './SpellSelect.css';
import { getSingleSpell } from '../../APIcalls';
import React, { Component } from 'react'
import CardContainer from '../CardContainer/CardContainer';
import Proptypes from 'prop-types';

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
    this.setState({ error: ""})
    if (!this.state.currentSpell) {
      this.setState({ error: "Please select a spell to add."})
      return
    }
    for (let i = 0; i < this.state.spellBook.length; i++) {
      if (this.state.spellBook[i].index === this.state.currentSpell) {
        this.setState({ error: "You already have this spell!" })
        return
      }
    }
    const grabbedSpell = await getSingleSpell(this.state.currentSpell)
    this.setState({ spellBook: [...this.state.spellBook, grabbedSpell]})
  }

  render() {
    return (
      <form>
      <h3 className="your-spellbook">Add Your Spells Here!</h3>
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
      <p className="spell-note">Note: Only contains spells from original game (no expansions)</p>
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

SpellSelect.propTypes = {
  spells: PropTypes.array,
  
}



