import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div>
            <form className='w-50 mx-auto mt-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded p-5'>
                <h3 className='mb-4 text-center'>Login your account</h3>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input className='bg-body-secondary d-block w-100 p-3 border border-0 rounded ' type="email" class="form-control" name='email' id="exampleInputEmail1" placeholder='Email-address' aria-describedby="emailHelp" required />
                        
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input className='bg-body-secondary d-block w-100 p-3 border border-0 rounded ' type="password" class="form-control" name='password' placeholder='Password' id="exampleInputPassword1" required />
                </div>
                <input className='bg-dark mt-4 w-100 text-white p-2 border-rounded font-poppins fs-5' type="submit" value="Log in" />
                <p className='fs-5 mt-4 mx-auto text-center'>Don't have an account? <Link className='ms-1 font-poppins fs-5 text-warning text-decoration-none fs-5' to='/register'>Register</Link></p>
            </form>
            <div id="success-massage" class="form-text">
                
            </div>
            <div id="error-massage" class="form-text">
                
            </div>
        </div>
    )
}

export default Login