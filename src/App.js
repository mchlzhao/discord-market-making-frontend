import React, { Component } from 'react';

import './App.css';
import Accounts from './components/accounts';
import OrderBook from './components/orderBook';

class App extends Component {
  state = {
    accounts: [],
    instruments: []
  };

  getInfo() {
    fetch('http://192.168.20.30:5000/info')
      .then(res => res.json())
      .then((data) => {
        data.accounts.sort((a, b) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        });
        data.instruments.sort((a, b) => {
          if (a.display_order < b.display_order) return -1;
          if (a.display_order > b.display_order) return 1;
          return 0;
        })
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
  }
}

export default App;
