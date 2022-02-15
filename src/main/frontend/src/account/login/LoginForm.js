import React from 'react';
import './LoginForm.css';
import Button from '../../button/Button';

function LoginForm(props) {
    return (
        <form id="loginForm" onSubmit={props.handleSubmit}>
            <input
            type="text"
            id="txtUserName"
            placeholder="username"
            value={props.name}
            onChange={props.handleChange}
            required />
            <br/>

            <input
            type="text"
            id="txtEmail"
            placeholder="Email"
            name="email"
            value={props.email}
            onChange={props.handleChange}
            required />
            <br />
       
            <Button type="button" value = "Log In" />
        </form>
    );
}

export default LoginForm;