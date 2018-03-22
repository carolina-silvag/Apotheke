import React, { Component } from 'react';
import Navbar from './components/navbar/navbar';
import Footer2 from './components/footer/footer';
import Body from './components/body/body';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Body/>
        <Footer2 />
      </div>
    );
  }
}

export default App;
