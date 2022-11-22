import React from 'react'
import mathImg from '../../images/math.png'
import physicsImg from '../../images/physics.png'
import chemistryImg from '../../images/chemistry.png'

function Syllabus() {

  return (
    <>
      <div class="content-cont">
        <form>
          <div class="subject-img">
            <img src={mathImg} width="20" height="20" alt="mathImg" />
            <h4 class="blue-text">Maths</h4>
          </div>
          <div class="chapter-radio-btn">
            <input type="radio" id="chapter" name="chapter" value="HTML" />
            <label class="light-blue-text" for="chapter">Quadratic Equations</label>
          </div>
          <div class="chapter-radio-btn">
            <input type="radio" id="chapter" name="chapter" value="HTML" />
            <label class="light-blue-text" for="chapter">Quadratic Equations</label>
          </div>
          
      
        </form>

        <form>
          <div class="subject-img">
            <img src={physicsImg} width="20" height="20" alt="mathImg" />
            <h4 class="main-head-text">Physics</h4>
          </div>
          <div class="chapter-radio-btn">
            <input type="radio" id="chapter" name="chapter" value="HTML" />
            <label class="sub-head-text" for="chapter">Quadratic Equations</label>
          </div>
          
         
        </form>

        <form>
          <div class="subject-img">
            <img src={chemistryImg} width="20" height="20" alt="mathImg" />
            <h4 class="blue-text">Chemistry</h4>
          </div>
          <div class="chapter-radio-btn">
            <input type="radio" id="chapter" name="chapter" value="HTML" />
            <label class="light-blue-text" for="chapter">Quadratic Equations</label>
          </div>
          
        
        </form>
      </div>
    </>
  )
}

export default Syllabus