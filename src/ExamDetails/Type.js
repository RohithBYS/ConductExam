import React from 'react'
import './Type.css'
import questionImg from '../images/question.png'
import markImg from '../images/marking.png'
import timeImg from '../images/time.png'
import { useState } from 'react'
import Syllabus from './SelectDetails/Syllabus'
import MarkingSchema from './SelectDetails/MarkingSchema'
import Instructions from './SelectDetails/Instructions'

function Type() {

  const [chooseRender, setChooseRender] = useState('syllabus')

  // handler function to choose which one to render
  const chooseToRender = (a) => {
    setChooseRender(a)
  }

  return (
    <>
      <div class="main-cont"> 
      {/* this is for displaying images */}
        <div class="img-gap">
          <img src={questionImg} width="25" height="25" alt="questionImg" /> 
          <img src={markImg} width="25" height="25" alt="markImg" />
          <img src={timeImg} width="25" height="25" alt="timeImg" />
          </div>
          <div class="arrange-col image-text-below">
            <h5>40Q</h5>
            <h5>90M</h5>
            <h5>180</h5>
        </div>
        
        <div class="text arrange-col" >
            <h2 class={chooseRender=== 'syllabus' ? 'border-line-active' : 'border-line'} onClick={() => chooseToRender("syllabus")}>Syllabus</h2>
            <h2 class={chooseRender=== 'markingschema' ? 'border-line-active' : 'border-line'}  onClick={() => chooseToRender("markingschema")}>Marking Schema</h2>
            <h2 class={chooseRender=== 'instructions' ? 'border-line-active' : 'border-line'}  onClick={() => chooseToRender("instructions")}>Instructions</h2>
        </div>
        
       
        {chooseRender === 'syllabus' ? <Syllabus/> : null } 
        {chooseRender === 'markingschema' ? <MarkingSchema/> : null }
        {chooseRender === 'instructions' ? <Instructions/> : null } 
        <div class="black-line"></div>
      </div>

    </>
  )
}

export default Type
