import React, { useContext } from 'react';
import logo from '../../images/logo.png';
import google from '../../images/google-icon.png';
import { Link } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaselogin.config';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser)
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email, photoURL} = result.user;
            const signedInUser = {name: displayName, email: email, photo: photoURL} 
            setLoggedInUser(signedInUser);
            storeUserToken();
            history.replace(from);

          }).catch(function(error) {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    };

    const storeUserToken = () => {
        firebase.auth().currentUser.getIdToken(true)
        .then((idToken) => {
            sessionStorage.setItem('token', idToken);
        })
        .catch(() => {

        });
    };
    return (
        <div className="login-container">
            <div className="login-logo mb-5">
                <Link to="/"><img src={logo} alt="logo"/></Link>
            </div>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6 mt-5">
                    <div className="google-login border border-warning rounded-sm my-5 mx-3 p-5">
                        <h4>Login With</h4>
                        <button onClick={handleGoogleSignIn} className="login-button"><span><img className="img-fluid" src={google} alt=""/></span>Continue with Google</button>
                        <p className="no-account-text text-center mt-3">Don't have an account? <span onClick={()=> window.open("https://rb.gy/eibnw4", "_blank")} className="create-account-link text-primary">Create an account</span></p>
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    );
}

export default Login;