import React, { Component } from 'react';
import { Col, Row, Input, NavItem, Icon, Button } from 'react-materialize';
import './search.css'

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    
  }
   componentWillMount() {
    this.randomize();
  }

  randomize() {
    if (!this.state.text.length) {
      /*fetch(`${url}${name}`, {
        method: 'get'
      })
      .then(data => data.json())
      .then(search_data => {
        const data = booksData(search_data);
        this.setState({ searchData: data });
        this.props.onUpdateBooksData(data);
      })
        .catch(error => console.log(error))
*/
    } else {

      /*fetch(`${url}${this.state.text}`, {
        method: 'get'
      })
      .then(data => data.json())
      .then(search_data => {
        console.log(search_data);
        const data = booksData(search_data);
        this.setState({ searchData: data });
        this.props.onUpdateBooksData(data);
      })
        .catch(error => console.log(error))*/
    }
  }

  handleSearch() {
    event.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text
    };
    this.setState(prevState => ({
      text: ''
    }));
    this.randomize();
  }
  }

  handleChange() {
    this.setState({ text: event.target.value });
  }

  render() {
    return (
      <div>
        <Row>
          <Col s={12} className="center-align">
            <Row>
              <Col s={12}>
                <Input className="search" type="text" placeholder="Search" onChange={this.handleChange} value={this.state.text} /*label="Search"*/ s={12}/>
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