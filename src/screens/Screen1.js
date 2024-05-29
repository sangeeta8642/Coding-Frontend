import "../Css Files/Screen1.css"
import { Button } from 'react-bootstrap'
import React, { useState , useEffect } from 'react'
import img from "../images/workplace.png"
import { Element } from "react-scroll"

export default function Screen1() {

    const [username, setName] = useState()

    const userData = JSON.parse(localStorage.getItem("user"))

    useEffect(() => {
        getProfile();
    }, []);


    async function getProfile() {
        if (userData) {
            try {
                let result = await fetch(`http://localhost:5000/getProfile/${userData._id}`);
                // let result = await fetch(`http://localhost:5000/getProfile/${user._id}`);
                result = await result.json();
                console.log(result.Fname);
                setName(result.Fname)
            } catch (error) {
                console.error('Error fetching profile:', error);
            }
        }
    }


    return (
        <Element name="screen1">
            <div className='screen1'>
                <div className="introHeader">
                    {
                        userData?<> <h1 className="introHeaderh1" >Welcome <span style={{textDecoration:"underline"}}>{userData.Fname}</span> <br></br> To The World's Best Coding Platform</h1>
                        <p>“Break the code barrier with us! We invite you to a realm where learning is exciting, coding is an art, and your journey to mastery begins now."</p>
                      </>:<> <h1 className="introHeaderh1" >Welcome You <br></br> To The World's Best Coding Platform</h1>
                    <p>“Break the code barrier with us! We invite you to a realm where learning is exciting, coding is an art, and your journey to mastery begins now."</p>
                  
                      </>
                    }
                     {/* <Button variant="info">Explore More..!!</Button> */}
                </div>
                <div className="introImg">
                    <img src={img} />
                </div>
            </div>
        </Element>
    )
}
