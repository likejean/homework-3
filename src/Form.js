import React from 'react';

export default props => <form className="w3-container">
    <p>
        <label>First Name</label>
        <input
            className="w3-input"
            type="text"
            name="firstName"
            value={props.inputs.firstName}
            onChange={props.handleInputChange}
        />
    </p>
    <p>
        <label>Last Name</label>
        <input
            className="w3-input"
            type="text"
            name="lastName"
            value={props.inputs.lastName}
            onChange={props.handleInputChange}
        />
    </p>
    <p>
        <label>Email</label>
        <input
            className="w3-input"
            type="text"
            name="email"
            value={props.inputs.email}
            onChange={props.handleInputChange}
        />
    </p>
</form>