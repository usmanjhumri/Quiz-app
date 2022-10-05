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
    e.preventDefault()

    const currentQuestion:QuizQuestion = quiz[currentquiz]

    // const correct_ans:string = currentQuestion.correct_answer

    // console.log(currentQuestion + " currentQuestion");
    
    console.log(  "correctAnswer " + currentQuestion.correct_answer  + " user select the ans " + userAns);
  
    
    if(userAns === currentQuestion.correct_answer){
      setScore(score + 1)
      
    }

     if(currentquiz !== quiz.length - 1){

       setCurrentquiz(currentquiz+1)
     }
     else{
      alert('quiz completed' + "and your final score is +" + score + " out of " + quiz.length)
      setCurrentquiz(0)
      setScore(0)
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
