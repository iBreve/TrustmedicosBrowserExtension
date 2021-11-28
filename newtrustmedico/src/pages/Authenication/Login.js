import React, { useRef, useContext, useState, useEffect } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import "./Login.css";
//import { alignPropType } from "react-bootstrap/esm/DropdownMenu"

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()

  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      //await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <>
      <Card style={{ margin:'auto'}}>
        <Card.Body>
          <div className='loginItems'>
            <h2 className='title'>Login Page</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email" className='email'>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password" className='email'>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
              <div className='button'>
                <Button disabled={loading} type="submit" className='button'>
                  Log In
                </Button>
              </div>
            </Form>
            <div className='bottom'>
              <Link to="/Forgot">Forgot Password?</Link>
            </div>
            <div className='bottom'>
              Need an account? <Link to="/SignUp">Sign Up</Link>
            </div>
            <div className='bottom'>
             {error && <Alert variant="danger">{error}</Alert>}
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}
