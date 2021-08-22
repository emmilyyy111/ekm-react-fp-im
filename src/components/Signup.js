import { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap'
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";



const Signup = () => {
  const [loading, setLoading] = useState(false)
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState('')

    const signupForm = {
      fname: fname,
      lname: lname,
      age: age,
      email: email,
      password: password,
    }

    const handleUserSignup = (e) => {
      e.preventDefault()
      setLoading(true)
      console.log(user)

        fetch('http://34.205.65.154:5000/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupForm),
      })
        .then((response) => {
          setLoading(false)
          return response.json()
        })
        .then((data) => {
          setLoading(false)
          console.log('User added', data)
        })
        .catch((err) => {
          setLoading(false)
          console.error(err)
        })
    }




    return (
      <Router >
      <div className='forms'>
        <h2 className='signup'>Sign up!</h2>
        <div>
        <div className='signup-form'> 
        <Form>

        <Form.Group controlId="formBasicfname">
            <div><Form.Label>First name</Form.Label></div>
            <Form.Control type="name" placeholder="first name" fname={setFname} />
          </Form.Group>

          <Form.Group controlId="formBasiclname">
            <div><Form.Label>Last name</Form.Label></div>
            <Form.Control type="name" placeholder="last name" lname={setLname} />
          </Form.Group>

          <Form.Group controlId="formBasicage">
            <div><Form.Label>Age</Form.Label></div>
            <Form.Control type="age" placeholder="How old are you?" age={setAge} />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <div><Form.Label>Email address</Form.Label></div>
            <Form.Control type="email" placeholder="Enter email" email={setEmail} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <div className="password-label-signup"><Form.Label>Password</Form.Label></div>
            <Form.Control type="password" placeholder="Password" password={setPassword} />
          </Form.Group>
          &nbsp;
          <br/>
          <Button variant="primary" type="submit" 
          onClick={handleUserSignup} user={setUser} >Sign up!</Button>
        </Form>
      </div>
      </div>
      </div>
      </Router>
    )
  };



export default Signup;
