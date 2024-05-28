import React,{useState} from 'react'
import ReactNavBar from './ReactNavBar'
import Screen1 from '../screens/Screen1'
import Screen2 from '../screens/Screen2'
import Screen3 from '../screens/Screen3'
import SignUp from './SignUp'
import LogIn from './LogIn'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import Footer from './Footer'

export default function Home() {  

    const [showLogin, setShowLogin] = useState(false); // State variable to manage visibility of the login component
    const [showSignup,setShowSignup]=useState(false);
  
    const toggleLogin = () => {
        setShowLogin(!showLogin); // Toggle the visibility of the login component
    };
  
    const toggleSignUp = () => {
      setShowSignup(!showSignup); // Toggle the visibility of the login component
    };
    
    const handleCloseLogin = () => {
      setShowLogin(false); // Close the login component
    };

    const handleCloseSignup = () => {
    setShowSignup(false)
    };

  return (
    <div>
      <ReactNavBar  onLoginClick={toggleLogin} onSignupClick={toggleSignUp}/>
      <Screen1 />
      <Screen2 />
      {/* <Screen3 /> */}
      {/* <AboutUs/> */}
      {/* <ContactUs/> */}
      <Footer/>
      {showSignup && <SignUp onClose={handleCloseSignup} onLoginClick={toggleLogin}/>}
      {showLogin && <LogIn onClose={handleCloseLogin} onSignupClick={toggleSignUp} />}
    </div>
  )
}











