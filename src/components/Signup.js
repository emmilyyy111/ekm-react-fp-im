import React, { useState } from 'react'
import { Form, Button, FloatingLabel } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom'
import Home from './Home'


const Signup = () => {
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState(null)
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
      .then(response => {
        setLoading(false)
        return response.json()
      })
      .then(data => {
        setUser(data)
        history.push('/home')
        
      })
      .catch(err => {
        setLoading(false)
        console.error(err)
      })
  }

  return (
    <>
      <div className="forms">
        <h2 className="signup">Sign up!</h2>
        <FloatingLabel controlId="floatingInput" label="First Name" className="mb-3">
          <Form.Control type="fname" name="fname" placeholder="first name here" onChange={signupForm} />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Last Name" className="mb-3" >
          <Form.Control type="lname" name="lname" placeholder="last name here"  onChange={signupForm} />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3" >
          <Form.Control type="email" name="email" placeholder="name@example.com"  onChange={signupForm} />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="How old are you?" className="mb-3" >
          <Form.Control type="age" name="age" placeholder="age"  onChange={signupForm} />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control type="password" name="password" placeholder="Password" onChange={signupForm} />
        </FloatingLabel>
          <Button variant="primary" type="submit" onClick={handleUserSignup} user={setUser}>
          Sign up!
        </Button>
          
        
      </div>
    </>
  )
}

export default Signup;
