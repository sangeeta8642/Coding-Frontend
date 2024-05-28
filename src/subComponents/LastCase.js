import React from 'react'
import { Button } from 'react-bootstrap'

export default function LastCase({
    currentPage,
    PrevPage,
    handleNextTopicClick,
    handlePracticeClick
  }) {
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
      {currentPage > 0 && (
        <Button
          variant='success'
          style={{ color: '#fff' }}
          onClick={handleNextTopicClick}>Next Topic</Button>
      )}
      <Button
        variant='primary'
        style={{ color: '#fff' }}
        onClick={handlePracticeClick}>
        Let's Practice
      </Button>
    </div>
    </div>
  )
}
