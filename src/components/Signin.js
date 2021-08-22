import { Button, Form } from 'react-bootstrap'

const Signin = () => {
  const handleSignin = () => {
    console.log('Signing in...')
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
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          
          <Button variant="primary" type="submit" onClick={handleSignin}>Sign in!</Button>
        </Form>
      </div>
      </div>
      </div>
    )
  }

export default Signin;
