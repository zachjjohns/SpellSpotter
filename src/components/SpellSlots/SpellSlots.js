import './SpellSlots.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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
      error: ""
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: parseInt(event.target.value, 10) })
  }

  submitSpells = data => {
    this.props.ammo.level1 = data.level1
    this.props.ammo.level2 = data.level2
    this.props.ammo.level3 = data.level3
    this.props.ammo.level4 = data.level4
    this.props.ammo.level5 = data.level5
    this.props.ammo.level6 = data.level6
    this.props.ammo.level7 = data.level7
    this.props.ammo.level8 = data.level8
    this.props.ammo.level9 = data.level9
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
          <Link to="/spellbook"
            className="submit-spells"
            onClick={() => this.submitSpells(this.state)}>
            Submit Spells!
          </Link>
        </div>
      </form>
    )
  }
}

SpellSlots.propTypes = {
  level1: PropTypes.number,
  level2: PropTypes.number,
  level3: PropTypes.number,
  level4: PropTypes.number,
  level5: PropTypes.number,
  level6: PropTypes.number,
  level7: PropTypes.number,
  level8: PropTypes.number,
  level9: PropTypes.number,
}
