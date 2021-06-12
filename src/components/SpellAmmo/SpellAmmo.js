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
        <h2>Today's Spell Ammo</h2>
        <div className="ammo-wrapper">
          <div className="level-container">
            <p>1st Level</p>
            <p>{this.state.level1}</p>
          </div>
        </div>
      </section>
    )
  }
}
