import { useState, useContext, useRef } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useHistory } from 'react-router'
import { UserProfile } from '../App'
import bcrypt from 'bcryptjs'

const salt = bcrypt.genSaltSync(10)

const Signin = () => {
  
  const [email, setEmail] =  useState('')
  const [password, setPassword] = useState('')
  const {setToken} = useContext(UserProfile)
  // const hashedPassword = bcrypt.hashSync(password, '$2a$10$CwTycUXWue0Thq9StjUM0u')
  let history = useHistory()


  const signinForm = (e) => {

    setEmail(
      {...email, [e.target.name]: e.target.value}
    )
    setPassword(
      {...password, [e.target.name]: e.target.value}
    )
  }
    console.log(email, password)

    const handleUserSignin = e => {
      e.preventDefault()
     

  fetch('http://localhost:5000/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
     email, password,
    }),
  })
    .then(response => response.json())
    .then(data => {
      setToken(data)
      localStorage.setItem('token', data)
      history.push('/home')
      
    })
    .catch(err => {
      console.error(err)
    })
}
  
  return(
    <div className="signinforms">
        <h2 className="signin">Sign in!</h2>
        <div>
        <div className="signin-form"> 
        <Form>
          <Form.Group controlId="formBasicEmail" className="signin-form">
            <Form.Label>Email address
            </Form.Label>
            <Form.Control 
            type="email"
            placeholder="Enter email" 
            name='email'
            onChange={signinForm}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="signin-form" >
            <Form.Label>Password</Form.Label>
            <Form.Control 
            type="password" 
            placeholder="Password" 
            name='password'
            onChange={signinForm}
           
            />
          </Form.Group>
          
          <Button className="signin-btn" variant="primary" type="submit" onClick={handleUserSignin}>Sign in!</Button>
        </Form>
      </div>
      </div>
      </div>
    )
  }

export default Signin;