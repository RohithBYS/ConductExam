import React, { useState } from 'react'

export default function ResponseBox(props) {
    const num = [1,2,3,4,5,6,7,8,9,10]
    const [value2, setValue2]= useState(0)
    
    
    const boxStyle ={
      color: "white",
      fontWeight : "bold",
      // backgroundColor: value2 === 1 ? "#1CD8E9" : value2 ===2 ? "#929292" : value2 ===3 ? "#FEBE3D" : value2 ===4 ? "#FF807B" : "grey",
      padding : "7px 15px 7px 15px",
      width : "fit-content",
      borderRadius: "10px",
      marginLeft: "2.7%"
    }

    
    
    // console.log("Response Box : "+props.value)
    const res= props.value
    console.log("Response Box Updated : "+res)

  return (
    <>
        <div class="response-box">
            <div class="arrange-column-wise">
             


            {/* <p class="number-box answered-back-color font-white">01</p> */}
            
              {
                num.map(function(no,index){
                  console.log("Index "+index)
                  console.log("Index in response "+res[index])
                  
                  return(  index === props.value1 ? <p key={index} class="number-box current-question font-white">{no}</p> :
                  <div>
                       
                      {/* <p key={index} style={{backgroundColor: res[index] === 1 ? "#1CD8E9" : res[index] ===2 ? "#929292" : res[index] ===3 ? "#FEBE3D" : res[index] ===4 ? "#FF807B" : "grey",  color: "white",padding : "7px 15px 7px 15px", width : "fit-content",borderRadius: "10px", marginLeft: "2.7%", fontWeight : "bold"}}>{no}</p> */}
                      <p key={index} style={(boxStyle,{backgroundColor: res[index] === 1 ? "#1CD8E9" : res[index] ===2 ? "#929292" : res[index] ===3 ? "#FEBE3D" : res[index] ===4 ? "#FF807B" : "grey",  color: "white",padding : "7px 15px 7px 15px", width : "fit-content",borderRadius: "10px", marginLeft: "2.7%", fontWeight : "bold"})}>{no}</p>
                  </div>
                  
                  )
                }
                
                )
                
              } 
              {/* <p style={boxStyle}>Question : {props.value1}</p>
              <p class="number-box not-answered-back-color font-white">Status : {props.value2}</p> */}
              {/* <p class="number-box not-answered-back-color font-white">Status : {props.quest[0].ansStatus}</p>
            
        {/* <p class="number-box not-answered-back-color font-white">{props.value}</p> */}
        {/* <p class="number-box not-answered-back-color font-white">02</p>
        <p class="number-box not-answered-back-color font-white">03</p>
        <p class="number-box not-answered-back-color font-white">04</p>
        <p class="number-box not-answered-back-color font-white">05</p>

        <p class="number-box not-answered-back-color font-white">06</p>
        <p class="number-box not-answered-back-color font-white">07</p>
        <p class="number-box not-answered-back-color font-white">08</p>
        <p class="number-box not-answered-back-color font-white">09</p>
        <p class="number-box not-answered-back-color font-white">10</p> */}

            </div>
        
       
        </div>
        
    </>
  )
}
