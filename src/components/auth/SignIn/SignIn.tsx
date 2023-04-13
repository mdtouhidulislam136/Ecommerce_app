import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './signIn.css'
import LoginWithGoogle from './LoginWithGoogle'
import { Provider } from 'react-redux'
import { store } from '../../../store/reducers/storeReducers'
function SignIn() {
  return (
    <div className="signInForm">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <LoginWithGoogle />
      </Form>
    </div>
  )
}

export default SignIn

// npm install react-google-login// login funtionality using google
