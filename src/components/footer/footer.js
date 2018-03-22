import React, { Component } from 'react';
import { Footer } from 'react-materialize';
import './footer.css';

class Footer2 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Footer copyrights="&copy 2015 Copyright Text"
        moreLinks={
          <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
        }
        links={
          <ul>
            <li><a className="grey-text text-lighten-3" href="#!"></a></li>
            <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
            <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
            <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
          </ul>
        }
        className='example'
      >
        <h5 className="white-text">Medical Pet Shop</h5>
        <p className="grey-text text-lighten-4">"Cuida la salud de tus mascotas"</p>
      </Footer>

    )
  }
}

export default Footer2;