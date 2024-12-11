import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const navigate = useNavigate()
    const {googleLogin} = useContext(AuthContext)
    const handleGoogleLogin = () =>{
        googleLogin()
        .then(result => {
            navigate('/')
            console.log(result.user)
        })
        .catch(err => console.log(err))
    }
    return (
        <div className='text-center mt-6'>
            <button onClick={handleGoogleLogin} className='btn btn-outline'>Login With Google</button>
        </div>
    );
};

export default SocialLogin;