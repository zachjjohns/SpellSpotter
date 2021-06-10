import './SpellSlots.css';
import React, { Component } from 'react'

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
  
  render() {
    return (
      <div className="spell-slots-container">
        <h2 className="slots-intro">First, please enter your maximum Spell Slots per Spell Level</h2>
        <label htmlFor="level1">1st</label>
        <input type="number" id="level1" min="0" max="4" />
        <label htmlFor="level2">2nd</label>
        <input type="number" id="level2" min="0" max="4" />
        <label htmlFor="level3">3rd</label>
        <input type="number" id="level3" min="0" max="4" />
        <label htmlFor="level4">4th</label>
        <input type="number" id="level4" min="0" max="4" />
        <label htmlFor="level5">5th</label>
        <input type="number" id="level5" min="0" max="4" />
        <label htmlFor="level6">6th</label>
        <input type="number" id="level6" min="0" max="4" />
        <label htmlFor="level7">7th</label>
        <input type="number" id="level7" min="0" max="4" />
        <label htmlFor="level8">8th</label>
        <input type="number" id="level8" min="0" max="4" />
        <label htmlFor="level9">9th</label>
        <input type="number" id="level9" min="0" max="4" />
      </div>
    )
  }
}
