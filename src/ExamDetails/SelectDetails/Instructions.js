import React from 'react'
import '../Type.css'

function Instructions() {

  const instructions=['1. The examination does not require using any paper, pen, pencil and calculator', 
  '2. Every student will take the examination on a Laptop/Desktop/Smartphone', 
  '3. On Computer screen every student will be given objective type and Multiple choice questions', 
  '4. Each student will get questions and answers in different order selected randomly from a fixed question databank', 
  '5. The students just need to click on the right choice/correct option from the MCQs given with each question. For MCQs each question has four options and the candidate has to click the appropiate'
  ]

  return (
    <>
    <div class="content-cont">
      <h3 class="green-text">Instructions to the Candidates</h3>
      {instructions.map((instruct) => <h4 class="content-text">{instruct}</h4>)}
    </div>
    
    </>
  )
}

export default Instructions