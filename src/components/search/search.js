import React, { Component } from 'react';
import { Col, Row, Input, NavItem, Icon, Button } from 'react-materialize';
import './search.css'

class Search extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div>
        <Row>
          <Col s={12} className="center-align">
            <Row>
              <Col s={12}>
                <Input className="search" type="text" placeholder="Search" /*label="Search"*/ s={12}/>
              
                <Button type="submit" onClick={this.handleSearch}>Buscar</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Search;