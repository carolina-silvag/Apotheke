import React, { Component } from 'react';
import Header from '../header/header';
import Search from '../search/search';
import MostView from '../mostView/mostView';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props
    return (
      <div>
        <Search/>
        <MostView data = { data }/>
      </div>
     )

    }
  }

export default Home;