import React from 'react';
import useAuth from '../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div>
            <h2>This is Login Page</h2>
            <button onClick= {signInUsingGoogle} className="btn-primary">Coogle Sign In</button>
        </div>
    );
};

export default Login;