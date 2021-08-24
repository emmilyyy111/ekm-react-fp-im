import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useHistory } from 'react-router'

const Signin = () => {
  const [email, setEmail] =  useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState('')
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
      setUser(data)
      history.push('/home')
      
    })
    .catch(err => {
      console.error(err)
    })
}
  
  return(
    <div>
        <h2 className='signin'>Sign in!</h2>
        <div>
        <div className='signin-form'> 
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address
            </Form.Label>
            <Form.Control 
            type="email"
            placeholder="Enter email" 
            name='email'
            // setEmail={email}
            onChange={signinForm}
            // rules={[{required: true, message: 'Please enter your email',}]} 
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
            type="password" 
            placeholder="Password" 
            name='password'
            // setPassword={password}
            onChange={signinForm}
            // rules={[{required: true, message: 'Enter password here'}]}
            />
          </Form.Group>
          
          <Button variant="primary" type="submit" onClick={handleUserSignin} user={setUser} >Sign in!</Button>
        </Form>
      </div>
      </div>
      </div>
    )
  }

export default Signin;
