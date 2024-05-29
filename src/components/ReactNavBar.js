import "../Css Files/ReactNavBar.css"
import React, { useState, useRef, useEffect } from 'react'
import menu from "../images/menu.png"
import avatar from "../images/avatar.png"
import wrong from "../images/wrong.png"
import { useNavigate, Link } from 'react-router-dom'
import User from './User'
import Theme from '../subComponents/Theme'
// import { Link } from 'react-scroll'
import { NavDropdown, Nav } from 'react-bootstrap'
import screen1 from '../screens/Screen1'
import screen2 from '../screens/Screen2'
import about from "./AboutUs";
import contactUs from "./ContactUs";


export default function ReactNavBar({ onLoginClick, onSignupClick }) {
  const nav = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"))
  const [selectedImage, setSelectedImage] = useState(null);


  useEffect(() => {
    getProfile();
  }, []);

  async function getProfile() {
    if (user) {
      let result = await fetch(`https://codebud-ewkb.onrender.com/getProfile/${user._id}`);
      result = await result.json();
      console.log(result);

      // Check if result.image is falsy or an empty string
      if (!result.image || result.image === '') {
        setSelectedImage(null); // Set selectedImage to null if there's no image
      } else {
        setSelectedImage(`https://codebud-ewkb.onrender.com/${result.image}`);
      }
    }
  }


  // const screen1Ref = useRef(screen1);
  // const aboutUsRef = useRef(screen2);
  // const contactUsRef = useRef(about);
  // const screen3Ref = useRef(contactUs);

  // function scrollToRef(ref) {
  //   if (ref.current) {
  //     window.scrollTo({
  //       top: ref.current.offsetTop,
  //       behavior: 'smooth'
  //     });
  //   }
  // }

  // useEffect(() => {
  //   scrollToRef(screen1Ref);
  // }, []); // Scroll to the first section on initial mount


  const [mobileSideVisible, setMobileSideVisible] = useState(false);
  const [CompilerVisible, setCompilerVisible] = useState(false);

  function HamburgClick() {
    setMobileSideVisible(!mobileSideVisible)
  }

  function Wrongfun() {
    setMobileSideVisible(false)
  }

  function Wrongfun() {
    setMobileSideVisible(false)
  }

  function handleLinkClick() {
    setMobileSideVisible(false);
  }

  function ShowCompiler() {
    // const url = 'https://onecompiler.com/embed/'
    // window.open(url, '_blank' , 'noopener,noreferrer');
    // setCompilerVisible(!CompilerVisible);
    // const newTab = window.open('https://onecompiler.com/embed/', '_blank');
    // newTab.location.href = 'data:text/html;charset=utf-8,' + encodeURIComponent('<html><body><script>window.location.href="https://onecompiler.com/embed/";</script></body></html>');
  }

  return (
    <div className='NavBarr'>
      {/* <div>
 
        <img src={logo} alt='logo' />
      </div> */}
      <div onClick={HamburgClick} className="Hamburg" >
        <div className="line" ></div>
        <div className="line" ></div>
        <div className="line" ></div>
      </div>

      <div className="mobile-side" style={{ display: mobileSideVisible ? 'block' : 'none' }} >
        <div onClick={Wrongfun} className="cancelbtn" >
          <img src={wrong} />
        </div>
        <div className="Mobility" style={{ display: mobileSideVisible ? 'block' : 'none' }} >
          <Link className="anchortag" to="screen1" spy={true} smooth={true} duration={500} style={{ cursor: "pointer" }} onClick={handleLinkClick}>Home</Link>
          <Link className="anchortag" to="aboutUs" spy={true} smooth={true} duration={500} style={{ cursor: "pointer" }} onClick={handleLinkClick}>About Us</Link>
          <Link className="anchortag" to="contactUs" spy={true} smooth={true} duration={500} style={{ cursor: "pointer" }} onClick={handleLinkClick}>Contact Us</Link>
          <Link className="anchortag" to="screen3" spy={true} smooth={true} duration={500} style={{ cursor: "pointer" }} onClick={handleLinkClick}>Why learn here?</Link>
          <Link to="/codeItYourSelf" >Playground</Link>
        </div>
      </div>

      <div className=''>
        <h1>CodeBud</h1>
      </div>
      <div className="navitems" >
        
        <Link to="/" >Home</Link>
        <Link to="/aboutus" >About Us</Link>
        <Link to="/whyLearnHere" >Why learn here?</Link>
        <Link to="/codeItYourSelf/java" >Playground</Link>
        {/* <Link onClick={() => window.location.href = 'https://www.online-ide.com/'} >Playground</Link> */}
        {/* <Link href="https://www.online-ide.com/" target="_blank" >Playground</Link> */}
        {/* <Link to="https://www.online-ide.com/" onClick={(event) => window.open(event.target.href, '_blank')}> */}
        {/* Playground */}
        {/* </Link> */}
        {/* <Link to="https://www.online-ide.com/" onClick={(event) => { event.preventDefault(); window */}
        {/* <Link to="https://www.online-ide.com/" onClick={(event) => { event.preventDefault(); window.open(event.target.href, '_blank'); }}> */}
          {/* Playground */}
        {/* </Link> */} 
        


        {/* <Link to="/aboutus" >Help</Link> */}
        {/* </div> */}
        {/* <Link className="anchortag" to="screen1" spy={true} smooth={true} duration={500} style={{ cursor: "pointer" }} >Home</Link>

        <Link className="anchortag" to="aboutUs" spy={true} smooth={true} duration={500} style={{ cursor: "pointer" }} >About Us</Link>
        <Link className="anchortag" to="contactUs" spy={true} smooth={true} duration={500} style={{ cursor: "pointer" }} >Contact Us</Link>
        <Link className="anchortag" to="screen3" spy={true} smooth={true} duration={500} style={{ cursor: "pointer" }} >Why learn here?</Link>
        <Link className="anchortag" style={{ cursor: "pointer" }} onClick={ShowCompiler} >Compiler</Link> */}
      </div>


      <div className='userDiv'>
        {/* <User/> */}
        <NavDropdown
          id="nav-dropdown-dark-example"
          title=""
          menuVariant="light"
          className="Phase2"
        >
          {!user ? <>
            <div >
              <NavDropdown.Item onClick={() => {
                onLoginClick();
                // nav('/login')
              }}>LogIn
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => {
                // nav('/signup')
                onSignupClick()
              }}>SignUp
              </NavDropdown.Item>
            </div>
          </> :
            <>
              <div >
                <NavDropdown.Item onClick={() => {
                  nav("/profile")
                }} > My Profile
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => {
                  nav("/progress")
                }} > My Progress
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => {
                  localStorage.clear()
                  nav("/")
                  getProfile()
                  window.location.reload()
                }} >Log Out
                </NavDropdown.Item>
              </div>
            </>

          }
        </NavDropdown>

        {
          selectedImage ? <><img style={{borderRadius:"50%"}} src={selectedImage} /></> : <><img src={avatar} /></>
        }
        {/* <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path></svg> */}
      </div>


    </div>
  )
}