import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import qzone1 from '../../assets/qZone1.png'
import qzone2 from '../../assets/qZone2.png'
import qzone3 from '../../assets/qZone3.png'
import bg from '../../assets/bg.png'

const RightSide = () => {
    return (
        <div>
            <div>
                <h4>Login With</h4>
                <Button className='mb-3 px-5' variant="outline-primary"><FaFacebook /> Login With Google</Button>
                <Button className='px-5' variant="outline-secondary"><FaGithub /> Login With GitHub</Button>
            </div>
            <div className='my-4'>
                <h4>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item className='p-3'><FaFacebook/>  Facebook</ListGroup.Item>
                    <ListGroup.Item className='p-3'><FaTwitter/>  Twitter</ListGroup.Item>
                    <ListGroup.Item className='p-3'><FaInstagram/>  Instagram</ListGroup.Item>
                </ListGroup>
            </div>
         <div className='bg-secondary p-3'>
            <h4>QZone</h4>
            <img src={qzone1} alt="" />
            <img src={qzone2} alt="" />
            <img src={qzone3} alt="" />

         </div>
         <div>
         <img className='px-3' src={bg} alt="" />
         </div>

        </div>
    );
};

export default RightSide;