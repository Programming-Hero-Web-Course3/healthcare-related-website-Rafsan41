import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

import "./RegisterFrom.css"
const SignInFrom = () => {

    const { auth, signInGoogle,email, setEmail, password, setPassword, createUserWithEmailAndPassword,error, setError} = useAuth();
    

    const handelRegistation = (e) => {
        e.preventDefault()
        if (password.length < 6) {
            setError('password must be at least 6 charecter long.')
            return;
        }
        if (!/(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)) {
            setError('password must be Minimum eight characters, at least one letter, one number and one special character')
            return;
        }
        
        createUserWithEmailAndPassword(auth, email, password)
           
            .then(result => {
                const user = result.user
                console.log(user)
                setError('')
                 
            })
          .catch(error => {
                    setError(error.message)
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
                <form  onSubmit={handelRegistation}>
                <div>
                    <h2 className='signIn-title'>Please Register</h2>
                </div>
                <div>
                     <div className='inputbox'>
                    <input onBlur={handelEmail} type="email" required />
                    <span>Email</span>
                        </div><br />
                <div className='inputbox'>
                    <input onBlur={handelPassword}  type="password" required />
                            <span>Password</span>
                            <p className='errorMassgepassword'>{error}</p>
                        </div>
                        <br /><br /><br />
                    <div className='registerBtn'>
                       <button type='submit'>Register</button>
                        </div><br />
                        <div className='switchlogIn'>
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
            <div className='loginWithGoogle'> 
                <button onClick={signInGoogle}>Sign in with Google</button>
            </div>
        </div>
    );
};

export default SignInFrom;