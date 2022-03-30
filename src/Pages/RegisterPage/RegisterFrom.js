import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

import "./RegisterFrom.css"
const SignInFrom = () => {

    const { signInGoogle,setEmail,setPassword,setUserName,createUserEmailAndPassword, setuser, email,password,} = useAuth();
    

    const handelUserName = e => {
        setUserName(e.target.value)
        console.log(e.target.value)
    }
    const handelEmail = e => {
        setEmail(e.target.value) 
        console.log(e.target.value)
    } 
    const handelPassword = e => {
        setPassword(e.target.value)
        console.log(e.target.value)
    }
    const handelRegister = e => {
        e.preventDefault();
        console.log(email, password)
        createUserEmailAndPassword()
            .then(result => {
              setuser(result.user)
                console.log(result.user);
        })
        
    }
    return (
        <div>
            <div>
                <form onSubmit={handelRegister}>
                <div>
                    <h2 className='signIn-title'>Please Register</h2>
                </div>
                <div>
                     <div className='inputbox'>
                    <input onBlur={handelUserName} type="text" required />
                    <span>Username</span>
                </div><br />
                     <div className='inputbox'>
                    <input onBlur={handelEmail} type="email" required />
                    <span>Email</span>
                </div><br />
                <div className='inputbox'>
                    <input onBlur={handelPassword} type="password" required />
                    <span>Password</span>
                    </div><br />
                    <div>
                       <button type='submit'>Register</button>
                        </div><br />
                        <div>
                           <Link className='navLink' to="/logIn"><button>I have already an Account</button></Link> 
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
                <button onClick={signInGoogle}>Sign in with Google</button>
            </div>
        </div>
    );
};

export default SignInFrom;