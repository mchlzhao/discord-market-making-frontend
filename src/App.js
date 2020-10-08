import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import Accounts from './components/Accounts';
import Markets from './components/Markets';
import Navigation from './components/Navigation';

class App extends Component {
  state = {
    accounts: [],
    instruments: []
  };

  getInfo() {
    fetch('http://115.70.113.222:5000/info')
      .then(res => res.json())
      .then((data) => {
        data.accounts.sort((a, b) => {
          if (a.balance > b.balance) return -1;
          if (a.balance < b.balance) return 1;
          return 0;
        });
        data.instruments.sort((a, b) => {
          if (a.display_order < b.display_order) return -1;
          if (a.display_order > b.display_order) return 1;
          return 0;
        });
        data.instruments.map(instrument => {
          instrument.sell_orders.reverse();
          return instrument;
        });
        this.setState({
          accounts: data.accounts,
          instruments: data.instruments
        });
      })
      .catch(console.log)
  }

  componentDidMount() {
    this.getInfo()
    this.interval = setInterval(() => this.getInfo(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Navigation />
          <Switch>
            <Route path="/" exact component={() => <Markets instruments = {this.state.instruments} />} />
            <Route path="/accounts" exact component={() => <Accounts accounts = {this.state.accounts}
              instruments = {this.state.instruments} />} />
          </Switch>
        </Router>
      </div>
    )

    /*
    return (
      <div className="container">
        <div className="row">
          {this.state.instruments.map((instrument) => (
            <OrderBook key = {instrument.id} display_order = {instrument.display_order} description = {instrument.desc} 
              buy_orders = {instrument.buy_orders} sell_orders = {instrument.sell_orders} />
          ))}
        </div>
        <Accounts accounts = {this.state.accounts} instruments = {this.state.instruments} />
      </div>
    )
    */
  }
}

export default App;
