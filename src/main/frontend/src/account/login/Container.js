import React, { useState, useEffect } from 'react';
import LoginForm from './LoginForm';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

function LoginFormContainer(props) {
    // Add logic for objects, handling form, and axios communication w/ backend
    const { setIsLoggedIn, setUserInfo } = props;
    
    const [login, setLogin] = useState({
        username: "",
        password: ""
    })

    const [accountVerified, setAccountVerified] = useState(null)
    useEffect(() => {
        const getPerson = async () => {
            let response = await axios.post('http://localhost:8080/api/v1/get/person', {username: login.username})
            .catch(error => console.log(error));
            console.log(response)
            if (response.data !== null) {
                setUserInfo(response.data);
                setIsLoggedIn(true);
            }
        }

        if (accountVerified) {
            getPerson();
        }  
    }, [accountVerified])

    const handleLoginChange = ({ target }) => {
        const { name, value } = target;
        if (name === "username") {
            setLogin((prev) => ({...prev, [name]: value.replace(/\s/g, '')}));
        } else {
            setLogin((prev) => ({...prev, [name]: value}));
        }
    }

    const [isInvalid, setIsInvalid] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault();
        let response = await axios.post('http://localhost:8080/api/v1/get/account/verify', login).catch(error => console.log(error));
        if (response !== undefined) {
            setAccountVerified(response.data)
        } else {
            setAccountVerified(false)
        }
        if (!accountVerified) {
            setIsInvalid(true);
        }
    }


    return (
        <div>
            <h2>Log In</h2>

            <LoginForm 
                handleChange={handleLoginChange} 
                handleSubmit={handleSubmit} 
                username={login.username}
                password={login.password}/>

            {isInvalid && <p className="sign-in-error">Incorrect username and/or password.</p>}

            {accountVerified && <Navigate to={"/profile/" + login.username} />}
        </div>
    );
}

export default LoginFormContainer;
