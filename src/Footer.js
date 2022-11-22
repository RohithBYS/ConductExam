import React from 'react'
import { useState } from 'react';

export default function Footer({childToParent}) {

    const start = true

    const [isDisabled, setIsDisabled] = useState(true);
    const [checked, setChecked] = useState(false);


    const canBeSubmitted = () => {
    return checked ? setIsDisabled(true) : setIsDisabled(false);
    };

    const onCheckboxClick = () => {
        setChecked(!checked);
        return canBeSubmitted();
    };

    // const handleSubmit = () =>{
    //     console.log("Submitted")
    //     console.log(props.value)
    // }
   
  

  return (
    <>
        <div class="arrange-col arrange-end terms">
            <div>
                <input type="checkbox" name="terms" value="accept"  onClick={onCheckboxClick}></input>
                <label for="terms"> I Accept the instructions</label><br></br>
            </div>
           
            <button type="submit" class="default-btn start-test-btn" disabled={isDisabled} onClick={() => childToParent(start)} >START TEST</button>
        </div>
    </>
  )
}
