import React, { Component } from 'react';
import { Col, Row } from 'react-materialize';

class MostView extends Component {
  constructor(props) {
    super(props);
    
  }

  renderProduct(data) {
    /*llamar a mi data*/
    console.log('estoy mostrando todo')
  }

  render() {
    const { data } = this.props
    return  <Row>
              {this.renderProduct(data)}
            </Row>
  }
}

export default MostView;