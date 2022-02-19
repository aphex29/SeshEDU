import React from 'react';
import './NewAccountForm.css';
import Button from '../../button/Button';

function NewAccountForm(props) {
    return (
        <form id="NewAccountForm" onSubmit={props.handleClick}>
          <input 
            type="text"
            id="txtFirstName"
            placeholder="First Name"
            name="firstName"
            value={props.firstName}
            onChange={props.handleChange}
            required />
            <br />
    
            <input 
            type="text"
            id="txtLastName"
            placeholder="Last Name"
            name="lastName"
            value={props.lastName}
            onChange={props.handleChange}
            required />
            <br />
    
            <input 
            type="text"
            id="txtUsername"
            placeholder="Username"
            name="username"
            value={props.username}
            onChange={props.handleChange}
            required />
            <br />
    
            <input 
            type="text"
            id="txtEmail"
            placeholder="Email (.edu)"
            name="email"
            value={props.email}
            onChange={props.handleChange}
            required />
            <br />
    
            <input 
            type="password"
            id="txtPassword1"
            placeholder="Password"
            name="password1"
            value={props.password1}
            onChange={props.handleChange}
            required />
            <br />
    
            <input 
            type="password"
            id="txtPassword2"
            placeholder="Re-type Password"
            name="password2"
            value={props.password2}
            onChange={props.handleChange}
            required />
            <br />
    
            <Button type="button" value="Create Account" />
    
            </form>
        );
}

export default NewAccountForm;