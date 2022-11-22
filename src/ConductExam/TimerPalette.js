import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import timeImg from '../images/time.png'
import './ConductExam.css'
import CountDownTimer from '../CountDownTimer'



function TimerPalette(props) {

  const [answered, setAnswered]= useState(0)
  const hoursMinSecs = {hours:0, minutes: 30, seconds: 60}
  // console.log("Data in child Ans : "+props.answered)
  // console.log("Data in child Review : "+props.reviewed) 
  
 

  return (
    <>
      

      <div class="info-box" >
        <div class="timer-display">
          <img src={timeImg} width="25" height="25" alt="timeImg" />
          <div class="timer-button"> <CountDownTimer class="fnt-size" hoursMinSecs={hoursMinSecs}/></div>
         
        </div>
        <div class="arrange-col align-cent">
          <p class="number-box answered-back-color">{props.answered}</p>
          <p class="answered-font-color">Answered</p>
        </div>
        <div class="arrange-col align-cent">
          <p class="number-box not-answered-back-color font-white">{props.notAnswered}</p>
          <p class="not-answered-font-color">Not Answered </p>
        </div>
        <div class="arrange-col align-cent">
          <p class="number-box review-back-color font-white">{props.ansMarkedReview}</p>
          <p class="review-font-color">Answered and marked for review</p>
        </div>
        <div class="arrange-col align-cent">
          <p class="number-box not-ans-review-back font-white">{props.notAnsMarkedReview}</p>
          <p class="not-ans-review-font">Not Answered and marked for review</p>
        </div>
      </div>
     
    </>
  )
}

export default TimerPalette