import React from 'react';
import Auth from './useAuth'

const login = () => {
    const auth = Auth();
    return (
        <div>
            <h1>Join the party</h1>
            {
                auth.user ? <button onClick={auth.signOut}>Sign Out</button> :
                <button onClick={auth.signInWithGoogle}>Sign In with Google</button>
            }
        </div>
    );
};

export default login;