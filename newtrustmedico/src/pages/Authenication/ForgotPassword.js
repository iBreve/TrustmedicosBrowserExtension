import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../../context/AuthContext"
import { Link } from "react-router-dom"
import './ForgotPassword.css'

export default function ForgotPassword() {
  const emailRef = useRef()
  const resetPassword = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }

  return (
    <>
      <Card style={{ margin:'auto'}}>
        <Card.Body>
          <div className='forgotItems'>
            <h2 className='title'>Password Reset</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            {message && <Alert variant="success">{message}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email" className='email'>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <div className='button'>
                <Button disabled={loading} type="submit" style={{ margin:'auto', marginTop: '20px'}}>
                  Reset Password
                </Button>
              </div>
            </Form>
            <div className='bottom'>
              <Link to="/Login">Login</Link>
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