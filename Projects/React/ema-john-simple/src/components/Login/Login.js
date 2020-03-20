import React from 'react';
import Auth from './useAuth'

const login = () => {
    const auth = Auth();
    const handleSignIn = () => {
        auth.signInWithGoogle()
        .then(res => {
            window.location.pathname = '/review';
        })

    }
    const handleSignOut = () => {
        auth.signOut()
        .then(res => {
            window.location.pathname = '/';
        })
    }
    return (
        <div>
            <h1>Join the party</h1>
            {
                auth.user ? <button onClick={handleSignOut}>Sign Out</button> :
                <button onClick={handleSignIn}>Sign In with Google</button>
            }
        </div>
    );
};

export default login;