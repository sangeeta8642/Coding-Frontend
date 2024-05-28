import "../Css Files/ContentPage.css"
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import "../Css Files/ContentPage.css"
import StepIndicator from "../subComponents/StepIndicator";
import Compiler from "../components/Compiler";
import LastCase from "../subComponents/LastCase";

export default function ContentPage(props) {

  let topicName = props.name,
    languageName = props.language,
    cases = props.cases,
    questions = props.questions,
    complete = props.complete
  const language = languageName.toLowerCase()
  console.log(language);

  const user = JSON.parse(localStorage.getItem("user"))

  const [queAns, setQueAns] = useState([])
  const [currentPage, setCurrentPage] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');

  const nav = useNavigate()


  useEffect(() => {
    getQues()
  }, [])

  function PrevPage() {
    if (currentPage > 0 && currentPage < cases.length)
      setCurrentPage(currentPage - 1)
    setUserAnswer('')
  }

  function NextPage() {
    setCurrentPage(currentPage + 1);
    setUserAnswer('');
  }

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setUserAnswer(inputValue);
  };

  async function storeQues() {
    if (user) {
      const userId = user._id
      let data = { userId, topicName, languageName, questions }
      let result = await fetch("http://localhost:5000/setQues", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      result = await result.json()
      getQues();
      alert("Your Data Has Been Stored..!!")
    }
  }

  async function getQues() {
    if (user) {
      const userId = user._id
      let data = { userId, topicName, languageName, questions }
      let result = await fetch("http://localhost:5000/setQuestions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      result = await result.json()
      setQueAns(result)
    }
    else {
      setQueAns(questions)
    }
  }

  // const ChLanguage = () => {
  //   nav('/codeItYourSelf')
  // }

  const renderPage = () => {
    const handleNextTopicClick = () => {
      storeQues();
      nav(`/${languageName}`);
    };

    const handlePracticeClick = () => {
      nav('/codeItYourSelf');
    };
    const currentItem = cases[currentPage];
    switch (currentItem.value) {
      case "Case1":
        return (
          <div className='content'>
            <p>{currentItem.data}</p>
            <div className="contentBtns">
              <Button
                variant='success'
                style={{ color: '#fff' }}
                onClick={NextPage}>Next</Button>
              <br /><br />
              {currentPage > 0 && (
                <Button
                  variant='danger'
                  style={{ color: '#fff' }}
                  onClick={PrevPage}>Back</Button>)}
            </div>
          </div>);

      case "Case2":
      case "Case3":
      case "Case4":
      case "Case5":
      case "Case6":
      case "Case7":
        return (
          <div className='content'>
            <p>{currentItem.data}</p>
            <div className="contentBtns">
              {currentPage > 0 && (
                <Button
                  variant='danger'
                  style={{ color: '#fff' }}
                  onClick={PrevPage}>Back</Button>)}

              <Button
                variant='danger'
                style={{ color: '#fff' }}
                onClick={NextPage}>Next</Button></div></div>);

      case "Case8":
        return (
          <div className='content case-div'>
            <p>{queAns[0].q}</p>
            <input type="text" value={userAnswer} onChange={handleInputChange} />
            <div className="contentBtns">
              {currentPage > 0 && (
                <Button
                  variant='danger'
                  style={{ color: '#fff' }}
                  onClick={NextPage}
                  disabled={userAnswer !== queAns[0].a}>Next</Button>)}
              <br /><br />
              {currentPage > 0 && (
                <Button
                  variant='danger'
                  style={{ color: '#fff' }}
                  onClick={PrevPage}>Back</Button>)}
              <br /><br />
            </div></div>);


      case "Case9":
        return (
          <div className='content case-div'>
            <p>{queAns[1].q}</p>
            <input type="text" value={userAnswer} onChange={handleInputChange} />
            <div className="contentBtns">
              {currentPage > 0 && (
                <Button
                  variant='danger'
                  style={{ color: '#fff' }}
                  onClick={NextPage}
                  disabled={userAnswer !== queAns[1].a}>Next</Button>)}
              <br /><br />
              {currentPage > 0 && (
                <Button
                  variant='danger'
                  style={{ color: '#fff' }}
                  onClick={PrevPage}>Back</Button>)}
            </div></div>);

      case "Case10":
        return (
          <div className='content case-div'>
            <p>{queAns[2].q}</p>
            <input type="text" value={userAnswer} onChange={handleInputChange} />
            <div className="contentBtns">
              {currentPage > 0 && (
                <Button
                  variant='danger'
                  style={{ color: '#fff' }}
                  onClick={NextPage}
                  disabled={userAnswer !== queAns[2].a}>Next</Button>)}
              <br /><br />
              {currentPage > 0 && (
                <Button
                  variant='danger'
                  style={{ color: '#fff' }}
                  onClick={PrevPage}>Back</Button>)}
              <br></br>

              <br></br>

            </div></div>);

      case "Lastcase":
        const handleNextTopicClick = () => {
          storeQues();
          nav(`/${languageName}`);
        };

        const handlePracticeClick = () => {
          // const language = languageName.toLowerCase();
          nav(`/codeItYourSelf/${language}`);
        };

        return (
          <div>
            <div className='content'>
              <h1>Yayy..!! <br />You have successfully completed this topic</h1>
              <br /><br /><br />{'  '}
              <img src="https://cdn.pixabay.com/photo/2019/09/24/17/18/dog-4501822_640.png" />
            </div>
            <div className="contentBtns">
              {currentPage > 0 && (
                <Button
                  variant='danger'
                  style={{ color: '#fff' }}
                  onClick={PrevPage}>Back</Button>
              )}
              <Button
                variant='success'
                style={{ color: '#fff' }}
                onClick={handleNextTopicClick}>Next Topic</Button>
              <Button
                variant='primary'
                style={{ color: '#fff' }}
                onClick={handlePracticeClick}>
                Let's Practice
              </Button>
            </div>
          </div>
        );
      default:
        return <p>Page not found</p>;
    }
  };
  return (
    <div className='contentPage'>
      <div className='contentDiv'>
        <div className='contentHeading'>
          <h1>{topicName}</h1>
        </div>
        <StepIndicator steps={Array.from({ length: cases.length }, (_, i) =>
          `${i + 1}`)} currentStep={currentPage} />
        {renderPage()}</div></div>)
}

