import React from 'react';
import Footer from '../Shared/Footer';

import { Col, Container, Row } from 'react-bootstrap';
import NavBar from '../Shared/NavBar';
import RightSide from '../Shared/RightSide';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header';

const NewsLayout = () => {
  return (
    <div>
      <Header />

      <Container>
        <NavBar></NavBar>
        <Row>
          <Col  lg={9}>
            <Outlet />
          </Col>
          <Col lg={3}>
            <RightSide />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default NewsLayout;
