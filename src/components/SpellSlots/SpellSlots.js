import './SpellSlots.css';
import React, { Component } from 'react';

export default class SpellSlots extends Component {
  constructor() {
    super()
    this.state = {
      level1: 0,
      level2: 0,
      level3: 0,
      level4: 0,
      level5: 0,
      level6: 0,
      level7: 0,
      level8: 0,
      level9: 0,
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: parseInt(event.target.value, 10) })
  }

  submitSpells = event => {
    event.preventDefault();
    console.log("I happened")
    this.props.history.push("/spellbook")
  }

  render() {
    return (
      <form className="spell-slots-form">
        <h2 className="slots-intro">First, please enter your maximum Spell Slots per Spell Level</h2>
        <div className="slots-container">
          <label htmlFor="level1">1st</label>
          <input 
            type="number" 
            name="level1" 
            min="0" 
            max="4"
            value={this.state.level1}
            onChange={event => this.handleChange(event)}
          />
          <label htmlFor="level2">2nd</label>
          <input 
            type="number" 
            name="level2" 
            min="0" 
            max="4"
            value={this.state.level2}
            onChange={event => this.handleChange(event)}
          />
          <label htmlFor="level3">3rd</label>
          <input 
            type="number" 
            name="level3" 
            min="0" 
            max="4"
            value={this.state.level3}
            onChange={event => this.handleChange(event)}
          />
          <label htmlFor="level4">4th</label>
          <input 
            type="number" 
            name="level4" 
            min="0" 
            max="4"
            value={this.state.level4}
            onChange={event => this.handleChange(event)}
          />
          <label htmlFor="level5">5th</label>
          <input 
            type="number" 
            name="level5" 
            min="0" 
            max="4"
            value={this.state.level5}
            onChange={event => this.handleChange(event)}
          />
          <label htmlFor="level6">6th</label>
          <input 
            type="number" 
            name="level6" 
            min="0" 
            max="4"
            value={this.state.level6}
            onChange={event => this.handleChange(event)}
          />
          <label htmlFor="level7">7th</label>
          <input 
            type="number" 
            name="level7" 
            min="0" 
            max="4"
            value={this.state.level7}
            onChange={event => this.handleChange(event)}
          />
          <label htmlFor="level8">8th</label>
          <input 
            type="number" 
            name="level8" 
            min="0" 
            max="4"
            value={this.state.level8}
            onChange={event => this.handleChange(event)}
          />
          <label htmlFor="level9">9th</label>
          <input 
            type="number" 
            name="level9" 
            min="0" 
            max="4"
            value={this.state.level9}
            onChange={event => this.handleChange(event)}
          />
        </div>
        <div className="submit-wrapper">
          <button
            className="submit-spells"
            onClick={event => this.submitSpells(event)}>
            Submit Spells!
          </button>
        </div>
      </form>
    )
  }
}
