import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { ProductList, ProductView, ProductEdit } from './components/product';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route path='/' exact component={ProductList} />
        <Route path='/home' exact component={Home} />
        <Route path='/products' exact component={ProductList} />
        <Route path='/products/:id' exact component={ProductView} />
        <Route path='/products/edit/:id' exact component={ProductEdit} />
      </Layout>
    );
  }
}
