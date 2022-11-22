import React from 'react'
import { useState } from 'react'
import './QuestionType.css'
export default function MultipleChoice() {

    // const [selectOption, setSelectOption] =useState(false)
    //  const option = ['A', 'B', 'C', 'D']
    // const answers = ['Option 1', 'Option 2', 'Option 3', 'Option 4']

    // const questions = [
    //     {
    //         text: "What is the capital of America?",
    //         options: [
    //           { id: 0, text: "1: New York City", isCorrect: false },
    //           { id: 1, text: "2: Boston", isCorrect: false },
    //           { id: 2, text: "3: Santa Fe", isCorrect: false },
    //           { id: 3, text: "4: Washington DC", isCorrect: true },
    //         ],
    //       },
    //       {
    //         text: 'What is the capital of France?',
    //         options: [
    //           { id: 0, text: "1: New York City", isCorrect: false },
    //           { id: 1, text: "2: London", isCorrect: false },
    //           { id: 2, text: "3: Paris", isCorrect: true },
    //           { id: 3, text: "4: Dublin", isCorrect: false },
    //         ],
    //       },
    //       {
    //         text: 'Who is CEO of Tesla?',
    //         options: [
    //           { id: 0, text: "1: New York City", isCorrect: false },
    //           { id: 1, text: "2: Boston", isCorrect: false },
    //           { id: 2, text: "3: Santa Fe", isCorrect: false },
    //           { id: 3, text: "4: Washington DC", isCorrect: true },
    //         ],
    //       },
    //       {
    //         text:'The iPhone was created by which company?',
    //         options: [
    //           { id: 0, text: "1: Apple", isCorrect: true },
    //           { id: 1, text: "2: Intel", isCorrect: false },
    //           { id: 2, text: "3: Amazon", isCorrect: false },
    //           { id: 3, text: "4: Microsoft", isCorrect: false },
    //         ],
    //       },
    //       {
    //         text: 'How many Harry Potter books are there?',
    //         options: [
    //           { id: 0, text: "1: 1", isCorrect: false },
    //           { id: 1, text: "2: 4", isCorrect: false },
    //           { id: 2, text: "3: 6", isCorrect: false },
    //           { id: 3, text: "4: 7", isCorrect: true },
    //         ],
    //       },
    //       {
    //         text: "What is the capital of America?",
    //         options: [
    //           { id: 0, text: "1: New York City", isCorrect: false },
    //           { id: 1, text: "2: Boston", isCorrect: false },
    //           { id: 2, text: "3: Santa Fe", isCorrect: false },
    //           { id: 3, text: "4: Washington DC", isCorrect: true },
    //         ],
    //       },
    //       {
    //         text: 'What is the capital of France?',
    //         options: [
    //           { id: 0, text: "1: New York City", isCorrect: false },
    //           { id: 1, text: "2: London", isCorrect: false },
    //           { id: 2, text: "3: Paris", isCorrect: true },
    //           { id: 3, text: "4: Dublin", isCorrect: false },
    //         ],
    //       },
    //       {
    //         text: 'Who is CEO of Tesla?',
    //         options: [
    //           { id: 0, text: "1: New York City", isCorrect: false },
    //           { id: 1, text: "2: Boston", isCorrect: false },
    //           { id: 2, text: "3: Santa Fe", isCorrect: false },
    //           { id: 3, text: "4: Washington DC", isCorrect: true },
    //         ],
    //       },
    //       {
    //         text:'The iPhone was created by which company?',
    //         options: [
    //           { id: 0, text: "1: Apple", isCorrect: true },
    //           { id: 1, text: "2: Intel", isCorrect: false },
    //           { id: 2, text: "3: Amazon", isCorrect: false },
    //           { id: 3, text: "4: Microsoft", isCorrect: false },
    //         ],
    //       },
    //       {
    //         text: 'How many Harry Potter books are there?',
    //         options: [
    //           { id: 0, text: "1: 1", isCorrect: false },
    //           { id: 1, text: "2: 4", isCorrect: false },
    //           { id: 2, text: "3: 6", isCorrect: false },
    //           { id: 3, text: "4: 7", isCorrect: true },
    //         ],
    //       },    
    //   ];
    // const changeSelect = ()=>{
    //     setSelectOption(!selectOption)
    // }
  return (
    <>
            {/* {
                selectOption === false ? <div onClick={changeSelect} class="option-box-cont option-gap option-bpx-gap"> 
                <h4 class="option-box">A</h4>
                <p class="options-font">Option A</p>
                     </div> :

                    <div onClick={changeSelect} class="option-box-cont option-gap option-bpx-gap option-box-cont-active"> 
                    <h4 class="option-box-active">A</h4>
                    <p class="options-font">Option A</p>
                    </div>
            }
          

            <div class="option-box-cont option-gap option-bpx-gap"> 
                <h4 class="option-box">B</h4>
                <p class="options-font">Option B</p>
            </div>
            <div class="option-box-cont option-gap option-bpx-gap"> 
                <h4 class="option-box">C</h4>
                <p class="options-font">Option C</p>
            </div>
            <div class="option-box-cont option-gap option-bpx-gap"> 
                <h4 class="option-box">D</h4>
                <p class="options-font">Option D</p>
            </div>
       */}
            {/* {
                option.map((op)=>  selectOption === false ?
                        <div onClick={changeSelect}  class="option-box-cont option-gap option-bpx-gap"> 
                            <h4 class="option-box">{op}</h4>
                            <p class="options-font">Option {op}</p>
                        </div> :
                        <div onClick={changeSelect} class="option-box-cont option-gap option-bpx-gap option-box-cont-active"> 
                        <h4 class="option-box">{op}</h4>
                        <p class="options-font">Option {op}</p>
                    </div>

                    )
            } */}
    </>
  )
}
