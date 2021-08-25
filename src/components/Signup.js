import React, { useState } from 'react'
import { useContext } from 'react'
import { Form, Button, FloatingLabel } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom'
import Home from './Home'
import { UserProfile } from '../App'

const Signup = () => {
  const [loading, setLoading] = useState(false)
  const {user, setUser, setToken} = useContext(UserProfile)
  let history = useHistory()
console.log(user)
  
const signupForm = (e) => {
    setUser(
      {...user, [e.target.name]: e.target.value}
    )
  }

  const handleUserSignup = e => {
    e.preventDefault()
    setLoading(true)
    console.log(user)

    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(response => response.json())
      .then(data => {
        setToken(data.insertId)
        history.push('/home')
        
      })
      .catch(err => {
        setLoading(false)
        console.error(err)
      })
  }

  return (
    <>
      <div className="signupforms">
        <h2 className="signup">Sign up!</h2>
    <div className="labelfn">First Name</div>
        <FloatingLabel controlId="floatingInput" className="signup-form">
          <Form.Control type="fname" name="fname" placeholder="first name here" onChange={signupForm} />
        </FloatingLabel>

    <div className="labelln">Last Name</div>
        <FloatingLabel controlId="floatingInput" className="signup-form" >
          <Form.Control type="lname" name="lname" placeholder="last name here"  onChange={signupForm} />
        </FloatingLabel>

    <div className="labelem">Email Address</div>
        <FloatingLabel controlId="floatingInput" className="signup-form" >
          <Form.Control type="email" name="email" placeholder="name@example.com"  onChange={signupForm} />
        </FloatingLabel>

    <div className="labelag">Age</div>
        <FloatingLabel controlId="floatingInput" className="signup-form" >
          <Form.Control type="age" name="age" placeholder="age"  onChange={signupForm} />
        </FloatingLabel>

    <div className="labelpw">Password</div>
        <FloatingLabel controlId="floatingPassword" className="signup-form">
          <Form.Control type="password" name="password" placeholder="Password" onChange={signupForm} />
        </FloatingLabel>
        
        <br/>
          <Button variant="primary" type="submit" onClick={handleUserSignup} setUser={setUser}>
          Sign up!
        </Button>
          
        
      </div>
    </>
  )
}

export default Signup;
