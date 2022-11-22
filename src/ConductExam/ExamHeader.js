import React, { useState } from 'react'

export default function ExamHeader(props) {
  // console.log("Submit button : "+props.enabling)
  // const [isSubmit, setIsSubmit] = useState(false)

  const handleSubmit = () =>{
      // setIsSubmit(true)
      // console.log("entering into handlesubmit")
      props.receieveSubmit(true)
  }

  return (
    <>
        <div class="exam-main-head-cont">
            <div class="arrange-col arrange-end">
                <h2 class="main-head-text">Grand Test</h2>
                {/* {
                  props.enabling === true ? <button type="submit" onSubmit={handleSubmit} class="default-btn-enabled start-test-btn">SUBMIT</button> : <button type="submit" class="default-btn-disabled start-test-btn">SUBMIT</button>
                } */}
                <button type="submit" onClick={handleSubmit} class="default-btn start-test-btn">SUBMIT</button>
            </div>
            
        </div>
       
       
       
    </>
  )
}
