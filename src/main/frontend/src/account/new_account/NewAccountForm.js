import React from 'react';
import './NewAccountForm.css';
import Button from '../../button/Button';

function NewAccountForm(props) {
    return (
        <form id="NewAccountForm" onSubmit={props.handleClick}>
          <input 
            type="text"
            id="txtName"
            placeholder="Name"
            name="name"
            value={props.name}
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
            id="txtPassword"
            placeholder="Password"
            name="password"
            value={props.password}
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
    
            <Button type="submit" value="Create Account" />
    
            </form>
        );
}

export default NewAccountForm;