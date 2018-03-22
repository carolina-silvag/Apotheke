import React, { Component } from 'react';
import { Col, Row } from 'react-materialize';
import Header from '../header/header';
import Category from '../category/category';
import Home from '../home/home';

class Body extends Component {
  constructor(prop) {
    super(prop);
    this.handleCategoryData = this.handleCategoryData.bind(this);

    this.state = {
      productData: []
    }
  }

  handleCategoryData(data) {
    console.log('recibido por el padre')
    this.setState({ productData: data });
  }

  render() {
    return (
      <div>
        <Header />
        <Row>
          <Col s={2} m={2} className='grid-example'>
            <Category onUpdateCategoryData={this.handleCategoryData}/>
          </Col>
          <Col s={10} m={10} className='grid-example'>
            <Home data={this.state.productData}/>
          </Col>
        </Row>
    </div>
    )
  }

}

export default Body;