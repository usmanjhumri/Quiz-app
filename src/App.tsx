import { Typography } from '@mui/material'
import { useState, useEffect } from 'react'

import './App.css'
import { GetData } from './components/API/GetQuestion'
import Home from './components/Home/Home'
import { QuizQuestion } from './components/TsTypes/QuizTypes'

function App() {
  


  const [quiz, setQuiz] = useState<QuizQuestion[]>([])

   useEffect(()=>{

   const datafetch =  async () => {
    const swal : QuizQuestion[]  =  await GetData(5, "hard");
    
    console.log(swal);

    setQuiz(swal)
    
    

   }
   datafetch();

   },[])

   if(!quiz.length)
   return<h1>Loading ...</h1>

  return (
    <div className="App">
      <Home
        option = {quiz[0].option} 
      question ={quiz[0].question}
    /> 
    </div>
  )
}

export default App
