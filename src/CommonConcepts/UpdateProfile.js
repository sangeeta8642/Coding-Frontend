import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import "../Css Files/UpdateProfile.css";
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css';

export default function UpdateProfile() {
  const params = useParams();
  const nav = useNavigate();
  const userData = JSON.parse(localStorage.getItem("user"));
  const [selectedImage, setSelectedImage] = useState(null);
  const [userInfo, setUserInfo] = useState({
    Fname: "",
    Lname: "",
    profession: "",
    email: "",
    mobile: "",
    bio: "",
    username: "",
    image: null
  });

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setUserInfo({
      ...userInfo,
      image: file
    });
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  async function getProfile() {
    if (userData) {
      let result = await fetch(`http://localhost:5000/getProfile/${params.id}`);
      result = await result.json();
      console.log(result);

      // Check if result.image is falsy or an empty string
      if (!result.image || result.image === '') {
        setSelectedImage(null); // Set selectedImage to null if there's no image
      } else {
        setSelectedImage(`http://localhost:5000/${result.image}`);
      }

      setUserInfo({
        ...userInfo,
        Fname: result.Fname,
        Lname: result.Lname,
        bio: result.bio,
        profession: result.profession,
        username: result.username,
        mobile: result.mobile,
        email: result.email
      });
    }
  }

  async function updateUser() {
    const formData = new FormData();
    formData.append("image", userInfo.image);
    formData.append("Fname", userInfo.Fname);
    formData.append("Lname", userInfo.Lname);
    formData.append("username", userInfo.username);
    formData.append("email", userInfo.email);
    formData.append("profession", userInfo.profession);
    formData.append("bio", userInfo.bio);

    try {
      let result = await fetch(`http://localhost:5000/updateProfile/${params.id}`, {
        method: "POST",
        body: formData
      });

      if (result.ok) {
        result = await result.json();
        console.log(result);

        Swal.fire({
          title: 'Profile Updated Successfully',
          // text: 'Remember Your Password',
          icon: "success",
          timer: 2500,
          timerProgressBar: true,
          toast: true,
          position: 'top',
          showConfirmButton: false
        });
        setTimeout(() => {
          nav("/profile");
        }, 2500);

        // alert("Profile Updated Successfully");
      } else {
        throw new Error("Failed to update profile");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile");
    }
  }

  async function deleteImage() {
    if (userData) {
      let result = await fetch(`http://localhost:5000/deleteImage/${params.id}`, {
        method: "PUT"
      })
      result = await result.json();
      getProfile()
      setSelectedImage(null)
      console.log(result)
      alert("Your Profile Pic has been deleted..!!")
    }

  }

  return (
    <div className="profilePage">
      <div className="profileDiv">
        <svg onClick={() => nav('/profile')} style={{ cursor: "pointer" }} stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        <br></br><br />
        <div className='profile-table-container'>
          <table>
            <tr>
              <td>
                <h1>Edit Profile</h1>
              </td>
            </tr>
            <br></br>
            <br></br>
            <tr>
              <td>
                <label htmlFor="imageUpload" style={{ cursor: 'pointer' }}>
                  <h4 style={{ textDecoration: "underline" }} >Upload an image:</h4>
                  <input
                    type="file"
                    id="imageUpload"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ display: 'none' }}
                  />
                </label>
              </td>
              <td>
                {/* {console.log(selectedImage)} */}
                {selectedImage !== null && selectedImage !== "" ? (
                  <div>
                    <img
                      src={selectedImage}
                      alt="Selected"
                      style={{ width: "60px", height: "60px", borderRadius: "50%" }}
                    />
                    <Button variant='danger' onClick={deleteImage}>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 1024 1024"
                        height="1.5em"
                        width="1.5em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path>
                      </svg>
                    </Button>
                  </div>
                ) : null}
              </td>
            </tr>
            <br />
            <br />
            <tr>
              <td>
                <h4>Bio:</h4>
                <input type='text' value={userInfo.bio} name="bio" onChange={handleChange} />
              </td>
              <td>
                <h4>Username:</h4>
                <input type='text' value={userInfo.username} name='username' onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <td>
                <h4>First Name:</h4>
                <input type='text' value={userInfo.Fname} name='Fname' onChange={handleChange} />
              </td>
              <td>
                <h4>Last Name:</h4>
                <input type='text' value={userInfo.Lname} name='Lname' onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <td>
                <h4>Email:</h4>
                <input type='text' value={userInfo.email} name='email' onChange={handleChange} />
              </td>
              <td>
                <h4>Profession:</h4>
                <input type='text' value={userInfo.profession} name='profession' onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <td>
                <h4>Mobile:</h4>
                <input type='text' value={userInfo.mobile} name='mobile' onChange={handleChange} />
              </td>
              <td>
                <Button variant='info' onClick={updateUser} >Update</Button>
                {/* <Button variant='danger' onClick={()=>nav('/profile')}>Back</Button> */}

              </td>
              <td>
                {/* <Button variant='danger' onClick={} ></Button> */}
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
