import React, { useContext, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../provider/AuthProvider'

const Login = () => {
    let { signInUser } = useContext(AuthContext);
    let [ show, setShow ] = useState(false);
    let [success, setSuccess] = useState();
    let [error, setError] = useState();
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || '/category/0';

    let handleRegister = event => {
        event.preventDefault();

        let form = event.target;
        let email = form.email.value;
        let password = form.password.value;

        signInUser(email, password)
        .then(result => {
            setSuccess('Login successful.')
            setError('')
            navigate(from, {replace: true})
        })
        .catch(error => {
            setError('Please try again')
            setSuccess('')
        })

    }
    return (
        <div>
            <Form onSubmit={handleRegister} className='w-50 mx-auto mt-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded p-5'>
                <h3 className='mb-4 text-center'>Log in your account</h3>
                <Form.Group className="mb-3 fs-5" controlId="formBasicEmail">
                    <Form.Label className='fs-4'>Email address</Form.Label>
                    <Form.Control className='bg-body-secondary d-block w-100 p-3 border border-0 rounded ' name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3 fs-5" controlId="formBasicPassword">
                    <Form.Label className='fs-5'>Password</Form.Label>
                    <Form.Control className='bg-body-secondary d-block w-100 p-3 border border-0 rounded ' name='password' type={show ? 'text' : 'password'} placeholder="Password" required />
                    <p className='fs-6 pe-auto' onClick={()=> setShow(!show)}>{show ? 'Hide password' : 'Show password'}</p>
                </Form.Group>

                <Button className='bg-dark w-100 text-white p-2 border-rounded font-poppins fs-5' variant="primary" type="submit">
                    Log in
                </Button>
                <p className='fs-5 mt-4 mx-auto text-center'>Don't have an account? <Link className='ms-1 font-poppins fs-5 text-warning text-decoration-none fs-5' to='/register'>Register</Link></p>

                <div id="success-massage" class="form-text">
                    <p className='text-success'>{success}</p>
                </div>

                <div id="error-massage" class="form-text">
                    <p className='text-danger'>{error}</p>
                </div>
            </Form>
        </div>
    )
}

export default Login