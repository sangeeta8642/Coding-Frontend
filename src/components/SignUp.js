import "../Css Files/Signup.css"
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css';

export default function SignUp({ onClose, onLoginClick }) {

    const [data, setData] = useState({ Fname: "", Lname: "", profession: "", mobile: "", email: "", username: "", password: "" });
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);
    const [usernames, setUsernames] = useState([])

    useEffect(() => {
        Usernames()
    }, [])


    async function Usernames() {
        let result = await fetch("http://localhost:5000/usernames");
        result = await result.json()
        setUsernames(result)
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
        validateField(name, value);
    };
    const validateField = (name, value) => {
        const newErrors = { ...errors };

        if (name === "username") {
            if (!value) {
                newErrors.username = "Username is required";
            } else if (!/^[a-zA-Z0-9_.]+$/.test(value)) {
                newErrors.username = "Username can only contain letters, numbers, underscores, and periods";
            } else if (value.length < 3) {
                newErrors.username = "Username must be at least 3 characters long";
            } else if (usernames.includes(value.toLowerCase())) {
                newErrors.username = "Username is taken";
            } else {
                delete newErrors.username;
            }
        }

        if (name === "password") {
            if (!value) {
                newErrors.password = "Password is required";
            } else if (value.length < 8) {
                newErrors.password = "Password must be at least 8 characters long";
            } else if (
                !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>?~]{8,}$/.test(
                    value
                )
            ) {
                newErrors.password =
                    "Password must contain at least one letter and one number";
            } else {
                delete newErrors.password;
            }
        }
        if (name === "mobile") {
            if (!value) {
                newErrors.mobile = "Mobile number is required";
            }
            else if (!/^\d+$/.test(value)) { // Regex to allow only numbers
                newErrors.mobile = "Invalid mobile number;enter only numbers ";
            } else if (!/^\d{10}$/.test(value)) { // Example regex for a 10-digit mobile number
                newErrors.mobile = "Invalid mobile number; must be 10 digits";
            } else {
                delete newErrors.mobile;
            }
        }

        if (name === "email") {
            if (!value) {
                newErrors.email = "Email is required";
            } else if (!/\S+@\S+\.\S+/.test(value)) {
                newErrors.email = "Email address is invalid";
            } else {
                delete newErrors.email;
            }
        }

        if (name === "profession") {
            if (!value) {
                newErrors.profession = "Profession is required";
            } else if (!/^[A-Za-z]+$/.test(value)) {
                newErrors.profession = "please enter valid profession";
            } else {
                delete newErrors.profession;
            }
        }
        if (name === "Fname") {
            if (!value) {
                newErrors.Fname = "Firstname is required";
            } else if (!/^[A-Za-z]+$/.test(value)) {
                newErrors.Fname = "Firstname should contain only letters";
            } else {
                delete newErrors.Fname;
            }
        }

        if (name === "Lname") {
            if (!value) {
                newErrors.Lname = "Lastname is required";
            } else if (!/^[A-Za-z]+$/.test(value)) {
                newErrors.Lname = "Lastname should contain only letters";
            } else {
                delete newErrors.Lname;
            }
        }
        setErrors(newErrors);
        setIsFormValid(Object.keys(newErrors).length === 0);
    };

    const handleClose = () => {
        onClose();
    };

    const handleLogin = () => {
        onClose();
        onLoginClick()
    }

    async function SignUp(e) {
        e.preventDefault()
        if (isFormValid) {
            let result = await fetch("http://localhost:5000/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            result = await result.json();
            localStorage.setItem("user", JSON.stringify(result));
            Usernames()

            Swal.fire({
                title: 'Registered & Logged In Successfullyyy',
                text: 'Learn The Great Things',
                icon: "success",
                timer: 2500,
                timerProgressBar: true,
                // toast: true,
                position: 'center',
                showConfirmButton: false
            });
            
            setTimeout(() => {
                handleClose();
                window.location.reload()
                // onClose(); 
            }, 2500);
            // handleClose();
        }
    }

    return (
        <div className='signuppage'>
            <div className='form signupdiv'>
                <button className='close-button' onClick={handleClose}><svg stroke="currentColor"
                    fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em"
                    width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M563.8 
                512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 
                449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 
                512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1
                216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z">
                    </path></svg></button>
                <form >
                    <div className="table-container">
                        <table >
                            <tr>
                                <td>
                                    <h1>Sign Up</h1>
                                </td>
                            </tr>
                            <br />
                            <tr>
                                <td>
                                    <p>First name: *<br />
                                        <input type='text' autoCorrect='off' autoComplete="off" name="Fname"
                                            value={data.Fname} onChange={handleInputChange} /></p>
                                    {errors.Fname && (
                                        <span className="error">{errors.Fname}</span>
                                    )}
                                </td>
                                <td>
                                    <p>Last name: * <br />
                                        <input type='text' name="Lname" autoCorrect='off' autoComplete="off"
                                            value={data.Lname} onChange={handleInputChange} /></p>
                                    {errors.Lname && (
                                        <span className="error">{errors.Lname}</span>
                                    )}
                                </td></tr><br />
                            <tr>
                                <td>
                                    <p>Email: * <br />
                                        <input type='text' name="email" autoCorrect='off' autoComplete="off"
                                            value={data.email} onChange={handleInputChange} /></p>
                                    {errors.email && (
                                        <span className="error">{errors.email}</span>
                                    )}
                                </td>
                                <td>
                                    <p>Mobile: * <br />
                                        <input type='text' name="mobile" autoCorrect='off' autoComplete="off"
                                            value={data.mobile} onChange={handleInputChange} /></p>
                                    {errors.mobile && (
                                        <span className="error">{errors.mobile}</span>
                                    )}
                                </td></tr><br />
                            <tr>
                                <td>
                                    <p>Username: * <br />
                                        <input type='text' name="username" autoCorrect='off' autoComplete="off"
                                            value={data.username} onChange={handleInputChange} /></p>
                                    {errors.username && (
                                        <span className="error">{errors.username}</span>
                                    )}
                                </td><td>
                                    <p>Password: * <br />
                                        <input type='text' name="password" autoCorrect='off' autoComplete="off"
                                            value={data.password} onChange={handleInputChange} /></p>
                                    {errors.password && (
                                        <span className="error">{errors.password}</span>
                                    )}
                                </td></tr><br />
                            <tr>
                                <td>
                                    <p>Profession: *<br />
                                        <input type='text' name="profession" autoCorrect='off' autoComplete="off"
                                            value={data.profession} onChange={handleInputChange} /></p>
                                    {errors.profession && (
                                        <span className="error">{errors.profession}</span>
                                    )}
                                </td>
                                <td>
                                    <Button variant='success' onClick={SignUp} disabled={!isFormValid} >Register</Button>

                                </td>
                            </tr>
                            <br />
                            <tr>
                                <td>
                                    <p style={{ fontSize: "20px" }}>Already a member?
                                        <span style={{ color: "#228b22", cursor: "pointer" }} onClick={() => {
                                            handleLogin()
                                        }}>Log In</span>
                                    </p>
                                </td>

                            </tr></table></div></form></div></div>)
}
