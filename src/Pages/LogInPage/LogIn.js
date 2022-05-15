import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../Hooks/useAuth';
import './LogIn.css'
const LogIn = () => {
    const {auth,setEmail,setPassword, email, password,  signInGoogle,signInWithEmailAndPassword  } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home'
    
    const handelGoogleLogIn = () => {
        signInGoogle()
            .then(result => {
            history.push(redirect_url)
            })
    }

    const handelLogIn = (e, Email , Password) => {
        e.preventDefault()
        // if (password.length < 6) {
        //     setError('password must be at least 6 charecter long.')
        //     return;
        // }
        // if (!/(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)) {
        //     setError('password must be Minimum eight characters, at least one letter, one number and one special character')
        //     return;
        // }
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
               history.push(redirect_url)
                // console.log(user);
        })
    }
    const handelEmail = (e) => {
        e.preventDefault()
        setEmail(e.target.value)
    }
    const handelPassword = (e) => {
        e.preventDefault()
        setPassword(e.target.value)
    }

    return (
        <div>
           <div>
                <form onSubmit={handelLogIn}>
                <div>
                    <h2 className='LogIn-title'>Please Log In</h2>
                </div>
                <div>
                     <div className='inputbox'>
                    <input onBlur={handelEmail} type="email" required />
                    <span>Email</span>
                </div><br />
                <div className='inputbox'>
                    <input onBlur={handelPassword} type="password" required />
                    <span>Password</span>
                    </div><br /><br /><br />
                    <div className='signInBtn'>
                        <button>Sign In</button>
                        </div><br />
                        <div className='switchRegister'>
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
            <div className='loginWithGoogle'> 
                <button onClick={handelGoogleLogIn}>Sign in with Google</button><br />
            
            </div>
        </div>
    );
};

export default LogIn;