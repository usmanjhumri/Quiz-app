import { Typography } from '@mui/material'
import { useState, useEffect } from 'react'

import './App.css'
import { GetData } from './components/API/GetQuestion'
import Home from './components/Home/Home'
import { QuizQuestion } from './components/TsTypes/QuizTypes'

function App() {
  


  const [quiz, setQuiz] = useState<QuizQuestion[]>([])
  const [currentquiz, setCurrentquiz] = useState(0)

   useEffect(()=>{

   const datafetch =  async () => {
    const swal : QuizQuestion[]  =  await GetData(5, "hard");
    
    console.log(swal);

    setQuiz(swal)
    
    

   }
   datafetch();

   },[])

   const HandleSubmit = ()=>{
    
   }

   if(!quiz.length)
   return<h1>Loading ...</h1>

  return (
    <div className="App">
      <Home
        option = {quiz[currentquiz].option} 
      question ={quiz[currentquiz].question}
      // callback = {HandleSubmit}
    /> 
    </div>
  )
}

export default App
