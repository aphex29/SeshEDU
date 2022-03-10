import React from 'react';
import './LoginForm.css';
import Button from '../../button/Button';

function LoginForm(props) {
    return (
        <form id="loginForm" onSubmit={props.handleSubmit}>
            <input
            type="text"
            id="txtUserName"
            placeholder="Username"
            name="username"
            value={props.username}
            onChange={props.handleChange}
            required />
            <br/>

            <input
            type="password"
            id="txtPassword"
            placeholder="Password"
            name="password"
            value={props.password}
            onChange={props.handleChange}
            required />
            <br />
       
            <Button type="submit" value = "Log In" />
        </form>
    );
}

export default LoginForm;