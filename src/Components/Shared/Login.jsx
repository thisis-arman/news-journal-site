import React, { useContext, useState } from "react";
import NavBar from "./NavBar";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

const Login = () => {
    
    const [error,setError] =useState('')
    const [success, setSuccess] = useState('')

    const {signIn} =useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogin =(event)=>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email,password)
            .then(result =>{
                const loggedUser = result.user;
               
                console.log(loggedUser)
                navigate('/category/0')

            })
            .catch(error=>{
                console.log(error)
            })

    }
  return (
    <Container>
      <NavBar />
      <Form onSubmit={handleLogin} className="w-25 mx-auto my-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" />
        </Form.Group>
        <Form.Text className="text-muted">
          will show error message
        </Form.Text>

        <Button variant="primary" type="submit">
          Login
        </Button> <br />
        <Form.Text className="text-muted">
          Don't have an account ? <Link to='/register'>Register</Link>
        
        </Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
