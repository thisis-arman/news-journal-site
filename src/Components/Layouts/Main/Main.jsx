import React from 'react';
import Footer from '../../Shared/Footer';
import Header from '../../Shared/Header';
import { Col, Container, Row } from 'react-bootstrap';
import NavBar from '../../Shared/NavBar';
import RightSide from '../../Shared/RightSide';
import LeftSide from '../../Shared/LeftSide';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header />

            <Container>
            <NavBar></NavBar>
                <Row>
                    <Col className='p-4' lg={3}>
                       <LeftSide/>
                    </Col>
                    <Col className='' lg={6}>
                       <Outlet/>
                    </Col>
                    <Col  lg={3}>
                       <RightSide/>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default Main;