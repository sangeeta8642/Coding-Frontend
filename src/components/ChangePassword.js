import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate }  from 'react-router-dom'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css';

export default function ChangePassword({ onClose }) {

    // const [swalProps, setSwalProps] = useState({});

    const [enable, setEnable] = useState(false)
    const user = JSON.parse(localStorage.getItem("user"))
    const [userpswrd, setUserPswrd] = useState("")
    const [newP, setNewP] = useState("")
    const [confirmed, setConfirmed] = useState("")
    const [currentStep, setCurrenStep] = useState(1)
    const [Enable2, setEnable2] = useState(false)


    const nav = useNavigate();

    // console.log("User Password:", user.password);
    // console.log("Entered Password:", userpswrd);
    function NextStep() {
        if (user) {
            setCurrenStep(2)
            // setEnable(false)
        }
    }

    async function Submit() {
        let result = await fetch(`http://localhost:5000/changePswrd/${user._id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ password: confirmed })
        })
        result = await result.json();

        console.log(result);

        Swal.fire({
            title: 'Password has been updated..!!',
            // text: 'Remember Your Password',
            icon: "success",
            timer: 3000,
            timerProgressBar: true,
            toast: true,
            position: 'top',
            showConfirmButton: false
        });
        setTimeout(() => {
            onClose(); 
        }, 3000);

        // alert("Password has been updated..!!");
        localStorage.setItem("user", JSON.stringify(result))
        nav("/profile")

    }

    const handlePasswordChange = (event) => {
        const enteredPassword = event.target.value;
        setUserPswrd(enteredPassword);

        // Check if the entered password matches the password in local storage
        if (enteredPassword === user.password) {
            setEnable(true); // Enable the button if passwords match
        } else {
            setEnable(false); // Disable the button if passwords don't match
        }
    };

    function ConfirmP(e) {
        const event = e.target.value
        setConfirmed(event)
        if (event === newP) {
            setEnable2(true)
        }
        else {
            setEnable2(false)
        }
    }

    function render() {
        switch (currentStep) {
            case 1: {
                return (
                    <div>
                        <div className='form signupdiv'>
                            <button className='close-button'><svg stroke="currentColor" onClick={() => onClose()} fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg></button>

                            <form>
                                <div className="table-container">
                                    <table>

                                        <tr>
                                            <td>
                                                <h4>Update Password</h4>
                                            </td>
                                        </tr>
                                        <br />
                                        <tr>
                                            <td>
                                                <p> Enter Current Password:</p>
                                                <input type='text' onChange={handlePasswordChange} />
                                            </td>
                                        </tr>
                                        <br /><br />
                                        <tr>
                                            <br />
                                            <td>
                                                <Button variant='danger' disabled={!enable} onClick={NextStep}>Next</Button>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </form>

                        </div>

                    </div>
                )
            }

            case 2: {
                return (
                    <div>
                        <div className='form signupdiv'>
                            <button className='close-button'><svg stroke="currentColor" onClick={onClose} fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg></button>

                            <form>
                                <div className="table-container">
                                    <table>

                                        <tr>
                                            <td>
                                                <h4>Update Password</h4>
                                            </td>
                                        </tr>
                                        <br />
                                        <tr>
                                            <td>
                                                <p> Enter New Password:</p>
                                                <input type='text' value={newP} onChange={(e) => { setNewP(e.target.value) }} />
                                            </td>
                                        </tr>
                                        <br />
                                        <tr>
                                            <td>
                                                <p> Confirm Password:</p>
                                                <input type='text' onChange={ConfirmP} value={confirmed} />
                                            </td>
                                            <td>
                                                <Button variant='danger' disabled={!Enable2} onClick={Submit}>Next</Button>
                                            </td>
                                        </tr>
                                        <tr>

                                        </tr>
                                    </table>
                                </div>
                            </form>

                        </div>

                    </div>
                )
            }
        }
    }



    // console.log("Enable:", enable);

    return (
        <div>
            <div className='signuppage'>
                {render()}
            </div>
            {/* <SweetAlert2 {...swalProps} /> */}
        </div>
    )
}
