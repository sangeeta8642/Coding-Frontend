import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Table } from 'react-bootstrap'
import '../Css Files/MyProgress.css'

export default function MyProgress() {

  const user = JSON.parse(localStorage.getItem("user"))
  const [Languages, setLanguages] = useState([])
  const nav = useNavigate();

  useEffect(() => {
    getLanguages()
  }, [])


  async function getLanguages() {
    let result = await fetch(`https://codebud-ewkb.onrender.com/getLanguage/${user._id}`)
    result = await result.json()
    console.log(result)
    setLanguages(result)
  }
  return (
    <div>
      
    <div className='progressPage'>
    {/* <br></br><svg onClick={() => nav('/')} style={{ cursor: "pointer",textAlign:"left" }} stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg> */}
      
      {
        Languages.length!=0?<><h1>My Progress</h1><br/><br/><br/>
        <Table variant='info'>
          <thead>
            <tr>
              <th>Languages</th>
              <th>Topics</th>
            </tr>
          </thead>
          <tbody>
            {Languages.map(language => (
              <tr key={language.languageName}>
                <td onClick={() => {
                  nav(`/${language.languageName}`)
                }}>{language.languageName}</td>
                <td>
                  <ul className='list'>
                    {language.topics.map(topic => (
                      <li key={topic.topicName} onClick={() => {
                        nav(`/${language.languageName}/${topic.topicName}`)
                      }}>{topic.topicName}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </Table></>:<><h1>No Progress yet</h1></>
      }
      <br></br>
      <br></br>
      <br></br>
      <Button variant='danger' onClick={()=>{nav("/")}}>Back to Home</Button>
    </div>
    </div>
  );
}
