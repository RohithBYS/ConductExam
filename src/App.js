import './App.css';
import { useState } from 'react';
import ExamSetup from './ExamSetup';
import ExamPalette from './ExamPalette';





function App() {

  const [showExam, setShowExam]=useState(false)
  // const [display, setDispay] = useState(null)
  const startExam = (check) =>{
    setShowExam(check)
    console.log("Data in APP.js from Exam setup to APP : "+showExam)
  }
  return (
    <>



    {
      showExam === false ? <ExamSetup startExam={startExam}/> : <ExamPalette/>
    }

    </>
  );
}

export default App;
