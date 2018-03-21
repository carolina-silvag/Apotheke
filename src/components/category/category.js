import React, { Component } from 'react';
import { Col, Collapsible, CollapsibleItem, Collection, CollectionItem } from 'react-materialize';


class Category extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div  className="Categories">
        
        <Collapsible accordion>
          <CollapsibleItem header='Cuidado' icon='filter_drama'>
            <Collection>
              <CollectionItem href='#' className="category" onClick={() => this.handleAuthor('Categoria 1')}>Categoria 1</CollectionItem>
              <CollectionItem href='#' active className="category" onClick={() => this.handleAuthor('Categoria 2')}>Categoria 2</CollectionItem>
              <CollectionItem href='#' className="category" onClick={() => this.handleAuthor('Categoria 3')}>Categoria 3</CollectionItem>
              <CollectionItem href='#' className="category" onClick={() => this.handleAuthor('Categoria 4')}>Categoria 4</CollectionItem>
            </Collection>
          </CollapsibleItem>
          <CollapsibleItem header='Salud' icon='place'>
            <Collection>
              <CollectionItem href='#' className="category" onClick={() => this.handleAuthor('Categoria 1')}>Categoria 1</CollectionItem>
              <CollectionItem href='#' active className="category" onClick={() => this.handleAuthor('Categoria 2')}>Categoria 2</CollectionItem>
              <CollectionItem href='#' className="category" onClick={() => this.handleAuthor('Categoria 3')}>Categoria 3</CollectionItem>
              <CollectionItem href='#' className="category" onClick={() => this.handleAuthor('Categoria 4')}>Categoria 4</CollectionItem>
            </Collection>
          </CollapsibleItem>
          <CollapsibleItem header='otros' icon='place'>
            <Collection>
              <CollectionItem href='#' className="category" onClick={() => this.handleAuthor('Categoria 1')}>Categoria 1</CollectionItem>
              <CollectionItem href='#' active className="category" onClick={() => this.handleAuthor('Categoria 2')}>Categoria 2</CollectionItem>
              <CollectionItem href='#' className="category" onClick={() => this.handleAuthor('Categoria 3')}>Categoria 3</CollectionItem>
              <CollectionItem href='#' className="category" onClick={() => this.handleAuthor('Categoria 4')}>Categoria 4</CollectionItem>
            </Collection>
          </CollapsibleItem>
          <CollapsibleItem header='otros 2' icon='whatshot'>
            <Collection>
              <CollectionItem href='#' className="category" onClick={() => this.handleAuthor('Categoria 1')}>Categoria 1</CollectionItem>
              <CollectionItem href='#' active className="category" onClick={() => this.handleAuthor('Categoria 2')}>Categoria 2</CollectionItem>
              <CollectionItem href='#' className="category" onClick={() => this.handleAuthor('Categoria 3')}>Categoria 3</CollectionItem>
              <CollectionItem href='#' className="category" onClick={() => this.handleAuthor('Categoria 4')}>Categoria 4</CollectionItem>
            </Collection>
          </CollapsibleItem>
          <CollapsibleItem header='otros 3' icon='place'>
            <Collection>
              <CollectionItem href='#' className="category" onClick={() => this.handleAuthor('Categoria 1')}>Categoria 1</CollectionItem>
              <CollectionItem href='#' active className="category" onClick={() => this.handleAuthor('Categoria 2')}>Categoria 2</CollectionItem>
              <CollectionItem href='#' className="category" onClick={() => this.handleAuthor('Categoria 3')}>Categoria 3</CollectionItem>
              <CollectionItem href='#' className="category" onClick={() => this.handleAuthor('Categoria 4')}>Categoria 4</CollectionItem>
            </Collection>
          </CollapsibleItem>
        </Collapsible>

      </div>
    );
  }
}

export default Category;