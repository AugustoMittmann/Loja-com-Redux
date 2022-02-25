import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Display from './components/Display';
import Produtos from './components/Produtos';

import store from './store';

import './style.css'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Provider store={store}>
          <Produtos />
          <Display />
        </Provider>
      </div>
    );
  }
}

export default App;
