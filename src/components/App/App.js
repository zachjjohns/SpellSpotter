import './App.css';
import {getSpells, getSingleSpell} from '../../APIcalls';
import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spells: [],
    }
  }
  
  render() {
    return (
      <div>
        <h1>Spellz!</h1>
      </div>
    )
  }
}

