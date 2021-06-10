import './App.css';
import Header from '../Header/Header';
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
      <Header />
    )
  }
}

