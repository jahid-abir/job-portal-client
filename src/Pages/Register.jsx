import Lottie from 'lottie-react';
import React, { useContext, useState } from 'react';
import register from '../assets/Register.json'
import AuthContext from '../context/AuthContext/AuthContext';
import SocialLogin from '../components/Shared/SocialLogin';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [error,setError] = useState('')
    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleRegister = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/.test(password)){
            return setError('Invalid Password')
        }
        createUser(email,password)
        .then(result => {
            console.log(result.user)
            setError('')
            navigate('/')
        })
        .catch(err => console.log(err))
    }
    return (
        <div className="hero bg-base-100 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-96">
                    <Lottie animationData={register}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            {error && <p className='text-red-500'>{error}</p>}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                            <SocialLogin></SocialLogin>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;