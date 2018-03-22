import React, { Component } from 'react';
import { Col, Row } from 'react-materialize';
import './header.css'

class Header extends Component {
  constructor() {
    super();
    
  }

  render() {
    return(
      <Row className="banner">
        <Col s={12} m={12} l={12} >
          <h1 className="banner-title">Medical Pet-Shop</h1>
          <p>Cuidando la salud de tu mascota!</p>
        </Col>
      </Row>
    )
  }
}

export default Header;