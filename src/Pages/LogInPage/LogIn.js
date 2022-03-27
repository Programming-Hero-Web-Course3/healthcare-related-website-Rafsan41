import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './LogIn.css'
const LogIn = () => {
    const {signInGoogle } = useAuth();
    return (
        <div>
           <div>
                <form>
                <div>
                    <h2 className='LogIn-title'>Please Log In</h2>
                </div>
                <div>
                     <div className='inputbox'>
                    <input type="email" required />
                    <span>Email</span>
                </div><br />
                <div className='inputbox'>
                    <input type="password" required />
                    <span>Password</span>
                    </div><br />
                    <div>
                        <button>Sign In</button>
                        </div><br />
                        <div>
                            <Link className='navLink' to="/register"><button>Create New Account</button></Link>
                            
                        </div>
               </div>
                
                <br />
            </form>
            </div>
                <br />
                <br />
                <br />
                <br />
            <div> 
                <button onClick={signInGoogle}>Sign in with Google</button><br />
            
            </div>
        </div>
    );
};

export default LogIn;