import { Typography } from '@mui/material'
import { useState, useEffect } from 'react'

import './App.css'
import { GetData } from './components/API/GetQuestion'
import Home from './components/Home/Home'
import { QuizOptionQuestion, QuizQuestion, QuizType } from './components/TsTypes/QuizTypes'

function App() {
  


  const [quiz, setQuiz] = useState<QuizQuestion[]>([])
  const [currentquiz, setCurrentquiz] = useState(0)
  const [ score, setScore] = useState(0)



   useEffect(()=>{

   const datafetch =  async () => {
    const swal : QuizQuestion[]  =  await GetData(5, "hard");

    // const checkanswer :QuizQuestion[] = await GetData(5, "hard" )
    
    console.log(swal);

    // setCheckans(checkanswer)

    setQuiz(swal)
    
    

   }
   datafetch();

   },[])

   const HandleSubmit = (e:React.FormEvent<EventTarget>, userAns:string)=>{

    const currentQuestion = quiz[currentquiz]
  
    console.log(currentQuestion + " currentQuestion");
    
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

      answer = {quiz[currentquiz].answer}
      
      callback = {HandleSubmit}
    /> 
    </div>
  )
}

export default App
