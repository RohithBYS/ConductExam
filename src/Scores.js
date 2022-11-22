import React from 'react'

export default function Scores(props) {
    const totalMarks=10
    const negtiveMarks=props.negScore
    const marksScored= props.positiveScores
  return (
    <>
     <div class="main-cont arrange-col arrange-end">
            <h2 class="main-head-text">Egnify Grand Test</h2>  
     </div>
     <div class="marks-round">
            <h4 class="blue-text">{marksScored-negtiveMarks}/{totalMarks}</h4>
     </div>
     <div class="marks-cont">
        <h4>Negative Marks : {negtiveMarks} </h4>
        <h4>Marks Scored: {marksScored}</h4>
        <h4>Total Marks: {marksScored-negtiveMarks} </h4>
     </div>
       

    </>
  )
}
