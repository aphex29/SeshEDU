import React, { useState } from 'react';
import NewAccountForm from './NewAccountForm';
import axios from 'axios';

function NewAccountFormContainer(props) {
    // Add logic for objects, handling form, and axios communication w/ backend
    const { setIsLoggedIn, setUserInfo } = props;

    const [newAccount, setNewAccount] = useState({
        name: "",
        username: "",
        password: "",
        email: "",
        password: "",
        password2: ""
    })

    const handleLoginChange = ({ target }) => {
        const { name, value } = target;
        setNewAccount((prev) => ({...prev, [name]: value}));
    }

    const [isInvalid, setIsInvalid] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault();
        let response = await axios.post('http://localhost:8080/api/v1/create/account', newAccount)
        .catch(error => console.log(error));
        if (response.date === true) {
            console.log(response.data) // fix this
        } else {
            setIsInvalid(true);
        }
    }

    return (
        <div>
            <h2 id="createAccountHeader">Create Account</h2>

            <NewAccountForm />

        </div>
    );
}  

export default NewAccountFormContainer;