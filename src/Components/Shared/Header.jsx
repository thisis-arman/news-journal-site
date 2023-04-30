import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";



const Header = () => {
    return (
        <Container className='my-4'>
        <div className='text-center'>
            <img src={logo} alt="logo-image" />
            <p>Journalism witout Fear and favour</p>
            <p>{moment().format("dddd, MMMM D YYYY ")}</p>
           
           
        </div>
         <div className='d-flex p-2 px-3' style={{backgroundColor:'light'}} variant="light">
         <Button className='px-5 py-0 fs-4' variant="danger">Latest</Button>
         <Marquee>
         <p className='fs-5'>A movie about the Boston Marathon bombing inspired a Ukrainian soldier who had lost his legs. | A reader asks the magazine’s Ethicist columnist what to do after his wife secretly called him a loser.</p>
         </Marquee>
         </div>
         </Container>
         
    );
};

export default Header;