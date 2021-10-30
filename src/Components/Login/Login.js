import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/home';
    const history = useHistory();
    const handleGoogleLogin = () =>{
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri)
        })
    }
    return (
        <div>
            <h2> Please Login </h2>
            <button onClick= {handleGoogleLogin} className="btn-danger rounded-3 m-5 p-2">Coogle Sign In</button>
        </div>
    );
};

export default Login;