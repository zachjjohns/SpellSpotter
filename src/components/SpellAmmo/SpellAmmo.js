import './SpellAmmo.css';

import React, { Component } from 'react'

export default class SpellAmmo extends Component {
  constructor(props) {
    super(props)
    const {level1, level2, level3, level4, level5, level6, level7, level8, level9} = this.props.ammo
    this.state = {
      level1: level1,
      level2: level2,
      level3: level3,
      level4: level4,
      level5: level5,
      level6: level6,
      level7: level7,
      level8: level8,
      level9: level9,
      error: ""
    }
  }
  
  render() {
    return (
      <section className="ammo-section">
        <h2 className="todays-ammo">Today's Spell Ammo</h2>
        <div className="ammo-wrapper">
          <div className="level-container">
            <p>1st Level</p>
            <p>{this.state.level1}</p>
          </div>
          <div className="level-container">
            <p>2nd Level</p>
            <p>{this.state.level2}</p>
          </div>
          <div className="level-container">
            <p>3rd Level</p>
            <p>{this.state.level3}</p>
          </div>
          <div className="level-container">
            <p>4th Level</p>
            <p>{this.state.level4}</p>
          </div>
          <div className="level-container">
            <p>5th Level</p>
            <p>{this.state.level5}</p>
          </div>
          <div className="level-container">
            <p>6th Level</p>
            <p>{this.state.level6}</p>
          </div>
          <div className="level-container">
            <p>7th Level</p>
            <p>{this.state.level7}</p>
          </div>
          <div className="level-container">
            <p>8th Level</p>
            <p>{this.state.level8}</p>
          </div>
          <div className="level-container">
            <p>9th Level</p>
            <p>{this.state.level9}</p>
          </div>
        </div>
      </section>
    )
  }
}
