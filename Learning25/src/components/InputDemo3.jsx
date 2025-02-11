import React, { useState } from 'react';

export const InputDemo3 = () => {
    const [gender, setGender] = useState("");
    const [city, setCity] = useState("");
    const [contactNo, setContactNo] = useState("");
    const [address, setAddress] = useState("");
    const [dob, setDob] = useState("");

    return (
        <div style={{ textAlign: "center" }}>
            <h1>INPUT DEMO 3</h1>
            <div>
                <label>Gender</label>
                <input type='text' placeholder='Enter gender' onChange={(e) => setGender(e.target.value)} />
                {gender}
            </div>
            <div>
                <label>City</label>
                <input type='text' placeholder='Enter city' onChange={(e) => setCity(e.target.value)} />
                {city}
            </div>
            <div>
                <label>Contact No</label>
                <input type='text' placeholder='Enter contact number' onChange={(e) => setContactNo(e.target.value)} />
                {contactNo}
            </div>
            <div>
                <label>Address</label>
                <input type='text' placeholder='Enter address' onChange={(e) => setAddress(e.target.value)} />
                {address}
            </div>
            <div>
                <label>Date of Birth</label>
                <input type='date' onChange={(e) => setDob(e.target.value)} />
                {dob}
            </div>
        </div>
    );
};
