import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {

    let handleRegister = event => {
        event.preventDefault();

        let form = event.target;
        let email = form.email.value;
        let name = form.name.value;
        let photo = form.photo.value;
        let password = form.password.value;
        
    }
    return (
            <div>
                <form className='w-50 mx-auto mt-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded p-5'>
                    <h3 className='mb-4 text-center'>Register your account</h3>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input className='bg-body-secondary d-block w-100 p-3 border border-0 rounded ' type="email" class="form-control" name='email' id="exampleInputEmail1" placeholder='Email-address' aria-describedby="emailHelp" required />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Name</label>
                        <input className='bg-body-secondary d-block w-100 p-3 border border-0 rounded ' type="text" class="form-control" name='name' id="exampleInputEmail1" placeholder='Name' aria-describedby="emailHelp" required />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Photo URL</label>
                        <input className='bg-body-secondary d-block w-100 p-3 border border-0 rounded ' type="text" class="form-control" name='photo' placeholder='Photo URL' aria-describedby="emailHelp" required />
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input className='bg-body-secondary d-block w-100 p-3 border border-0 rounded ' type="password" class="form-control" name='password' placeholder='Password' id="exampleInputPassword1" required />
                    </div>

                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Accept<Link className='ms-1 font-poppins fs-5 text-warning text-decoration-none fs-5' to='/register'>Terms and condition</Link>
                        </label>
                    </div>

                    <input className='bg-dark w-100 text-white p-2 border-rounded font-poppins fs-5' type="submit" value="Register" />
                    <p className='fs-5 mt-4 mx-auto text-center'>Already have an account? <Link className='ms-1 font-poppins fs-5 text-warning text-decoration-none fs-5' to='/register'>Log in</Link></p>
                </form>

                <div id="success-massage" class="form-text">

                </div>

                <div id="error-massage" class="form-text">

                </div>
            </div>
    )
}

export default Register