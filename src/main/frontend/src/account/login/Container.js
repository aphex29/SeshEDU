import React, { useState } from 'react';
import LoginForm from './LoginForm';
import axios from 'axios';

function LoginFormContainer(props) {
    // Add logic for objects, handling form, and axios communication w/ backend
    const { setIsLoggedIn, setUserInfo } = props;

    const [login, setLogin] = useState({
        username: "",
        password: ""
    })

    const getUser = async () => {
        let response = await axios.post('http://localhost:8080/api/v1/get/person', {username: login.username})
        .catch(error => console.log(error));
        setUserInfo(response.data);
        setIsLoggedIn(true);
    }

    const handleLoginChange = ({ target }) => {
        const { name, value } = target;
        setLogin((prev) => ({...prev, [name]: value}));
    }

    const [isInvalid, setIsInvalid] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault();
        let response = await axios.post('http://localhost:8080/api/v1/get/account/verify', login)
        .catch(error => console.log(error));
        if (response.date === true) {
            getUser();
        } else {
            setIsInvalid(true);
        }
    }


    return (
        <div>
            <h2>Log In</h2>

            <LoginForm handleChange={handleLoginChange} handleSubmit={handleSubmit} />
        </div>
    );
}

export default LoginFormContainer;
