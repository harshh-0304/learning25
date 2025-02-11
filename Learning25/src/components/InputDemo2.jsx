import React, { useState } from 'react';

export const InputDemo2 = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <div style={{ textAlign: "center" }}>
            <h1>INPUT DEMO 2</h1>
            <div>
                <label>Name</label>
                <input type='text' placeholder='Enter name' onChange={(e) => setName(e.target.value)} />
                {name}
            </div>
            <div>
                <label>Username</label>
                <input type='text' placeholder='Enter username' onChange={(e) => setUsername(e.target.value)} />
                {username}
            </div>
            <div>
                <label>Email</label>
                <input type='text' placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} />
                {email}
            </div>
            <div>
                <label>Password</label>
                <input type='password' placeholder='Enter password' onChange={(e) => setPassword(e.target.value)} />
                {password}
            </div>
            <div>
                <label>Confirm Password</label>
                <input type='password' placeholder='Confirm password' onChange={(e) => setConfirmPassword(e.target.value)} />
                {confirmPassword}
            </div>
        </div>
    );
};
