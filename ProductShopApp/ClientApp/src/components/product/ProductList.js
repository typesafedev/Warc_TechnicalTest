import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import { BACKEND_FOR_FRONTEND_HOST } from '../../Constants';

export class ProductList extends Component {
  static displayName = ProductList.name;

  constructor(props) {
    super(props);
    this.state = { products: [], loading: true };
  }

  componentDidMount() {
    this.populateProducts();
  }

  renderProducts(products) {
    return (
      <div className="row">
          {products.map(product =>
            <div className="col-md-4" key={product.id}>
              <h2>{product.title}</h2>
              <img className="product-image" src={`${BACKEND_FOR_FRONTEND_HOST}${product.imagePath}`} alt={product.title}/>
              <div className="price">
                  <span className="price-tag">Price: </span>{product.price}
              </div>
              <p>
                <Link to={`/products/${product.id}`}>
                    <button className="btn btn-default" type="button">
                      View
                    </button>
                </Link>
              </p>
            </div>
          )}
      </div>
    );
  }

  render() {
    const contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : this.renderProducts(this.state.products);
    
    return (<>{contents}</>);
  }

  async populateProducts() {
    const response = await fetch('api/products');
    const data = await response.json();
    this.setState({ products: data, loading: false });
  }
}
