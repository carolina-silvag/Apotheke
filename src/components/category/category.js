import React, { Component } from 'react';
import { Col, Collapsible, CollapsibleItem, Collection, CollectionItem } from 'react-materialize';


class Category extends Component {
  constructor() {
    super();
    this.handleSubCategory = this.handleSubCategory.bind(this);
  }

  handleSubCategory(category, subcategory) {
    /*llamar a nuestra data y agregar lo demas*/
    /*const data = booksData(category_data);
    this.setState({ categoryData: data });
    this.props.onUpdateCategoryData(data);*/
    console.log('lo mande para buscar');
  }

  render() {
    return (
      <div  className="Categories">  
        <Collapsible accordion>
          <CollapsibleItem header='Cuidado' icon='filter_drama'>
            <Collection>
              <CollectionItem href='#' className="category" onClick={() => this.handleSubCategory('name','Categoria 1')}>Categoria 1</CollectionItem>
              <CollectionItem href='#' active className="category" onClick={() => this.handleSubCategory('name','Categoria 2')}>Categoria 2</CollectionItem>
              <CollectionItem href='#' className="category" onClick={() => this.handleSubCategory('name','Categoria 3')}>Categoria 3</CollectionItem>
              <CollectionItem href='#' className="category" onClick={() => this.handleSubCategory('name','Categoria 4')}>Categoria 4</CollectionItem>
            </Collection>
          </CollapsibleItem>
          <CollapsibleItem header='Salud' icon='place'>
            <Collection>
              <CollectionItem href='#' className="category" onClick={() => this.handleSubCategory('name2','Categoria 4')}>Categoria 1</CollectionItem>
              <CollectionItem href='#' active className="category" onClick={() => this.handleSubCategory('name2','Categoria 5')}>Categoria 2</CollectionItem>
              <CollectionItem href='#' className="category" onClick={() => this.handleSubCategory('name2','Categoria 6')}>Categoria 3</CollectionItem>
              <CollectionItem href='#' className="category" onClick={() => this.handleSubCategory('name2','Categoria 7')}>Categoria 4</CollectionItem>
            </Collection>
          </CollapsibleItem>
          <CollapsibleItem header='otros' icon='place'>
            <Collection>
              <CollectionItem href='#' className="category" onClick={() => this.handleSubCategory('name3','Categoria 8')}>Categoria 1</CollectionItem>
              <CollectionItem href='#' active className="category" onClick={() => this.handleSubCategory('name3','Categoria 9')}>Categoria 2</CollectionItem>
              <CollectionItem href='#' className="category" onClick={() => this.handleSubCategory('name3','Categoria 10')}>Categoria 3</CollectionItem>
              <CollectionItem href='#' className="category" onClick={() => this.handleSubCategory('name3','Categoria 11')}>Categoria 4</CollectionItem>
            </Collection>
          </CollapsibleItem>
          <CollapsibleItem header='otros 2' icon='whatshot'>
            <Collection>
              <CollectionItem href='#' className="category" onClick={() => this.handleSubCategory('name','Categoria 12')}>Categoria 1</CollectionItem>
              <CollectionItem href='#' active className="category" onClick={() => this.handleSubCategory('name','Categoria 13')}>Categoria 2</CollectionItem>
              <CollectionItem href='#' className="category" onClick={() => this.handleSubCategory('name','Categoria 14')}>Categoria 3</CollectionItem>
              <CollectionItem href='#' className="category" onClick={() => this.handleSubCategory('name','Categoria 15')}>Categoria 4</CollectionItem>
            </Collection>
          </CollapsibleItem>
          <CollapsibleItem header='otros 3' icon='place'>
            <Collection>
              <CollectionItem href='#' className="category" onClick={() => this.handleSubCategory('name','Categoria 16')}>Categoria 1</CollectionItem>
              <CollectionItem href='#' active className="category" onClick={() => this.handleSubCategory('name','Categoria 17')}>Categoria 2</CollectionItem>
              <CollectionItem href='#' className="category" onClick={() => this.handleSubCategory('name','Categoria 18')}>Categoria 3</CollectionItem>
              <CollectionItem href='#' className="category" onClick={() => this.handleSubCategory('name','Categoria 19')}>Categoria 4</CollectionItem>
            </Collection>
          </CollapsibleItem>
        </Collapsible>

      </div>
    );
  }
}

export default Category;