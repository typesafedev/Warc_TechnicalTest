import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 

export class ProductView extends Component {
  static displayName = ProductView.name;

  constructor(props) {
    super(props);
    this.state = { product: {}, loading: true };
    ( this.params ) = props.match.params;
  }

  componentDidMount() {
    this.populateProduct();
  }

  renderProduct(product) {
    return (
      <div className="row">
        <div className="col-md-8">
          <h2>{product.title}</h2>
          <img className="product-image" src={product.imagePath} alt={product.title} />
          <div className="price" >
            <span className="price-tag">Price: </span>{product.price}
          </div>
          <p>
            <Link to={`/products/edit/${product.id}`}>
              <button className="btn btn-default" type="button">
                Edit
              </button>
            </Link>
          </p>
        </div>
      </div>
    );
  }

  render() {
    const contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : this.renderProduct(this.state.product);
    
    return (<>{contents}</>);
  }

  async populateProduct() {
    const response = await fetch(`api/products/${this.params.id}`);
    const data = await response.json();
    this.setState({ product: data, loading: false });
  }
}
