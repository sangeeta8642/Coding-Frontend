import "../Css Files/Screen2.css"
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css';

export default function Screen2() {
  const [Languages, setLanguages] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  const nav = useNavigate();
  const Colors = [{ t: "#ff0051", b: "#ff3e88" }, { t: "#03c7c2", b: "#04eeff" }, 
  { t: "#8d4be0", b: "#d875ff" },{ t: "#ff3131", b: "#ff5e00" }, 
  { t: "#567cff", b: "#8ea8ff" }, { t: "#39ff14", b: "#7fff00" },
  { t: "#4bbbff", b: "#6aecff" }, { t: "#02ae28", b: "#39ff14" }, 
  { t: "#fe2da3", b: "#fe7cfa" }, { t: "#12e195", b: "#0ff0fc" },
  { t: "#ff3131", b: "#ff5e00" }, { t: "#567cff", b: "#8ea8ff" },
  { t: "#39ff14", b: "#7fff00" },{ t: "#4bbbff", b: "#6aecff" },
  { t: "#02ae28", b: "#39ff14" }, { t: "#fe2da3", b: "#fe7cfa" },
  { t: "#12e195", b: "#0ff0fc" }]

  useEffect(() => {
    getLanguage()
  }, [])

  async function getLanguage() {
    let result = await fetch("http://localhost:5000/getLanguages");
    result = await result.json();
    setLanguages(result)
  }

  async function searchItem(e) {
    let key = e.target.value;
    if (key) {
      let res = await fetch(`http://localhost:5000/search/${key}`);
      res = await res.json();
      setLanguages(res);
    } else {
      getLanguage()
    }
  }

  return (
    <div className='screen2'>
      <div ><input className="mainInput" type="text" 
      onChange={searchItem} placeholder="Search For Anything..."  /></div>
      
      <div className='languages'>
        {Languages.map((language, i) => (
          <div className='language' key={i} onClick={() => {
            if(user){
              nav(`/${language.name}`)
            }else{
              // alert("Please Login or Sign up")
              Swal.fire({
                title: 'Please Login or Sign up to access this field',
                // text: 'Remember Your Password',
                icon: "failed",
                // timer: 1500,
                timerProgressBar: true,
                toast: true,
                position: 'top',
                showConfirmButton: true
                
            });
            }
          }}>
            <div className='l top' style={{ backgroundColor: Colors[i % Colors.length].t }}>
              <img src={language.image} alt={language.name} />
            </div>
            <div className='l btm' style={{ backgroundColor: Colors[i % Colors.length].b }}>
              <h4 style={{ color: "#000" }}>{language.name}</h4>
              <p>{language.description}.</p>
            </div>
          </div>
        ))}
        {Languages.length === 0 && (
          <div style={{ textAlign:"center", marginTop:"100px", 
          paddingBottom:"125px", color: "#071263" }}><h1>No language found</h1></div>
        )}
      </div></div>);}
