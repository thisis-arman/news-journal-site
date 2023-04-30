import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';

const Register = () => {
    const {createUser} =useContext(AuthContext)


    const handleRegister =event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password)
        createUser(email,password)
            .then((result)=>{
                const createdUser =result.user;
                console.log(createdUser)
            })
            .catch((error)=>{
                console.log(error.message)
            })
        
    }
    return (
        <Container>
      <NavBar />
      <Form onSubmit={handleRegister} className="w-25 mx-auto my-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name='name' placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo Url</Form.Label>
          <Form.Control type="text" name='photoUrl' placeholder="Photo url" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" />
        </Form.Group><br />
        <Form.Text className="text-muted my-0">
          will show error message
        </Form.Text>
        <br />
        <Button variant="primary" type="submit">
          Register
        </Button> <br />
        <Form.Text className="text-muted">
          Already have an account ? <Link to='/login'>Login</Link>
        
        </Form.Text>
      </Form>
    </Container>
    );
};

export default Register;