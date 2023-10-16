import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../provider/AuthProvider'
import { Button, Form } from 'react-bootstrap';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    let { registerUser, updateUserProfile } = useContext(AuthContext);
    let [show, setShow] = useState(false);
    let [success, setSuccess] = useState();
    let [error, setError] = useState();
    let [accepted, setAccepted] = useState(false);
    let navigate = useNavigate();

    let handleRegister = event => {
        event.preventDefault();

        let form = event.target;
        let email = form.email.value;
        let name = form.name.value;
        let photo = form.photo.value;
        let password = form.password.value;

        registerUser(email, password)
            .then(result => {
                setError('');
                let user = result.user;
                console.log(user)
                // updateProfile(user, { displayName: {name}, photoURL: {photo} })
                //     .then(res => console.log(res))
                //     .catch(error => setError("Profile doesn't update properly"))
                setSuccess('Your registration has been successful.')
                navigate('/category/0')
            })
            .catch(err => {
                setError('There is a mistake, Please try again.')
                setSuccess('')
            })

        form.reset()
    }

    let handleTerms = event => {
        setAccepted(event.target.checked);
    }
    return (
        <div>
            <Form onSubmit={handleRegister} className='w-50 mx-auto mt-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded p-5'>
                <h3 className='mb-5 text-center fs-1'>Register your account</h3>
                <Form.Group className="mb-3 fs-5" controlId="formBasicEmail">
                    <Form.Label className='fs-4'>Email address</Form.Label>
                    <Form.Control className='bg-body-secondary d-block w-100 p-3 border border-0 rounded' name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3 fs-5" controlId="formBasicEmail">
                    <Form.Label className='fs-4'>Name</Form.Label>
                    <Form.Control className='bg-body-secondary d-block w-100 p-3 border border-0 rounded' name='name' type="text" placeholder="Enter Name" required />
                </Form.Group>

                <Form.Group className="mb-3 fs-5" controlId="formBasicEmail">
                    <Form.Label className='fs-4'>Photo url</Form.Label>
                    <Form.Control className='bg-body-secondary d-block w-100 p-3 border border-0 rounded' name='photo' type="text" placeholder="Enter photo url" required />
                </Form.Group>

                <Form.Group className="mb-3 fs-5" controlId="formBasicPassword">
                    <Form.Label className='fs-5'>Password</Form.Label>
                    <Form.Control className='bg-body-secondary d-block w-100 p-3 border border-0 rounded' name='password' type={show ? 'text' : 'password'} placeholder="Password" required />
                    <p className='fs-6 pe-auto' onClick={() => setShow(!show)}>{show ? 'Hide password' : 'Show password'}</p>
                </Form.Group>

                <Form.Group className="mb-3 d-flex align-items-center fs-6" controlId="formBasicCheckbox">
                    <Form.Check className='me-2' type="checkbox" onClick={handleTerms} />
                    <Form.Label className='fs-4'>
                        Accept<Link className='ms-1 font-poppins fs-5 text-warning text-decoration-none fs-5' to='/terms'>Terms and condition</Link>
                    </Form.Label>
                </Form.Group>
                <Button className='bg-dark w-100 text-white p-2 border-rounded font-poppins fs-5' disabled={!accepted} variant="primary" type="submit">
                    Register
                </Button>
                <p className='fs-5 mt-4 mx-auto text-center'>
                    Already have an account? <Link className='ms-1 font-poppins fs-5 text-warning text-decoration-none fs-5' to='/login'>Log in</Link></p>

                <div id="success-massage" className="form-text">
                    <p className='text-success fs-6'>{success}</p>
                </div>

                <div id="error-massage" className="form-text">
                    <p className='text-danger fs-6'>{error}</p>
                </div>
            </Form>
        </div>
    )
}

export default Register