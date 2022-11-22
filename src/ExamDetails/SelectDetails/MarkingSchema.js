import React from 'react'

// const SingAnsType =[['Corect Answer : ',+4],['Wrong Answer : ',-1],['Not Answered : ', 0]]
const correctAnswer = 4
const wrongAnswer = 1
const notAnswered = 0
function MarkingSchema() {
  return (
    <>
    
    <div class="content-cont">
      <h4>Single Answer Type</h4>
      <div class="schema-display">
        <h5 class="negative-space-div content-text">Correct Answer : </h5>
        <h5 class="green-text negative-space-div content-text">+{correctAnswer}</h5>
      </div>
      <div class="schema-display">
        <h5 class="negative-space-div content-text">Wrong Answer : </h5>
        <h5 class="red-text negative-space-div content-text">-{wrongAnswer}</h5>
      </div>
      <div class="schema-display">
        <h5 class="negative-space-div content-text">Not Answered : </h5>
        <h5 class="grey-text negative-space-div content-text">{notAnswered}</h5>
      </div>

      <h4>Multiple Choice Type</h4>
      <div class="schema-display">
        <h5 class="negative-space-div content-text">Correct Answer : </h5>
        <h5 class="green-text negative-space-div content-text">+{correctAnswer}</h5>
      </div>
    </div>

    </>
  )
}

export default MarkingSchema