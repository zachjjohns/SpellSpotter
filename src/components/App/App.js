import "./App.css";
import Header from "../Header/Header";
import SpellSlots from "../SpellSlots/SpellSlots";
import SpellAmmo from "../SpellAmmo/SpellAmmo";
import SpellSelect from "../SpellSelect/SpellSelect";
import { getSpells } from "../../APIcalls";
import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spells: [],
      level1: 0,
      level2: 0,
      level3: 0,
      level4: 0,
      level5: 0,
      level6: 0,
      level7: 0,
      level8: 0,
      level9: 0,
      error: "",
    };
  }

  componentDidMount = async () => {
    try {
      const fetchedSpells = await getSpells();
      this.setState({ spells: fetchedSpells.results });
    } catch (error) {
      this.setState({
        error:
          "Could not retrieve spells! The Head Wizard probably found the ale again.",
      });
    }
  };

  render() {
    if (this.state.error) {
      return <h1 className="error-message">{this.state.error}</h1>;
    }

    if (!this.state.error && !this.state.spells.length) {
      return <h1 className="loading">Loading...</h1>;
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <SpellSlots ammo={this.state} />
          </Route>
          <Route path="/spellbook">
            <SpellAmmo ammo={this.state} />
            <SpellSelect spells={this.state.spells} />
          </Route>
          <Route>
            <h2 className="not-found">
              URL Not Found - Click button to return
            </h2>
            <Link to="/" className="return-home">
              Return Home
            </Link>
          </Route>
        </Switch>
      </div>
    );
  }
}
