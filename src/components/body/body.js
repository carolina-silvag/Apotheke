import React, { Component } from 'react';
import { Col, Row } from 'react-materialize';
import Category from '../category/category';
import All from '../all/all';

class Body extends Component {
  constructor(prop) {
    super(prop);
    
  }

  render() {
    return (
    <Row>
      <Col s={2} m={2} className='grid-example'>
        <Category/>
      </Col>
      <Col s={10} m={10} className='grid-example'>
        
      </Col>
      
    </Row>
    )
  }

}

export default Body;