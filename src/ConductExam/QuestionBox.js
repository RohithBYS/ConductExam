import React from 'react'
import { useState } from 'react';
// import MultipleChoice from './QuestionType/MultipleChoice'
import './QuestionType/QuestionType.css'

export default function QuestionBox(props) {

  const ansType='Single Answer Type'
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null)
  const [answered, setAnswered] = useState(false)
  const [review, setReview] = useState(false)
  const [score, setScore] = useState(0);
  const [negScore,setNegScore] = useState(0);
  const [submit, setSubmit] = useState(false)

  
  

  // const quest="Let A = {1, 2, 3, … , 14}. Define a relation R from A to A by R = {(x, y): 3x – y = 0, where x, y ∈ A}. Determine its domain,Let A = {1, 2, 3, … , 14}. Define a relation R from A to A by R = {(x, y): 3x – y = 0, where x, y ∈ A}. Determine its domain"

  //defining question
 
  const questions = [
    {
        text: " The decimal expansion of 22/7  is",
        id: 1,
        ansStatus: 0, 
        options: [
          { id: 'A', text: "Terminating", isCorrect: false },
          { id: 'B', text: "Non-terminating and repeating", isCorrect: true },
          { id: "C", text: "Non-terminating and Non-repeating", isCorrect: false },
          { id: 'D', text: "None of the above", isCorrect: false },
        ],
      },
      {
        text: 'What is the capital of France?',
        id: 2,
        ansStatus: 0,
        options: [
          { id: 'A', text: "New York City", isCorrect: false },
          { id: 'B', text: "London", isCorrect: false },
          { id: 'C', text: "Paris", isCorrect: true },
          { id: 'D', text: "Dublin", isCorrect: false },
        ],
      },
      {
        text: 'Who is CEO of Tesla?',
        id: 3,
        ansStatus: 0,
        options: [
          { id: 'A', text: "Sundar Pichai", isCorrect: false },
          { id: 'B', text: "Satya Nadella", isCorrect: false },
          { id: 'C', text: "Larry Page", isCorrect: false },
          { id: 'D', text: "Elon Musk", isCorrect: true },
        ],
      },
      {
        text:'The iPhone was created by which company?',
        id: 4,
        ansStatus: 0,
        options: [
          { id: 'A', text: "Apple", isCorrect: true },
          { id: 'B', text: "Intel", isCorrect: false },
          { id: 'C', text: "Amazon", isCorrect: false },
          { id: 'D', text: "Microsoft", isCorrect: false },
        ],
      },
      {
        text: 'How many Harry Potter books are there?',
        id: 5,
        ansStatus: 0,
        options: [
          { id: 'A', text: "1", isCorrect: false },
          { id: 'B', text: "4", isCorrect: false },
          { id: 'C', text: "6", isCorrect: false },
          { id: 'D', text: "7", isCorrect: true },
        ],
      },
      {
        text: "What is the capital of America?",
        id: 6,
        ansStatus: 0,
        options: [
          { id: 'A', text: "New York City", isCorrect: false },
          { id: 'B', text: "Boston", isCorrect: false },
          { id: 'C', text: "Santa Fe", isCorrect: false },
          { id: 'D', text: "Washington DC", isCorrect: true },
        ],
      },
      {
        text: 'What is the capital of France?',
        id: 7,
        ansStatus: 0,
        options: [
          { id: 'A', text: "New York City", isCorrect: false },
          { id: 'B', text: "London", isCorrect: false },
          { id: 'C', text: "Paris", isCorrect: true },
          { id: 'D', text: "Dublin", isCorrect: false },
        ],
      },
      {
        text: 'Who is CEO of Tesla?',
        id: 8,
        ansStatus: 0,
        options: [
          { id: 'A', text: "New York City", isCorrect: false },
          { id: 'B', text: "Boston", isCorrect: false },
          { id: 'C', text: "Santa Fe", isCorrect: false },
          { id: 'D', text: "Washington DC", isCorrect: true },
        ],
      },
      {
        text:'The iPhone was created by which company?',
        id: 9,
        ansStatus: 0,
        options: [
          { id: 'A', text: "Apple", isCorrect: true },
          { id: 'B', text: "Intel", isCorrect: false },
          { id: 'C', text: "Amazon", isCorrect: false },
          { id: 'D', text: "Microsoft", isCorrect: false },
        ],
      },
      {
        text: 'How many Harry Potter books are there?',
        id: 10,
        ansStatus: 0,
        options: [
          { id: 'A', text: "1", isCorrect: false },
          { id: 'B', text: "4", isCorrect: false },
          { id: 'C', text: "6", isCorrect: false },
          { id: 'D', text: "7", isCorrect: true },
        ],
      },    
  ];

  

  //Previous Question Navigating
  const handlePrevious=()=>{
    if (currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  //navigating to next question
  const handleNext = ()=>{
    //Updating the status
    // console.log("Prev Status of "+questions[currentQuestion].ansStatus)

    //if answered and marked for review 
    if(answered && review){
      questions[currentQuestion].ansStatus=3
      console.log("Updated Status  "+questions[currentQuestion].ansStatus)
    }
    //not answered and marked for review
    else if(!answered && review){
      questions[currentQuestion].ansStatus=4
      console.log("Updated Status  "+questions[currentQuestion].ansStatus)
    }

    else if(answered && !review){
      // console.log("Answered:")
      questions[currentQuestion].ansStatus=1
      console.log("Updated Status  "+questions[currentQuestion].ansStatus)
    }
    else{
      // console.log("Not Answered")
      questions[currentQuestion].ansStatus=2
      console.log("Updated Status  "+questions[currentQuestion].ansStatus)
    }
    

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    }
    
      
    
    props.onRecieveData(answered,review,submit,score,negScore,questions[currentQuestion].id,questions)
    setAnswered(false) //making it null after submit
    setReview(false)

    if(currentQuestion+2===questions.length){
      setSubmit(true)
      // handleNext()
    }
    
  };

  //on selecting an option
  const optionClicked = (choosedOption, isCorrect) =>{
    
   if(selectedOption === choosedOption){
    setSelectedOption(null)
     //scores
    //  if (isCorrect) {
    //   setScore(score - 1);
    // }
    // if (!isCorrect){
    //   setNegScore(negScore-1);
    // }
 
   }
   else{
    setSelectedOption(choosedOption)
    setAnswered(true)


    //scores
    if (isCorrect) {
      setScore(score + 1);
    }
    if (!isCorrect){
      setNegScore(negScore+1);
    }

   }

   
  } 

   //on selecting review later
   const reviewLater = ()=>{
    setReview(true)
  }

  


  return (
    <>
      <div class="question-display-box">
        <div class="space-bw-cont">
          <div class="arrange-col align-cent">
             <p class="question-num">{currentQuestion+1}</p>
              <h4>{ansType}</h4>
          </div>
          <div>
            <div>
              <input type="checkbox" name="terms" value="accept" checked={review} onClick={()=>reviewLater()} ></input>
              <label for="terms">Review Later</label><br></br>
            </div>
          </div>
        </div>

        {/* Question to Display */}
        <h4>{questions[currentQuestion].text}</h4>
        <div class="line-break"></div>
        {/* <MultipleChoice/> */}

        {/* options to display */}
        {
            questions[currentQuestion].options.map((option) => {
              return (
                <div
                  key={option.id}
                  onClick={() => optionClicked(option.id, option.isCorrect)}
                  //  className="option-box-cont option-gap option-bpx-gap" 
                  className= {answered && selectedOption=== option.id ? "option-box-cont option-gap option-bpx-gap option-box-cont-active" :"option-box-cont option-gap option-bpx-gap" }
                >
                  <h4 className ={answered && selectedOption=== option.id ? "option-box-active" : "option-box"}>{option.id}</h4>
                  <p class="options-font">{option.text}</p>
                </div>
              );
            })
                
            }
           
            {/* <h4>Score : {score}</h4>
            <h4>Negative Score : {negScore}</h4> */}


      </div>

     
      {/* navigating questions */}
      <div>
            <div class="navigate-quest-box">
                <button disabled={currentQuestion<=0} type="submit" class="navigate-btn" onClick={handlePrevious}  >Previous</button>
                <button disabled={currentQuestion+1===questions.length} type="submit" class="navigate-btn" onClick={handleNext} >Next</button> 
            </div>
            
        </div>
    </>
  )
}
