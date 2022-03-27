import React, { createContext } from 'react';
import useFirebase from '../Hooks/UseFirebase';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    // const { children } = props;
    const firebseContext = useFirebase()
    return (
        <AuthContext.Provider value={firebseContext}>
           { children } 
        </AuthContext.Provider>
    );
};

export default AuthProvider;