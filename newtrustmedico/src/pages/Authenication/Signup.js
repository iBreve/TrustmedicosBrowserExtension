import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import './SignUp.css'

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      //await signup(emailRef.current.value, passwordRef.current.value)

    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <>
      <Card style={{ margin:'auto'}} >
        <Card.Body>
          <div className='signupItems'>
            <h2 className='title'>Sign Up Page</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email" className='email'>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password" className='email'>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
              <Form.Group id="password-confirm" className='email'>
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control type="password" ref={passwordConfirmRef} required />
              </Form.Group>
              <div className='button'>
                <Button disabled={loading} type="submit">
                  Sign Up
                </Button>
              </div>
            </Form>
            <div className='bottom'>
              Already have an account? <Link to="/Login">Log In</Link>
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
