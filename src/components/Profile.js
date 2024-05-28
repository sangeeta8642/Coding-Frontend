import "../Css Files/Profile.css"
import React, { useEffect, useState } from 'react'
import UserPic from "../images/User.png"
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import ChangePassword from "./ChangePassword"
import BlankUser from '../images/User.png'

export default function Profile() {
  const userData = JSON.parse(localStorage.getItem("user"))
  const [user, setUser] = useState([])
  const [userImage, setUserImage] = useState(null)
  const [showChangeP, setShowChangeP] = useState(false)
  const [Languages, setLanguages] = useState([])

  const nav = useNavigate();

  useEffect(() => {
    getProfile()
  }, [])

  function onChangeP() {
    setShowChangeP(!showChangeP)
  }

  function closeChangeP() {
    setShowChangeP(false)
  }

  async function getProfile() {
    if (userData) {
      try {
        getLanguages()
        let result = await fetch(`http://localhost:5000/getProfile/${userData._id}`);
        if (!result.ok) {
          throw new Error('Failed to fetch profile data');
        }
        result = await result.json();
        console.log(result.image);
        setUser(result);
        if (result.image && result.image.data) {
          setUserImage(result.image);
        }
        else {
          setUserImage(UserPic); // Assuming UserPic is a default profile picture
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    }
  }

  async function getLanguages() {
    let result = await fetch(`http://localhost:5000/getLanguage/${userData._id}`)
    result = await result.json()
    console.log(result)
    setLanguages(result)
  }

  return (
    <div className="profilePage">
      {showChangeP && <ChangePassword onClose={closeChangeP} />}
      <div className="profileDiv" >
      <svg onClick={()=>nav('/')} style={{cursor:"pointer"}} stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>

        <div className="profileTop">
          <div className="profilePic">
            {
              user.image ? <><img src={`http://localhost:5000/${user.image}`} /></> : 
                <><img src={BlankUser} /></>
            }
          </div>
          <div className="profileName" >
          <h1>{user.username}</h1>
            <h3>{user.Fname} {user.Lname}</h3>
            {user.bio ?  <p>{user.bio}</p>:null}
            <p>Selected Languages:</p>
            {Languages.length > 0 ? (
              <p>{Languages.map(language => language.languageName).join(",")}</p>
            ) : (
              <p>No languages have been Selected</p>
            )}            
            <Button variant="warning" onClick={() => { nav(`/updateProfile/${user._id}`) }} >Edit Profile</Button>
            {'  '}
            <Button variant='info' onClick={onChangeP}>Change Password</Button>
            {/* <br/><br/> */}
            <br/><br/>
          </div></div></div></div>)}
