import React, { useState, useEffect } from 'react';
import NewAccountForm from './NewAccountForm';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

function NewAccountFormContainer(props) {
    // Add logic for objects, handling form, and axios communication w/ backend
    const { setIsLoggedIn, setUserInfo } = props;

    const [newAccount, setNewAccount] = useState({
        name: "",
        username: "",
        email: "",
        city: "",
        state: "",
        password: "",
    })
    
    const [accountId, setAccountId] = useState(null)
    useEffect(() => {
        const createNewPerson = async () => {
            let newPerson = {
                name: newAccount.name, 
                username: newAccount.username, 
                email: newAccount.email, 
                accountId: accountId
            }
            let response = await axios.post('http://localhost:8080/api/v1/create/person', newPerson)
            .catch(error => console.log(error));
            if (response != null) {
                setUserInfo(response.data);
                setIsLoggedIn(true);
            }
        }

        if (accountId) {
            createNewPerson();
        }  
    }, [accountId])

    const handleNewAccountChange = ({ target }) => {
        const { name, value } = target;
        if (name === "username" || name === "email") {
            setNewAccount((prev) => ({...prev, [name]: value.replace(/\s/g, '')}));
        } else {
            setNewAccount((prev) => ({...prev, [name]: value}));
        }
    }

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        let response = await axios.post('http://localhost:8080/api/v1/create/account', {email: newAccount.email, username: newAccount.username, password: newAccount.password})
        .catch(error => console.log(error));
        console.log(response);
        if (response != null) {
            setAccountId(response.data.id)
        }
       
    }

    return (
        <div>
            <h2 id="createAccountHeader">Create Account</h2>

            <NewAccountForm 
                handleChange={handleNewAccountChange} 
                handleClick={handleSubmit} 
                name={newAccount.name}
                username={newAccount.username}
                email={newAccount.email}
                password={newAccount.password}/>

            {accountId && <Navigate to={"/profile/" + newAccount.username} />}

        </div>
    );
}  

export default NewAccountFormContainer;