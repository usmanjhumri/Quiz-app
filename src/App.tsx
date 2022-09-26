import { Typography } from '@mui/material'
import { useState, useEffect } from 'react'

import './App.css'
import { GetData } from './components/API/GetQuestion'
import Home from './components/Home/Home'
import { QuizOptionQuestion, QuizQuestion } from './components/TsTypes/QuizTypes'

function App() {
  


  const [quiz, setQuiz] = useState<QuizQuestion[]>([])
  const [ questionN, setQuestionN] = useState(0)
  const [currentquiz, setCurrentquiz] = useState(0)

   useEffect(()=>{

   const datafetch =  async () => {
    const swal : QuizQuestion[]  =  await GetData(5, "hard");
    
    console.log(swal);

    setQuiz(swal)
    
    

   }
   datafetch();

   },[])

   const HandleSubmit = (e:any)=>{
     e.preventDefault()
     if(currentquiz !== quiz.length - 1){

       setCurrentquiz(currentquiz+1)
     }
     else{
      alert('quiz completed')
      setCurrentquiz(0)
      window.location.reload()
     }
    
   }

   if(!quiz.length)
   return<h1>Loading ...</h1>

  return (
    <div className="App">
      <Home
        option = {quiz[currentquiz].option} 
      question ={quiz[currentquiz].question}
      
      callback = {HandleSubmit}
    /> 
    </div>
  )
}

export default App
