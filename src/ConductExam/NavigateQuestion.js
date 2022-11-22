import React from 'react'
import { useState } from 'react';
export default function NavigateQuestion() {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  return (
    <>
        <div>
            <div class="navigate-quest-box">
                <button disabled={currentQuestion<=0}type="submit" class="navigate-btn">Previous</button>
                <button type="submit" class="navigate-btn">Next</button>
            </div>
        </div>
        
        
    </>
  )
}
