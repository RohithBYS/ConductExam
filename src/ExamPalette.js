import React, { useState } from 'react'
// import { useState } from 'react'
import TimerPalette from './ConductExam/TimerPalette'
import ExamHeader from './ConductExam/ExamHeader'
import QuestionBox from './ConductExam/QuestionBox'
import ResponseBox from './ConductExam/ResponseBox'
import Scores from './Scores'

// import NavigateQuestion from './ConductExam/NavigateQuestion'

function ExamPalette() {



  const [ans,setAns]= useState(false)
  const [review, setReview]= useState(false)
  const [enableSubmit, setEnableSubmit]= useState(false)
  const [score, setScore]= useState(0)
  const [negativeScore, setNegativeScore] = useState(0)
  const [QuestionStatus, setQuestionStatus] = useState(0)
  const [QuestionID, setQuestionID] = useState(0)

  const [ansCount, setAnsCount] = useState(0)
  const [notAnsCount, setnotAnsCount] = useState(0)
  const [AMRCount, setAMRCount]= useState(0)
  const [notAMRCount, setNotAMRCount]= useState(0)

  const [QuestionBank, setQuestionBank] = useState([])

  // const response =[0,0,0,0,0,0,0,0,0,0]
  const [response,setResponse]=useState([0,0,0,0,0,0,0,0,0,0])

  const getData = (ans,review,submit,score,negScore,Qid,Questions) =>{
    // console.log("Question ID : "+Qid)
    setQuestionBank(Questions)
    // response[Qid-1]=5
    // console.log("Question Status at "+Questions[Qid-1].ansStatus)
    if(ans && review){
      // console.log("Answered and marked for Review")
      setAns(true)
      setReview(true)
      setAMRCount(AMRCount+1)
      setQuestionStatus(3)
    }
    else if(!ans && review){
      // console.log("Not Answered and marked for Review")
      setAns(false)
      setReview(true)
      setNotAMRCount(notAMRCount+1)
      setQuestionStatus(4)
    }
    else if(ans && !review){
      // console.log("Answered:")
      setAns(true)
      setReview(false)
      setAnsCount(ansCount+1)
      setQuestionStatus(1)
    }
    else{
      // console.log("Not Answered")
      setAns(false)
      setReview(false)
      setnotAnsCount(notAnsCount+1)
      setQuestionStatus(2)
    }

    if(submit === true){
      setEnableSubmit(true)
     
    }
      
   
    setScore(score)
    setNegativeScore(negScore)
    setQuestionID(Qid)

    // console.log("Question ID : "+QuestionID)
    // console.log("Question Status : "+QuestionStatus)
  // if(Qid ===2)
  // console.log("Question Bank at "+Questions[Qid-1].ansStatus)
  // console.log("Response Values "+response[Qid-1])
  response[Qid-1]=Questions[Qid-1].ansStatus
  // console.log("Response box in parnet : "+response)
  setResponse(response)
  console.log("Reponse of question : "+Questions[Qid-1].ansStatus)
  // console.log("Respone at : "+response[3])
  // console.log("Type of Question Bank "+typeof(QuestionBank))
  // console.log("Type of Questions "+typeof(Questions))
  // console.log("Response status :"+response[Qid])
  }
  
  //on Submitting data
  const submitData = (submit) =>{
     
      setEnableSubmit(submit)
  }


  return (
    <>
          {/* <h4>{QuestionBank[QuestionID].ansStatus}</h4> */}

        {
          enableSubmit === false ? 
            <div>
              <ExamHeader receieveSubmit={submitData}/>
              <TimerPalette answered={ansCount} notAnswered={notAnsCount} ansMarkedReview={AMRCount} notAnsMarkedReview={notAMRCount}/>
              <QuestionBox onRecieveData={getData} />
             
              
              {/* <ResponseBox value1={QuestionID} value2={QuestionStatus}/> */}
              <ResponseBox value1={QuestionID} value={response}/>
            </div> : 
            <Scores positiveScores={score} negScore={negativeScore}/>
        }

      
        
        
    </>
  )
}

export default ExamPalette