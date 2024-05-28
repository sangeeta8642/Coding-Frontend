import "../Css Files/LogIn.css"
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css';

export default function LogIn({ onClose, onSignupClick }) {
    const [uname, setUname] = useState("");
    const [pswrd, setPswrd] = useState("");
    const nav = useNavigate();

    const handleClose = () => {
        onClose(); 
    };

    const handleSignup = () => {
        onClose();
        onSignupClick()
    }

    const Login = async () => {
        if (uname == '' || pswrd == '') {
            alert("Please fill requried fields..")
        }
        else {
            let data = { username: uname, password: pswrd }
            let result = await fetch("http://localhost:5000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            if (result.status === 404) {
                // alert("User Not Found")
                Swal.fire({
                    title: 'User not found',
                    // text: 'Remember Your Password',
                    icon: "failed",
                    timer: 1500,
                    timerProgressBar: true,
                    toast: true,
                    position: 'top',
                    showConfirmButton: false
                    
                });
            }
            else if (result.status === 409) {
                // alert("Please..!! Enter Valid Password")
                Swal.fire({
                    title: 'Invalid Password',
                    // text: 'Remember Your Password',
                    icon: "failed",
                    timer: 1500,
                    timerProgressBar: true,
                    toast: true,
                    position: 'top',
                    showConfirmButton: false
                    
                });
                // window.location.reload()
                
                setTimeout(() => {
                    handleClose();
                    window.location.reload()
                    onClose(); 
                }, 500);
                handleClose();
                onClose();
            }
            else {
                result = await result.json();
                localStorage.setItem("user", JSON.stringify(result.user));
                localStorage.setItem("token", JSON.stringify(result.authToken));
                
                Swal.fire({
                    title: 'Login Successfull..!!',
                    // text: 'Remember Your Password',
                    icon: "success",
                    timer: 900,
                    timerProgressBar: true,
                    // toast: true,
                    position: 'center',
                    showConfirmButton: false
                    
                });
                // window.location.reload()
                
                setTimeout(() => {
                    handleClose();
                    window.location.reload()
                    onClose(); 
                }, 500);
                handleClose();
                onClose();
                 
                // window.location.reload()

                // alert("Login Successfull..!!")
            }}}

    return (
        <div className='signuppage'>
            <div className='form signupdiv'>
                <button className='close-button' onClick={handleClose}>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" 
                    viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3
                         5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1
                          13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 
                          12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.
                1L563.8 512z"></path></svg></button>
                <form >
                    <div className="table-container">
                        <table >
                            <tr>
                                <td>
                                    <h1>Log In</h1>
                                </td>
                            </tr>
                            <br />
                            <tr>
                                <td>
                                    <p>Username: *<br />
                                        <input type='text' value={uname} onChange={(e) => { setUname(e.target.value) }} /></p>
                                </td>
                            </tr>
                            <br />
                            <tr>
                                <td>
                                    <p>Password: *<br />
                                        <input type='text' value={pswrd} onChange={(e) => { setPswrd(e.target.value) }} /></p>
                                    <p>Forget Password?</p>
                                </td>
                                <td>
                                </td>
                            </tr>
                            <br />
                            <tr>
                               <td>
                                    <Button variant='success' onClick={Login}>LogIn</Button>
                                </td>
                            </tr>
                            <br />
                            <tr>
                            </tr>
                            <tr>
                                <td>
                                    <p style={{ fontSize: "20px" }}>Not a member?<span 
                                    style={{ color: "#228b22", cursor: "pointer" }}                             
                                    onClick={() => {
                                        handleSignup()
                                    }}>SignUp</span></p></td></tr>
                        </table>
                    </div></form></div></div>)}                                                    