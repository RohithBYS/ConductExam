
// import { useState } from 'react';
import Type from './ExamDetails/Type';
import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';


export default function ExamSetup ({startExam}) {
    const[data, setData] = useState(false)
    

    const childToParent = (childdata) => {
      setData(childdata);
      startExam(childdata)
    }

   
    // console.log("Data in Exam Setup from Footer: "+data)
    // console.log("Value : "+props.value)
    return (
    <>
      
      <Header/>
      <Type/>
      {/* <Footer openExam={openExam}/> */}
      <Footer childToParent={childToParent}/>
    </>
    
      
    )
  
}
