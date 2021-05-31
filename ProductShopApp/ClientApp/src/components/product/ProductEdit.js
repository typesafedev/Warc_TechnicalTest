import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export class ProductEdit extends Component {
  static displayName = ProductEdit.name;

  constructor(props) {
    super(props);
    this.state = { product: {}, loading: true, saved: false };
    this.params = props.match.params;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleImagePathChange = this.handleImagePathChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
  }

  componentDidMount() {
    this.populateProduct();
  }

  renderProduct(product) {
    return (
      <>
        <h1>Edit product</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="row form-group">
            <div className="col-md-4">
              <label>{"Id"}</label>
            </div>
            <div className="col-md-8">
              <input type="text" value={product.id} className="form-control" readOnly />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-md-4">
              <label>{"Title"}</label>
            </div>
            <div className="col-md-8">
              <input type="text" defaultValue={product.title} className="form-control" onChange={this.handleTitleChange} />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-md-4">
              <label>{"ImagePath"}</label>
            </div>
            <div className="col-md-8">
              <input type="text" defaultValue={product.imagePath} className="form-control" onChange={this.handleImagePathChange} />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-md-4">
              <label>{"Price"}</label>
            </div>
            <div className="col-md-8">
              <input type="text" defaultValue={product.price} className="form-control" onChange={this.handlePriceChange} />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-md-4">
              <label>{"Description"}</label>
            </div>
            <div className="col-md-8">
              <input type="text" defaultValue={product.description} className="form-control" onChange={this.handleDescriptionChange} />
            </div>
          </div>
          <div className="row form-group">
            <input type="submit" value="Save" onSubmit={this.handleSubmit}/>
          </div>
        </form>
      </>
    );
  }

  render() {
    const contents = this.state.loading ? (
      <p>
        <em>Loading...</em>
      </p>
    ) : (
      this.renderProduct(this.state.product)
    );

    if (this.state.saved) {
      return <Redirect to={`/products/${this.params.id}`} />;
    }

    return <>{contents}</>;
  }

  async populateProduct() {
    const response = await fetch(`api/products/${this.params.id}`);
    const data = await response.json();
    this.setState({ product: data, loading: false });
  }

  handleTitleChange(event) {
    this.setState({
      product: { ...this.state.product, title: event.target.value },
      loading: this.state.loading,
    });
  }

  handleImagePathChange(event) {
    this.setState({
      product: { ...this.state.product, imagePath: event.target.value },
      loading: this.state.loading,
    });
  }

  handlePriceChange(event) {
    this.setState({
      product: { ...this.state.product, price: event.target.value },
      loading: this.state.loading,
    });
  }

  handleDescriptionChange(event) {
    this.setState({
      product: { ...this.state.product, description: event.target.value },
      loading: this.state.loading,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    await fetch('api/products', {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.product),
    });

    this.setState({...this.state, saved: true});
  }
}
