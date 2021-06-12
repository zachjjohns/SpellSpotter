import './App.css';
import Header from '../Header/Header';
import SpellSlots from '../SpellSlots/SpellSlots';
import SpellSelect from '../SpellSelect/SpellSelect';
import { getSpells } from '../../APIcalls';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spells: [],
      error: ""
    }
  }

  componentDidMount = async () => {
    try {
      const fetchedSpells = await getSpells();
      this.setState({spells: fetchedSpells.results})
    } catch (error) {
      this.setState({error: "Could not retrieve spells! The Head Wizard probably found the ale again."})
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/">
            <SpellSlots />
          </Route>
          <Route path="/spellbook">
            <SpellSelect spells={this.state.spells}/>
          </Route>
        </Switch>
      </div>
    )
  }
}

