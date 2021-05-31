import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';

export const Layout = ({children}) => {
    return (
      <div>
        <NavMenu />
        <Container className="body-content">
          {children}
          <hr />
        </Container>
      </div>
    );
}
