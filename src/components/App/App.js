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

  componentDidMount = async () => {
    try {
      const fetchedSpells = await getSpells();
      this.setState({spells: fetchedSpells.results})
    } catch (error) {
      this.setState({error: "Could not retrieve spells! The Head Wizard probably found the ale again."})
    }
  }

  // setSpellSlots = () => {

  // }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <SpellSlots data={this.state}/>
          </Route>
          <Route path="/spellbook">
            <SpellSelect spells={this.state.spells}/>
          </Route>
        </Switch>
      </div>
    )
  }
}

