/* eslint-env browser*/
/* eslint-env jquery*/

import React, { Component } from 'react';
import styles from './Styles';

const $ = require('jquery');

class App extends Component {
  constructor() {
    super();
    this.state = { docked: false, open: false, sizze: $(window).width() };
  }

  componentWillMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div style={styles.content}>
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default App;
